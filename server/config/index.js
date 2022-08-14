const dotenv = require("dotenv");
dotenv.config();

//Configgurate the firebase environment

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  FIREBASE_TYPE: process.env.FIREBASE_TYPE,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID,
  FIREBASE_AUTH_URI: process.env.FIREBASE_AUTH_URI,
  FIREBASE_TOKEN_ID: process.env.FIREBASE_TOKEN_ID,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL: process.env. FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL: process.env.FIREBASE_CLIENT_X509_CERT_URL
};

module.exports = config;

