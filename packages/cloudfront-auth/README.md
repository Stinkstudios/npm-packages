[![CircleCI](https://circleci.com/gh/Stinkstudios/cloudfront-auth.svg?style=svg&circle-token=4586e5d9e5395a5670a57d17b97850a0e6d916b1)](https://circleci.com/gh/Stinkstudios/cloudfront-auth)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# CloudFront Authentication Library

This package has been created to facilitate the creation of lambda@edge function that will
be used to password protect CloudFront distributions.

## Installation

```bash
yarn add @stinktudios/cf-auth # TODO: name might change
```

## Usage

```js
const cfAuth = require("@stinkstudios/cf-auth").default;

exports.handler = (event, context, callback) =>
  cfAuth(
    {
      validCredentails: [
        {
          username: "my-name",
          password: "good password"
        }
      ],
      whitelistedIPs: ["127.0.0.1"]
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
