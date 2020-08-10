// config used by store client side only
require('dotenv').config();
const apiENV = process.env.API_ENV || 'localhost:3001';

module.exports = {
	// store UI language
	language: 'en',
	ajaxBaseUrl: `http://${apiENV}/ajax`
};
