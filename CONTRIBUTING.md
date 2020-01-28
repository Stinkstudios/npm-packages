# Contributing

First, ensure you have

- [Yarn] `^1.13.0`
- `node ^10.13.0`
- `npm ^5.2.0`
- [`npx`]

To get started with the repo:

```
$ git clone git@github.com:Stinkstudios/npm-packages.git && cd npm-packages
$ yarn install --no-lockfile
```

This is a [monorepo] utilising [Lerna] and [Yarn Workspaces]

## Committing

Commit messages are linted with [`commitlint`] and follows [Conventional Commits] so [Lerna] can automatically update the CHANGELOG.md for each package on a release.

## Commands

### Run Unit Tests

```
$ yarn test
```

### Linting

```
$ yarn lint
```

### Code Format

```
$ yarn format
```

### Releasing

To release a new version of a package you will need a NPM account and be part of [Stink Studios organisation on NPM](https://www.npmjs.com/org/stinkstudios) . All packages are scoped to `@stinkstudios`.

```
$ yarn
$ npm login
$ npx lerna publish
```

### Add a new package

```
$ npx lerna create @stinkstudios/<your package name>
```

This will add a folder in [`packages`](./packages)

See [Lerna] create [docs](https://github.com/lerna/lerna/tree/master/commands/create#readme)

[yarn]: https://yarnpkg.com/
[monorepo]: https://trunkbaseddevelopment.com/monorepos/
[lerna]: https://github.com/lerna/lerna
[yarn workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/
[npx]: https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner
[`npx`]: https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner
[`commitlint`]: https://github.com/marionebl/commitlint
[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0-beta.2/
