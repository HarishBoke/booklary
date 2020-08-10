// config used by dashboard client side only
require('dotenv').config();
const apiENV = process.env.API_ENV || 'localhost:3001';
const ajaxENV = process.env.AJAX_ENV || 'localhost:3001';

module.exports = {
	// dashboard UI language
	language: 'en',
	apiBaseUrl: `http://${apiENV}/api/v1`,
	apiWebSocketUrl: `ws://${ajaxENV}`,
	developerMode: true
};
