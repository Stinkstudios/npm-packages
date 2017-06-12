# Stink Studios Boilerplate React components

A collection of React components to be used on Stink Studios' [React Boilerplate](https://github.com/Stinkstudios/boilerplate-react).

## Features

- Node and NPM
- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [style-loader](https://github.com/webpack/style-loader)
- [Webpack](https://webpack.github.io/)
- [Ract Styleguidist](https://react-styleguidist.js.org/)

## Requirements
- Node `6.10.0`
	> You can either install/upgrade Node manually or use [NVM](https://github.com/creationix/nvm) and refer to this folder - there's a [.nvmrc](.nvmrc) file with correct Node version to be installed and used. It needs to run `nvm install` only the first time and `nvm use` every time you open a new bash session.

- NPM `3.10.10`
	> Default version of NPM for Node `6.10.0`. So there shouldn't be a need to install.

### Start Development
1. run `npm install`
2. run `npm run start`
3. point your browser to `[localhost:8080](http://localhost:8080)`
4. to work on a single component, go to `localhost:8080/#!/[component-name]`, and open it in an isolated page.

### Build Styleguide
1. run `npm run build`
2. find the built styleguide at `/styleguide`

### Git
>[`pre-commit`](https://github.com/observing/pre-commit) is being used. Every time you push to the repo `npm run lint-staged`. On failing of this you will be unable to commit to the repo until you fix the lint errors.

### NPM Tasks

- `npm run start`
- `npm run lint` — lint both JS & SCSS files;
- `npm run lint-staged` — lint staged files;
- `npm run prettier` — run prettier on components and utilities
- `npm run test` — run tests on components
- `nom run update-snapshots` — update Jest snapshots

## Linters

### Javascript
[ESLint](http://eslint.org/)

	npm run lint:js

### CSS
	npm run lint:css

## Unit Tests

`npm run test`


While writing unit tests use the watch cli. 

`npm run test:watch`

> FYI if you are having issues with the watch cli you may have to install watchman or disable it [Link](https://facebook.github.io/jest/docs/troubleshooting.html#watchman-issues)

We're using [jest](https://facebook.github.io/jest/) for [unit tests](https://en.wikipedia.org/wiki/Unit_testing) and [snapshot tests](https://facebook.github.io/jest/docs/snapshot-testing.html). For this reason, you'll have to regenerate the snapshots when you modify a component in a way that will output a DOM node with a different diff from the last snapshot. Run `npm run update-snapshots` to update the snapshots, and check-in the new snapshot file to git.

- [Jest Toubleshooting](https://facebook.github.io/jest/docs/troubleshooting.html)

