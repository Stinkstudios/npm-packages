# @stinkstudios/stylelint-config-react-app

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Build Status]![Known Vulnerabilities][snyk-img]][snyk-url]![MIT license][mit-img]][mit-url]

## Extends

- [`stylelint-config-css-modules`]
- [`stylelint-config-prettier`]
- [`stylelint-config-standard`]

## Plugins

- [`stylelint-declaration-block-no-ignored-properties`]
- [`stylelint-no-unsupported-browser-features`]
- [`stylelint-order`]

## Installation

```bash
yarn add @stinkstudios/stylelint-config-react-app
```

Has a peer dependency of `stylelint@^9.10.1`. If you haven't added stylelint to your project then

```bash
yarn add stylelint@^9.10.1
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

## Visual Studio Code Setup

To have Visual Studio Code format your `.css` files use the below extensions and settings.

It will also autofix [`order/properties-order`] errors

### Extensions

- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Settings

```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
  "[css]": {
    "editor.formatOnSave": true
  },
  "prettier.stylelintIntegration": true
}
```

## [Changelog](https://github.com/Stinkstudios/npm-packages/blob/master/packages/stylelint-config-react-app/CHANGELOG.md)

## [License](https://github.com/Stinkstudios/npm-packages/blob/master/packages/stylelint-config-react-app/LICENSE)

[downloads-img]: https://img.shields.io/npm/dm/@stinkstudios/stylelint-config-react-app.svg?style=flat-square
[npm-img]: https://img.shields.io/npm/v/@stinkstudios/stylelint-config-react-app.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@stinkstudios/stylelint-config-react-app
[snyk-img]: https://snyk.io/test/github/Stinkstudios/npm-packages/badge.svg?targetFile=packages%2Fstylelint-config-react-app%2Fpackage.json
[snyk-url]: https://snyk.io/test/github/Stinkstudios/npm-packages?targetFile=packages%2Fstylelint-config-react-app%2Fpackage.json
[mit-img]: http://img.shields.io/badge/license-MIT-brightgreen.svg
[mit-url]: http://opensource.org/licenses/MIT
[`order/properties-order`]: https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
[`stylelint-config-css-modules`]: https://github.com/pascalduez/stylelint-config-css-modules
[`stylelint-config-prettier`]: https://github.com/prettier/stylelint-config-prettier
[`stylelint-config-standard`]: https://github.com/stylelint/stylelint-config-standard
[`stylelint-declaration-block-no-ignored-properties`]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
[`stylelint-no-unsupported-browser-features`]: https://github.com/ismay/stylelint-no-unsupported-browser-features
[`stylelint-order`]: https://github.com/hudochenkov/stylelint-order
