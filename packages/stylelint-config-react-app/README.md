# @stinkstudios/stylelint-config-react-app [![NPM version](http://img.shields.io/npm/v/@stinkstudios/stylelint-config-react-app.svg)](https://www.npmjs.com/package/@stinkstudios/stylelint-config-react-app) [![Build Status](https://travis-ci.com/Stinkstudios/create-react-app.svg?branch=master)](https://travis-ci.com/Stinkstudios/create-react-app)

## Installation

```bash
yarn add @stinkstudios/stylelint-config-react-app
```

Has a peer dependency of `stylelint@^9.3.0`. If you haven't added stylelint to your project then

```bash
yarn add stylelint@^9.3.0
```

## Usage

If you've installed `@stinkstudios/stylelint-config-react-app` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@stinkstudios/stylelint-config-react-app"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```json
{
  "extends": "@stinkstudios/stylelint-config-react-app",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends", "ignores"]
      }
    ],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

### stylelint-no-unsupported-browser-features

As this preset uses [`stylelint-no-unsupported-browser-features`](https://github.com/ismay/stylelint-no-unsupported-browser-features/tree/v3.0.0) you will getting warnings for unsupported css features to ignore these you can add to your stylelint config rules.

```json
"plugin/no-unsupported-browser-features": [
  true,
  {
    "severity": "warning",
    "ignore": [
      "calc",
      "css-animation",
      "flexbox",
      "transforms2d",
      "viewport-units"
    ]
  }
]
```

## Stylelint extends

- [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)
- [`stylelint-config-css-modules`](https://github.com/pascalduez/stylelint-config-css-modules)
- [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier)

## Stylelint Plugins

- [`stylelint-declaration-block-no-ignored-properties`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
- [`stylelint-no-unsupported-browser-features`](https://github.com/ismay/stylelint-no-unsupported-browser-features)
- [`stylelint-order`](https://github.com/hudochenkov/stylelint-order)

## [Changelog](https://github.com/Stinkstudios/create-react-app/blob/master/CHANGELOG.md)

## [License](LICENSE)
````
