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

[Flow](https://flow.org/) is used as a static type checker to prevent bugs and speed up development

```
yarn global add flow-bin
yarn global add flow-typed
flow-typed install
```

Flow plugins can be useful as they allow for in-editor linting.

### ESLint

ESLint is used as a linter for coding convention, the linter should run automatically as you work on the project. However it is recommended to use a plugin to get in-editor linting.

[Config](https://github.com/airbnb/javascript)



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
├── tests
├── src
│   ├── styles
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

# Coding standards

## Helpers rule
If logic does not depend on either state or props, functions should be extracted into a helper file inside `src/helpers`.

## Bind
React components should not contain `.bind(this)` method all of the functions should be bound using arrow functions. 

Instead of: 

```javascript
updateCount() {
    this.props.addLike();
}
```

Write:

```javascript
updateCount = () => {
    this.props.addLike();
}
```

## Naming conventions
All components should be named with Initial uppercase character on a file with the same name as the component, this also ensures a single component per file.

File Header.js:

```javascript
class Header extends React.Component{
    //...
}
```

## Code purity

Helpers function should all be written as pure functions(no side effects). This allows for easier tests, and allows for cleaner more predictable code. Logic inside components should also be written as pure functions as much as possible.

Don't:

```javascript
function printProps(){
    console.log(this.props)
}
```

Do:
```javascript
function printProps(props){
    console.log(props)
}
```

## Generic naming

Having multiple names for the same concept is a common source of confusion in projects. There is also the issue of generic code. For instance, these two functions do exactly the same thing, but one feels infinitely more general and reusable:

```javascript
// specific to our current blog
var validArticles = function(articles) {
  return articles.filter(function(article) {
    return article !== null && article !== undefined;
  });
};

// vastly more relevant for future projects
var compact = function(xs) {
  return xs.filter(function(x) {
    return x !== null && x !== undefined;
  });
};
```


# Templates
For components and simple stylesheets we have a **_template_.js** both in `src/components` and `stc/styles` start with those for the flow initialiser, prop type definitions and defaults.


# Icon Font

The icon font used is [Google's material icon font](https://material.io/icons/) for reference use their icon font method.
