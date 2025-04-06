'use strict';

// var request = require('request');

const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
	const TRANSLATOR_API = 'http://17313-team10.isri.cmu.edu:5000/';
	const response = await fetch(`${TRANSLATOR_API}/?content=${postData.content}`);
	const data = await response.json();
	console.log(data);
	return [data.is_english, data.translated_content];
};
