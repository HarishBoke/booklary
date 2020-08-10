// config used by server side only
require('dotenv').config();

const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'harishboke';
const dbUser = process.env.DB_USER || '';
const dbPass = process.env.DB_PASS || '';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';
const apiENV = process.env.API_ENV || 'localhost:3001';
const ajaxENV = process.env.AJAX_ENV || 'localhost:3001';
const storeENV = process.env.STORE_ENV || 'localhost:3000';
const apiListenPortENV = process.env.API_LISTEN_PORT;
const storeListenPortENV = process.env.STORE_LISTEN_PORT;

const dbUrl =
	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `http://${apiENV}/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `http://${ajaxENV}/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: `http://${storeENV}`,

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: apiListenPortENV,
	storeListenPort: storeListenPortENV,

	// used by API
	mongodbServerUrl: dbUrl,

	// your shop smtp settings
	smtpServer: {
		service: process.env.SMTP_SERVICE,
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: process.env.SMTP_SECURE,
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
		fromName: process.env.SMTP_FROM_NAME,
		fromAddress: process.env.SMTP_FROM_ADDRESS
	},
	// key to sign tokens
	jwtSecretKey: '-',

	// key to sign store cookies
	cookieSecretKey: '-',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'en',

	// used by API
	orderStartNumber: 1000,

	// cost factor, controls how much time is needed to calculate a single BCrypt hash
	// for production: recommended salRounds > 12
	saltRounds: process.env.SALT_ROUNDS || 12,

	developerMode: true
};
