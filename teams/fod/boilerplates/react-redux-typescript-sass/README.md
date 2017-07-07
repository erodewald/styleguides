# FOD Team React Redux TypeScript SASS Boilerplate

## Project Overview

#### Tech Stack

These technologies represent the core of the project.

* [TypeScript](https://www.typescriptlang.org/) Everything is built on _TypeScript_. Even the tests have been configured to be written in _TypeScript_.
* [React.js](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/) Provides state management.
* [Redux Observables](https://redux-observable.js.org/) Handles side effects for state management. Use this whenever your application begins working outside the realm of "_Redux_". For example making calls to the outside world.
* [Sass](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) Facebook's _React.js_ unit tester which is a wrapper around _Jasmine_ with some niceties.
* [Nightmare.js](http://www.nightmarejs.org/) Used for end to end testing. Under the hood it is running in _Electron_'s Chromium.

## Prerequisites

1. [Node.js](https://nodejs.org/en/) v6.X.X+
2. [Ruby](https://rubyinstaller.org/) v2.X.X+

## Standards

Style guide and standards can be found [here](https://stash.liftbrands.com/projects/ON/repos/coding-standards/browse/teams/fod).

## Installation

> NOTE: This should be run often as project dependencies frequently change.

`yarn install`

## Build

`yarn run build`

## Run

`yarn run dev`

## Testing

#### Unit Testing

`yarn run test-unit`

#### Integration Testing

> NOTE: You will need to grant executable permission to the file `./scripts/e2e.nightmare.sh` in order to execute the tests. Via Mac command line `chmod +x ./scripts/e2e.nightmare.sh`.

> NOTE: To significantly speed up integration testing you can run `yarn run start-e2e` while the application is already running. The script will check whether _localhost_ is already up or not. If not then it will build and start the application before running the tests.

`yarn run start-e2e`

## Production

**WARNING**, Do not push to production without first reviewing these documents:
  * [React performance](https://facebook.github.io/react/docs/optimizing-performance.html)

## Recommended IDE Plugins

#### Visual Studio Code - __RECOMMENDED__

* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Sass Lint](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

#### WebStorm

* [Sass Lint](https://plugins.jetbrains.com/plugin/8171-sass-lint)
* Please follow [these](https://www.jetbrains.com/help/webstorm/tslint.html) instructions to enable _TypeScript_ linting in _WebStorm_.

## FAQ

<dl>
</dl>