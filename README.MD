Project to support attempt by Bristol dev teams to standardise logging in Node.js apps

## Usage

Setting up the logger:

```
const logger = require('node-js-logger');
logger.init({
  level: 'info',
  airbrakeKey: process.env.errbit_key,
  airbrakeHost: process.env.errbit_server,
  airbrakeLevel: 'error'
})
```

Integrating with HAPI17 using `good-winston`:

```
const Good = require('good');
const GoodWinston = require('good-winston');
const goodWinstonStream = new GoodWinston({ winston: logger });

...

const start = async() => {

  ...

  await server.register({
    plugin: Good,
    options: { ...config.good,
      reporters: {
        winston: [goodWinstonStream]
      }
    }
  });

  ...
}

```

## Contributing to this project

Please read the [contribution guidelines](/CONTRIBUTING.md) before submitting a pull request.

## Credits

Original source for this work came from [Data Returns PI](https://github.com/DEFRA/data-returns-pi-frontend)
Original implementation of Winston Airbake transport from [winston-airbrake](https://github.com/dstevensio/winston-airbrake)

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

>Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
