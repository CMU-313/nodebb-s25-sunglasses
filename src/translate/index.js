'use strict';

const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
    const TRANSLATOR_API = 'http://127.0.0.1:5001/';
    try {
        const response = await fetch(`${TRANSLATOR_API}/?content=${postData.content}`);
        const data = await response.json();
        console.log(data);
        return [data.is_english, data.translated_content];
    } catch (error) {
        console.error('Error:', error);
        return [false, ''];
    }
};
