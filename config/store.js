// config used by store client side only
require('dotenv').config();
const apiENV = process.env.API_ENV || 'localhost:3001';
const currentProtocol = process.env.CURRENT_PROTOCOL || 'http';

module.exports = {
	// store UI language
	language: 'en',
	ajaxBaseUrl: `${currentProtocol}://${apiENV}/ajax`
};
