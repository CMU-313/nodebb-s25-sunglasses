from openai import OpenAI
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()


class Response(BaseModel):
    is_english: bool
    translated_content: str


def translate_content(content: str) -> tuple[bool, str]:
    api_key = os.getenv("OPENAI_API_KEY")
    openai = OpenAI(api_key=api_key)

    print(f"Translating content: {content}")

    # Translate the content to English using OpenAI's GPT-3.5 Turbo
    response = openai.beta.chat.completions.parse(
        model="gpt-4o",
        messages=[
            {
                "role": "user",
                "content": f"Analyze the following text and return whether it is was in english, and the translated content to english: {content}",
            }
        ],
        temperature=0.7,
        response_format=Response,
    )

    message = response.choices[0].message
    if message.parsed:
        is_english = message.parsed.is_english
        translated_content = message.parsed.translated_content
    else:
        is_english = False
        translated_content = "Translation failed"

    return is_english, translated_content
