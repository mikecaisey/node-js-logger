'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const logger = require('./server/test-logger');

let logs = [];

logger.on('logging', function (transport, level, msg, meta) {
  logs.push({
    level, msg, meta
  });
});

const lastLog = () => {
  return logs[logs.length - 1];
};

lab.experiment('Test logger', () => {
  lab.test('Logging level info', async () => {
    logger.info('Info level logging');

    Code.expect(lastLog().level).to.equal('info');
    Code.expect(lastLog().msg).to.equal('Info level logging');
  });

  lab.test('Logging level warning', async () => {
    logger.warn('Warning level logging');

    Code.expect(lastLog().level).to.equal('warn');
    Code.expect(lastLog().msg).to.equal('Warning level logging');
  });

  lab.test('Logging level error', async () => {
    logger.error('Error level logging');

    Code.expect(lastLog().level).to.equal('error');
    Code.expect(lastLog().msg).to.equal('Error level logging');
  });
});
