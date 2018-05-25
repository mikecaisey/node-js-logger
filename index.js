require('dotenv').config();
const logger = require('./lib/index.js');


logger.init({
  file: './logs/log.txt',
  airbrakeKey: process.env.AIRBRAKE_KEY,
  airbrakeHost: process.env.AIRBRAKE_HOST
});


logger.info('hello');
logger.error('Test really bad error', new Error('Something bad'));