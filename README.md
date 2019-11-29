# react-electron-starter

author(s): khuynh

## Overview

This is a template project for boostrapping create-react-app with electron. It aims to get an electron app up and running with just two commands. I'll try to keep the versions of cra/react/electron up to date as much as I can.

## Usage

All it takes to get a production ready electron app up and running is:

```
yarn install
```

to install all of your dependencies and

```
yarn electron-pack
```

to package the built react application into an electron app.

Voila, you should have a working electron application built and ready for use in the `dist/` directory. Just make sure to adjust the `package.json` to ensure you are building for the correct platforms.

## Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn electron-pack`

Builds the react application using `yarn build` and then builds the electron application. Currently, this script builds for Mac OSx Windows, and Linux. You can find the build artifacts in the `dist/` folder in the `dist/mac/` and `dist/win-unpacked` directories respdectively.

If you wish to only build for a certain operating system, you can modify the `electron-pack` script in the `package.json` and add/remove the appropriate flags.

- `-w` builds for windows
- `-m` builds for mac
- `-l` builds for linux

You can set any combination of these flags (i.e. `-mw` will build for mac and windows only)

### `yarn electron`

Opens an electron application in development mode. Must have a development server already running using `yarn start`. You can change the location of the development server in `public/electron.js` if you'd like.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
