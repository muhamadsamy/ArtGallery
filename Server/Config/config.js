// config/config.js

import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const config = {
  development: {
    databaseURI: process.env.DEV_DATABASE_URI || 'mongodb://localhost:27017/artgallery_dev',
    jwtSecret: process.env.DEV_JWT_SECRET || 'supersecretdevjwtsecret',
  },
  production: {
    databaseURI: process.env.PROD_DATABASE_URI || 'mongodb://db_server/artgallery_prod',
    jwtSecret: process.env.PROD_JWT_SECRET || 'supersecretprodjwtsecret',
  },
};

const environment = process.env.NODE_ENV || 'development';

export default config[environment];
