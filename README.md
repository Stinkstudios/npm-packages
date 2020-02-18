<p align="center">
  <a href="https://stinkstudios.com/">
    <img alt="stink-studios" src="https://raw.githubusercontent.com/stinkstudios/logo/master/stink-studios-black.png" width="546">
  </a>
</p>
<h2 align="center">
  <a href="https://www.npmjs.com/org/stinkstudios" target="_blank" >NPM Packages</a>
</h2>

[![Main Workflow][workflow-img]][workflow-url]
[![Lerna][lerna-img]][lerna-url]
[![Known Vulnerabilities][snyk-img]][snyk-url]
[![Code Coverage][codecov-img]][codecov-url]

This repository is a [monorepo] managed using [Lerna]. This means there are [multiple packages](/packages) managed in this codebase, even though we publish them to NPM as separate packages.

- [@stinkstudios/cf-auth]
- [@stinkstudios/eslint-config-react-app]
- [@stinkstudios/stylelint-config-react-app]

## Deprecated

Deprecated npm packages used internally by Stink Studios and no longer maintained but still need to exist.

- [@stinkstudios/component-video]
- [@stinkstudios/detector]
- [@stinkstudios/react-scripts]

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

[@stinkstudios/cf-auth]: https://www.npmjs.com/package/@stinkstudios/cf-auth
[@stinkstudios/eslint-config-react-app]: https://www.npmjs.com/package/@stinkstudios/eslint-config-react-app
[@stinkstudios/react-scripts]: https://www.npmjs.com/package/@stinkstudios/react-scripts
[@stinkstudios/stylelint-config-react-app]: https://www.npmjs.com/package/@stinkstudios/stylelint-config-react-app
[@stinkstudios/detector]: https://www.npmjs.com/package/@stinkstudios/detector
[@stinkstudios/component-video]: https://www.npmjs.com/package/@stinkstudios/component-video
[codecov-img]: https://codecov.io/gh/Stinkstudios/npm-packages/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/Stinkstudios/npm-packages
[lerna-img]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg
[lerna-url]: https://lernajs.io/
[lerna]: https://github.com/lerna/lerna
[monorepo]: https://trunkbaseddevelopment.com/monorepos/
[snyk-img]: https://snyk.io/test/github/Stinkstudios/npm-packages/badge.svg
[snyk-url]: https://snyk.io/test/github/Stinkstudios/npm-packages
[workflow-img]: https://github.com/stinkstudios/npm-packages/workflows/Main/badge.svg?branch=master
[workflow-url]: https://github.com/Stinkstudios/npm-packages/actions?query=workflow%3AMain
