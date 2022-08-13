const dotenv = require("dotenv");
dotenv.config();

//Configgurate the firebase environment

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_API_ID: process.env.FIREBASE_API_ID,
  FIREBASE_MEASURMENT_ID: process.env.FIREBASE_MEASURMENT_ID
};

module.exports = config;