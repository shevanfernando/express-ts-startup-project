/**
 * @created 06/10/2021 - 11:10
 * @project express-ts-startup-project
 * @author  Shevan
 * @file    config
 */

import dotenv from 'dotenv';

dotenv.config();

switch (process.env.NODE_ENV) {
  case 'production': {
    // initialize your variables in production env
    break;
  }
  case 'test': {
    // initialize your variables in test env
    break;
  }
  default: {
    // initialize your variables in development env
  }
}

const API_PREFIX = '/api';
const API_PORT = process.env.APP_PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const TOKEN_SECRET = process.env.TOKEN_SECRET === undefined ? 'Pas@wOrd' : process.env.TOKEN_SECRET;
const TOKEN_EXPIRE_TIME = process.env.TOKEN_EXPIRE_TIME === undefined ? '1h' : process.env.TOKEN_EXPIRE_TIME;

export default {
  API_PREFIX,
  API_PORT,
  ENV,
  TOKEN_SECRET,
  TOKEN_EXPIRE_TIME,
};
