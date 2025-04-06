from src.translator import translate_content


def test_chinese():
    is_english, translated_content = translate_content("这是一条中文消息")
    assert is_english == False
    assert "Chinese" in translated_content


def test_english():
    is_english, translated_content = translate_content("This is an English message")
    assert is_english == True
    assert "English" in translated_content


def test_llm_normal_response():
    pass


def test_llm_gibberish_response():
    pass
