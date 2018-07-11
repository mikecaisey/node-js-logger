'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const logger = require('./server/test-logger');
const server = require('./server/test-server');

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

  lab.test('HAPI integration', async () => {
    const request = {
      method: 'GET',
      url: '/some-page.html',
      headers: {},
      payload: {}
    };

    await server.inject(request);

    Code.expect(lastLog().level).to.equal('info');
    Code.expect(lastLog().msg).to.match(/\/some-page\.html/);
  });
});
