# @stinkstudios/detector

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Build Status][travis-img]][travis-url] [![Known Vulnerabilities][snyk-img]][snyk-url] [![MIT license][mit-img]][mit-url]

**LEGACY PACKAGE - FOR OLDER PROJECTS AT [STINK STUDIOS]**

Collection of JS constants containing device, OS, browser and capability detection.

See [./src/index](https://github.com/Stinkstudios/npm-packages/blob/master/packages/detector/src/index.js) for constants list.

## Installation

### Yarn

```bash
$ yarn add @stinkstudios/detector
```

### NPM

```bash
$ npm install @stinkstudios/detector
```

## Legacy

Previously this package was used as a git url instead of using the npm registry. To convert from this you will need to update any references to `@stinkdigital/detector` to `@stinkstudios/detector` and remove the git url and replace with a semantic version.

### Example

```
"@stinkdigital/detector": "git+ssh://git@github.com/stinkdigital/detector.git#0.1.5",
```

to

```
"@stinkstudios/detector": "0.1.7",
```

## [Changelog](https://github.com/Stinkstudios/npm-packages/blob/master/packages/detector/CHANGELOG.md)

## [License](https://github.com/Stinkstudios/npm-packages/blob/master/packages/detector/LICENSE)

[downloads-img]: https://img.shields.io/npm/dm/@stinkstudios/detector.svg?style=flat-square
[npm-img]: https://img.shields.io/npm/v/@stinkstudios/detector.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@stinkstudios/detector
[travis-img]: https://travis-ci.com/Stinkstudios/npm-packages.svg?style=flat-square
[travis-url]: https://travis-ci.com/Stinkstudios/npm-packages
[snyk-img]: https://snyk.io/test/github/Stinkstudios/npm-packages/badge.svg?targetFile=packages%2Fdetector%2Fpackage.json
[snyk-url]: https://snyk.io/test/github/Stinkstudios/npm-packages?targetFile=packages%2Fdetector%2Fpackage.json
[mit-img]: http://img.shields.io/badge/license-MIT-brightgreen.svg
[mit-url]: http://opensource.org/licenses/MIT
[stink studios]: https://stinkstudios.com
