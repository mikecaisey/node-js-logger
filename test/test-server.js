const Hapi = require('hapi');
const Good = require('good');
const GoodWinston = require('good-winston');

const logger = require('./test-logger.js');
const goodWinstonStream = new GoodWinston({ winston: logger });

const server = Hapi.server();

const start = async () => {
  logger.info('Starting server');

  await server.register({
    plugin: Good,
    options: {
      reporters: {
        winston: [goodWinstonStream]
      }
    }
  });

  server.log('info', 'Server started');
};

start();

module.exports = server;
