const logger = require('../../../lib/index.js');

logger.init({
  level: 'info',
  airbrakeKey: process.env.AIRBRAKE_KEY,
  airbrakeHost: process.env.AIRBRAKE_HOST,
  airbrakeLevel: 'error'
});

module.exports = logger;
