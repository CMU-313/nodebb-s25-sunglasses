'use strict';


module.exports.translate = async function (data) {
    const url = `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=en&q=${encodeURIComponent(data.content)}`;

    try {
        const response = await fetch(url, {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const translation_data = await response.json();

        const translatedText = translation_data[0][0];
        const detectedLanguage = translation_data[0][1];

        return [detectedLanguage === "en", translatedText];
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
    
}

