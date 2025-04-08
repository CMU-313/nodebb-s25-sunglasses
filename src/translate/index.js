'use strict';
var request = require('request');

const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
    const TRANSLATOR_API = 'http://17313-team10.s3d.cmu.edu:5001';
    try {
        const response = await fetch(`${TRANSLATOR_API}/?content=${postData.content}`);
        const data = await response.json();
        console.log(data);
        return [data.is_english, data.translated_content];
    } catch (error) {
        // console.error('Error fetching translation:', error);
        return [true, postData.content];
    }
};
