# Stink Studios Boilerplate React components

A collection of React components to be used on Stink Studios' [React Boilerplate](https://github.com/Stinkstudios/boilerplate-react).

## Unit Tests

`npm run test`


While writing unit tests use the watch cli. 

`npm run test:watch`

> FYI if you are having issues with the watch cli you may have to install watchman or disable it [Link](https://facebook.github.io/jest/docs/troubleshooting.html#watchman-issues)

We're using [jest](https://facebook.github.io/jest/) for [unit tests](https://en.wikipedia.org/wiki/Unit_testing) and [snapshot tests](https://facebook.github.io/jest/docs/snapshot-testing.html). For this reason, you'll have to regenerate the snapshots when you modify a component in a way that will output a DOM node with a different diff from the last snapshot. Run `npm run update-snapshots` to update the snapshots, and check-in the new snapshot file to git.

- [Jest Toubleshooting](https://facebook.github.io/jest/docs/troubleshooting.html)
