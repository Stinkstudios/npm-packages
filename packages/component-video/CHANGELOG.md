## 0.3.6 (Oct 13, 2017)

### Added

* volumechange event

## 0.3.5 (March 7, 2017)

### Changed

* yarn version to `"yarn": ">=0.18.1"` as circleci complains

## 0.3.4 (March 2, 2017)

### Changed

* `package.json` engine versions to except newer versions of node, npm and yarn
* `yarn.lock` file added to support yarn usage
* `README.md` updated install guide to not use private npm anymore
* any stinkdigital references to stinkstudios

## 0.3.3 (February 12, 2017)

### Component Video

#### Basic Player

* Muted option available to autoplay videos on iOS10 and Android (for audio you still need to use the hack of providing a audio file)
* FIX - `playsinline` attribute wasn't set correctly and doesnt require a prefix.

## 0.3.1 (January 19, 2017)

### Component Video

#### Basic Player

* Checks if poster option is not undefined before setting.

## 0.3.0 (January 10, 2017)

### Component Video

* Now able to use in a React SSR (server side rendering) application
* Updated npm dependencies
