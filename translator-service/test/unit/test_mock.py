from mock import patch
import openai
import os
from dotenv import load_dotenv

# Load variables from .env file
load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
client = openai.OpenAI(api_key=api_key)


def get_translation(post: str) -> str:
    context = (
        "Translate the following non-English text into English:"  # TODO: Insert context
    )
    # ---------------- YOUR CODE HERE ---------------- #
    prompt = f"{context}\n\n{post}"
    response = client.chat.completions.create(
        model="gpt-4o-mini",  # model name
        messages=[{"role": "user", "content": prompt}],
    )
    translation = response.choices[0].message.content
    return translation


def get_language(post: str) -> str:
    context = "Determine if the following text is written in English. Respond with 'English' if it is in English, and 'Non-English' if it is not."  # TODO: Insert context
    # ---------------- YOUR CODE HERE ---------------- #
    prompt = f"{context}\n\n{post}"
    response = client.chat.completions.create(
        model="gpt-4o-mini",  # model name
        messages=[{"role": "user", "content": prompt}],
    )
    translation = response.choices[0].message.content
    return translation


def query_llm_robust(post: str) -> tuple[bool, str]:
    """
    TODO: Implement this
    """
    try:
        language = get_language(post)

        if isinstance(language, str) and language.strip().lower() == "english":
            result = (True, post.strip())
        elif language.strip().lower() == "non-english":
            translation = get_translation(post)
            result = (False, translation.strip())

        if not (
            isinstance(result, tuple)
            and len(result) == 2
            and isinstance(result[0], bool)
            and isinstance(result[1], str)
        ):
            result = (True, post.strip())

        return result

    except Exception as e:
        print("Error in query_llm_robust:", e)
        return (True, post.strip())


@patch.object(client.chat.completions, "create")
def test_unexpected_language(mocker):
    # we mock the model's response to return a random message
    mocker.return_value.choices[0].message.content = "I don't understand your request"

    # TODO assert the expected behavior
    post = "Hier ist dein erstes Beispiel."
    result = query_llm_robust(post)
    print(result)
    # Expect fallback: (True, original post)
    assert result == (True, post.strip())


@patch(__name__ + ".get_translation", return_value=42)
@patch(__name__ + ".get_language", return_value="French")
def test_unexpected_translation(mock_get_language, mock_get_translation):
    """
    If get_language returns "French" (triggering translation) and get_translation returns an integer,
    query_llm_robust should encounter an error when attempting translation.strip() and fallback.
    """
    post = "Bonjour, comment ça va?"
    result = query_llm_robust(post)
    # Fallback response because translation output is malformed.
    assert result == (True, post.strip())


# Test 3: Exception in get_language
@patch(__name__ + ".get_language", side_effect=Exception("Language error"))
def test_exception_in_get_language(mock_get_language):
    """
    If get_language raises an exception, query_llm_robust should catch it and fallback.
    """
    post = "Some post"
    result = query_llm_robust(post)
    assert result == (True, post.strip())


# Test 4: Exception in get_translation
@patch(__name__ + ".get_translation", side_effect=Exception("Translation error"))
@patch(__name__ + ".get_language", return_value="Spanish")
def test_exception_in_get_translation(mock_get_language, mock_get_translation):
    post = "¿Cómo estás?"
    result = query_llm_robust(post)
    assert result == (True, post.strip())
