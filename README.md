# Stink Studios Boilerplate React components

A collection of React components to be used on Stink Studios' [React Boilerplate](https://github.com/Stinkstudios/boilerplate-react).

## Features

- Node and NPM
- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [style-loader](https://github.com/webpack/style-loader)
- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
- [Webpack](https://webpack.github.io/)

## Requirements
- Node `6.10.0`
	> You can either install/upgrade Node manually or use [NVM](https://github.com/creationix/nvm) and refer to this folder - there's a [.nvmrc](.nvmrc) file with correct Node version to be installed and used. It needs to run `nvm install` only the first time and `nvm use` every time you open a new bash session.

- NPM `3.10.10`
	> Default version of NPM for Node `6.10.0`. So there shouldn't be a need to install.

### Start Development
0. run `npm install`
0. run `npm run start`
0. point your browser to [localhost:8080](http://localhost:8080)

### Git
>[`pre-commit`](https://github.com/observing/pre-commit) is being used. Every time you push to the repo `npm run lint-staged`. On failing of this you will be unable to commit to the repo until you fix the lint errors.

### NPM Tasks

- `npm run start`

- `npm run lint` Lints both JS & SCSS files.

## Linters

### Javascript
[ESLint](http://eslint.org/)

	npm run lint:js

### CSS
	npm run lint:css
