# Setup

## Package Manager

For this project we are using [Yarn](https://yarnpkg.com/en/) version 0.27.5 **npm might cause issues**.

Installing yarn
```
npm install yarn@0.27.5 -g
```

Installing dependencies
```
yarn 
```

## Linters

### Flow

Flow is used as a static type checker to prevent bugs and speed up development

```
yarn global add flow-bin
yarn global add flow-typed
flow-typed install
```

Flow plugins can be useful as they allow for in-editor linting.

### ESLint

ESLint is used as a linter for coding convention, the linter should run automatically as you work on the project. However it is recommended to use a plugin to get in-editor linting.


## Editorconfig

Editorconfig is also being used in this project to maintain consistency, again a plugin is recommended to maintain the coding standards in the project.


## Scripts

- `yarn dev`  (Runs development server with hot reloading for React)
- `yarn prod` (Runs production server)
- `yarn test` (Runs tests)

# Directory structure

```
.
├── config
│   ├── nodemon.webpack.json
│   ├── project.config.js
│   └── webpack.config.js
├── flow-typed
│   └── npm
├── package.json
├── package-lock.json
├── public
│   ├── bundle.js
│   └── index.html
├── server
│   └── index.js
├── src
│   ├── actions
│   ├── constants
│   ├── containers
│   ├── helpers
│   ├── reducers
│   ├── routes
│   ├── store
│   ├── index.js
├── Dockerfile
├── README.md
├── .eslint
├── .editorconfig
├── .babelrc
├── .gitignore
├── .flowconfig
└── yarn.lock
```
