# @stinkstudios/cf-auth

[![Main Workflow][workflow-img]][workflow-url] [![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Known Vulnerabilities][snyk-img]][snyk-url] [![MIT license][mit-img]][mit-url]

# CloudFront Authentication Library

This package has been created to facilitate the creation of lambda@edge function that will
be used to password protect CloudFront distributions.

## Installation

```bash
yarn add @stinkstudios/cf-auth # TODO: name might change
```

## Usage

```js
const cfAuth = require('@stinkstudios/cf-auth').default;

exports.handler = (event, context, callback) =>
  cfAuth(
    {
      validCredentails: [
        {
          username: 'my-name',
          password: 'good password',
        },
      ],
      whitelistedIPs: ['127.0.0.1'],
    },
    event,
    callback
  );
```

## Configuration

### Credentials

You can pass a list of allowed credentials in the configuration:

```json
{
  "validCredentails": [
    {
      "username": "my-name",
      "password": "good password"
    }
  ]
}
```

### Distributions

You can pass a list of distributions where the authentication is required,
by default the list is undefined, so the authentication is added to all the
distributions.

```json
{
  "enabledDistributions": ["EDFDVBD6EXAMPLE"]
}
```

### Whitelisted IPS

You can pass a list of IPs that won't be asked for the authentication.

```json
{
  "whitelistedIPs": ["127.0.0.1"]
}
```

[downloads-img]: https://img.shields.io/npm/dm/@stinkstudios/cf-auth.svg?style=flat-square
[npm-img]: https://img.shields.io/npm/v/@stinkstudios/cf-auth.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@stinkstudios/cf-auth
[snyk-img]: https://snyk.io/test/github/Stinkstudios/npm-packages/badge.svg?targetFile=packages%2Fcloudfront-auth%2Fpackage.json
[snyk-url]: https://snyk.io/test/github/Stinkstudios/npm-packages?targetFile=packages%2Fcloudfront-auth%2Fpackage.json
[mit-img]: http://img.shields.io/badge/license-MIT-brightgreen.svg
[mit-url]: http://opensource.org/licenses/MIT
[workflow-img]: https://github.com/stinkstudios/npm-packages/workflows/Main/badge.svg?branch=master
[workflow-url]: https://github.com/Stinkstudios/npm-packages/actions?query=workflow%3AMain
