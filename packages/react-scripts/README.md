# `@stinkstudios/react-scripts`

This is a fork of facebooks [`react-scripts`]

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

## Usage

To use `@stinkstudios/react-scripts` instead of the default [`react-scripts`]

`npx create-react-app my-app --scripts-version @stinkstudios/react-scripts`

### Typescript

To use with Typescript

`npx create-react-app my-app --typescript --scripts-version @stinkstudios/react-scripts`

- [User Guide](https://github.com/Stinkstudios/npm-packages/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

## Differences to [`react-scripts`]

- [ESLint]
  - Configuration defined in [`.eslintrc`] file instead of webpack loader. No need to eject ([99229e9](https://github.com/Stinkstudios/npm-packages/commit/99229e9))
  - Switched from extending [`eslint-config-react-app`] to [`@stinkstudios/eslint-config-react-app`]
  - Added cli [`npm run lint`]. ([4153084](https://github.com/Stinkstudios/npm-packages/commit/4153084))
- [Babel]
  - Configuration defined in [`.babelrc`] file instead of webpack loader. No need to eject. ([de90c89](https://github.com/Stinkstudios/npm-packages/commit/de90c89))
  - Removed `babel-plugin-named-asset-import` that was used to import svg as React Components. Yarn can't find babel plugins installed via a `@stinkstudios/react-scripts` at the moment. You can add any Babel Plugins yourself. ([de90c89](https://github.com/Stinkstudios/npm-packages/commit/de90c89#diff-a7f98c18479be87c9f33e7604dbd1a09L247))
- [PostCSS]
  - Configuration defined in [`postcss.config.js`] file instead of webpack loader. No need to eject. ([c7dac54](https://github.com/Stinkstudios/npm-packages/commit/c7dac54))
  - Added [`postcss-import`]. ([e24759e](https://github.com/Stinkstudios/npm-packages/commit/e24759e))
- [Stylelint]
  - Configuration defined in [`stylelintrc`] that extends [`@stinkstudios/stylelint-config-react-app`]. ([93d1f49](https://github.com/Stinkstudios/npm-packages/commit/93d1f49))
  - Cli [`npm run lint`]. ([4153084](https://github.com/Stinkstudios/npm-packages/commit/4153084))
- `.graphql` file support via webpack loader ([4b9ff5a](https://github.com/Stinkstudios/npm-packages/commit/4b9ff5a))
- [Prettier]
  - Configuration defined in [`.prettierrc`] & [`.prettierignore`]
  - Cli [`npm run format`]. ([172ae22](https://github.com/Stinkstudios/npm-packages/commit/172ae22))
- Renamed `/src/App` to `/src/app` to conform to filename convention camelCase. For some reason `/src/App` is the only file that doesn't stick to this convention ([904a1ab](https://github.com/Stinkstudios/npm-packages/commit/904a1ab))
- Removed service worker

[`.prettierrc`]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template/.prettierrc
[`.prettierignore`]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template/.prettierignore
[`react-scripts`]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts
[`.eslintrc`]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template/.eslintrc
[`.stylelintrc`]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template/.stylelintrc
[`.babelrc`]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template/.babelrc
[`postcss.config.js`]: https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template/postcss.config.js
[postcss]: https://postcss.org/
[babel]: https://babeljs.io/
[eslint]: https://eslint.org/
[`eslint-config-react-app`]: https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app
[`@stinkstudios/eslint-config-react-app`]: https://github.com/Stinkstudios/npm-packages/tree/master/packages/eslint-config-react-app
[`@stinkstudios/stylelint-config-react-app`]: https://github.com/Stinkstudios/npm-packages/tree/master/packages/stylelint-config-react-app
[`npm run lint`]: https://github.com/Stinkstudios/npm-packages/blob/master/packages/react-scripts/template/README.md#npm-run-lint
[`postcss-import`]: https://github.com/postcss/postcss-import
[stylelint]: https://stylelint.io/
[`npm run format`]: https://github.com/Stinkstudios/npm-packages/blob/master/packages/react-scripts/template/README.md#npm-run-format
[prettier]: https://prettier.io/
