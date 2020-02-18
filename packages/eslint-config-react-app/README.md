# @stinkstudios/eslint-config-react-app

[![Main Workflow][workflow-img]][workflow-url] [![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Known Vulnerabilities][snyk-img]][snyk-url] [![MIT license][mit-img]][mit-url]

Supports linting of Javascript `.js` / React JavaScript `.jsx` / TypeScript `.ts` / TypeScript React `.tsx`

## Extends

- [`eslint:recommended`]
- [`plugin:import/errors`]
- [`plugin:import/warnings`]
- [`plugin:react/recommended`]
- [`plugin:jest/recommended`]
- [`plugin:jest/style`]
- [`plugin:jsx-a11y/recommended`]
- [`plugin:unicorn/recommended`]
- [`plugin:compat/recommended`]
- [`prettier`]
- [`prettier/react`]
- [`plugin:@typescript-eslint/recommended`]
- [`prettier/@typescript-eslint`]

## Plugins

- [`eslint-plugin-compat`]
- [`eslint-plugin-import`]
- [`eslint-plugin-jsx-a11y`]
- [`eslint-plugin-react`]
- [`eslint-plugin-jest`]
- [`eslint-plugin-unicorn`]
- [`@typescript-eslint/eslint-plugin`]

## Installation

```bash
$ yarn add @stinkstudios/eslint-config-react-app babel-eslint@10.x eslint@5.x eslint-config-prettier@4.x eslint-plugin-compat@3.x eslint-plugin-import@2.x eslint-plugin-jest@22.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-unicorn@8.x @typescript-eslint/eslint-plugin@1.x @typescript-eslint/parser@1.x -E -D
```

## Usage

If you've installed `@stinkstudios/eslint-config-react-app` locally within your project, just set your [`eslint`][config](https://eslint.org/docs/user-guide/configuring#configuring-eslint) to:

```json
{
  "extends": "@stinkstudios/eslint-config-react-app"
}
```

## Visual Studio Code Setup

To have Visual Studio Code format and autofix your `.js` files use the below extensions and settings.

### Extensions

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```
ext install esbenp.prettier-vscode dbaeumer.vscode-eslint
```

### Settings

```json
{
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],

  "editor.formatOnSave": false,
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  },
  "prettier.eslintIntegration": true
}
```

## [Changelog](https://github.com/Stinkstudios/npm-packages/blob/master/packages/eslint-config-react-app/CHANGELOG.md)

## [License](https://github.com/Stinkstudios/npm-packages/blob/master/packages/eslint-config-react-app/LICENSE)

[downloads-img]: https://img.shields.io/npm/dm/@stinkstudios/eslint-config-react-app.svg?style=flat-square
[npm-img]: https://img.shields.io/npm/v/@stinkstudios/eslint-config-react-app.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@stinkstudios/eslint-config-react-app
[snyk-img]: https://snyk.io/test/github/Stinkstudios/npm-packages/badge.svg?targetFile=packages%2Feslint-config-react-app%2Fpackage.json
[snyk-url]: https://snyk.io/test/github/Stinkstudios/npm-packages?targetFile=packages%2Feslint-config-react-app%2Fpackage.json
[mit-img]: http://img.shields.io/badge/license-MIT-brightgreen.svg
[mit-url]: http://opensource.org/licenses/MIT
[workflow-img]: https://github.com/stinkstudios/npm-packages/workflows/Main/badge.svg?branch=master
[workflow-url]: https://github.com/Stinkstudios/npm-packages/actions?query=workflow%3AMain
[`eslint:recommended`]: https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
[`plugin:import/errors`]: https://github.com/benmosher/eslint-plugin-import/blob/master/config/errors.js
[`plugin:import/warnings`]: https://github.com/benmosher/eslint-plugin-import/blob/master/config/warnings.js
[`plugin:react/recommended`]: https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L115
[`plugin:jsx-a11y/recommended`]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/src/index.js#L41
[`plugin:unicorn/recommended`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/index.js#L8
[`plugin:compat/recommended`]: https://github.com/amilajack/eslint-plugin-compat/blob/master/src/config/recommended.js
[`prettier`]: https://github.com/prettier/eslint-config-prettier/blob/master/standard.js
[`prettier/react`]: https://github.com/prettier/eslint-config-prettier/blob/master/react.js
[`eslint-plugin-compat`]: https://github.com/amilajack/eslint-plugin-compat
[`eslint-plugin-import`]: https://github.com/benmosher/eslint-plugin-import
[`eslint-plugin-jsx-a11y`]: https://github.com/evcohen/eslint-plugin-jsx-a11y#readme
[`eslint-plugin-react`]: https://github.com/yannickcr/eslint-plugin-react/
[`eslint-plugin-unicorn`]: https://github.com/sindresorhus/eslint-plugin-unicorn
[`eslint`]: https://eslint.org/
[`eslint-plugin-jest`]: https://github.com/jest-community/eslint-plugin-jest/tree/v22.2.2#readme
[`plugin:jest/recommended`]: https://github.com/jest-community/eslint-plugin-jest/blob/v22.2.2/index.js#L36
[`plugin:jest/style`]: https://github.com/jest-community/eslint-plugin-jest/blob/v22.2.2/index.js#L54
[`plugin:@typescript-eslint/recommended`]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
[`prettier/@typescript-eslint`]: https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
[`@typescript-eslint/eslint-plugin`]: https://github.com/typescript-eslint/typescript-eslint
