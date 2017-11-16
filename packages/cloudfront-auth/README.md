[![CircleCI](https://circleci.com/gh/Stinkstudios/cloudfront-auth.svg?style=svg&circle-token=4586e5d9e5395a5670a57d17b97850a0e6d916b1)](https://circleci.com/gh/Stinkstudios/cloudfront-auth)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# CloudFront Authentication Library

This package has been created to facilitate the creation of lambda@edge function that will
be used to password protect CloudFront distributions.

## Installation

  ```bash
  yarn add cloudfront-auth # TODO: name might change
  ```

## Usage

```js
const cfAuth = require('cloudfront-auth');

const config = {};

exports.handler = (event, context, callback) => cfAuth(config, event, callback);
```

## Configuration

TODO: will explain how to configure this when the API will be final and stable.