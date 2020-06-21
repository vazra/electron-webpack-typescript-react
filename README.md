# Electron Webpack React TypeScript

<br/>

> Production Ready Boilerplate template with electron-webpack, react & typescript.

<br/>

- This boilerplate is based on [`electron-webpack`](https://github.com/electron-userland/electron-webpack), the template comes packed with...

  - Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
  - HMR for both `renderer` and `main` processes
  - Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
  - Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application

  Make sure to check out [`electron-webpack`'s documentation](https://webpack.electron.build/) for more details.

* A React app which is similar to [CRA](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) is added as the renderer.

## Getting Started

This is a template repository, you can create repo by using "[Use this Template](https://github.com/vazra/electron-webpack-typescript-react/generate)" option from GitHub. Or can simply fork/clone this repository, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# Create new repo with https://github.com/vazra/electron-webpack-typescript-react/generate

# or  create a directory of your choice, and copy template using curl
mkdir new-electron-react-app && cd new-electron-react-app
curl -fsSL https://github.com/vazra/electron-webpack-typescript-react/archive/master.tar.gz | tar -xz --strip-components 1

# or copy template using git clone
git clone https://github.com/vazra/electron-webpack-typescript-react.git
cd electron-webpack-quick-start
rm -rf .git

# install dependencies
yarn
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```

If you are looking to build electron apps with native database, there is a fork of this repo available at [electron-react-ts-rxdb-realm-sqlite](https://github.com/vazra/electron-react-ts-rxdb-realm-sqlite) which implements native databases. :+1:

For any bugs or requests create issues [here](https://github.com/vazra/electron-webpack-typescript-react/issues)

Pull requests are also invited. :rocket:
