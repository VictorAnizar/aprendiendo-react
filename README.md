


# Crear un proyecto de react
`npx create-react-app <nombreProyecto>` 
la "x" es por execute. 


# Components
A component could be any object of the webpage, even could be the page itself

<strong>At the lastest updates and features of react, is most recommended use functional components</strong>

## State and props
The state is a kind of "variable" which constantly changes by the time. The state defines behavior.
The props are the properties itself of our app, those won't change accross the time. The props allow us to give communication between components

# Fragments
The Fragment "component" help us to remove the most external div in our app code. To define this, we must encapsulate our App component or our most external component (which encapsulates all the components) with the `<> ... </>` or even `<Fragment> ... <Fragment />`. If we chose the 2nd form, we must import the Respective class 
```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <p>Hola</p>
    </>
  );
}

export default App;

```
# Printing variables at the HTML
For this we must use the `{myVar}` inside the HTML code, but if "myVar" is boolean, we aren't being able to print that 

# Deploying on GH pages
Type in terminal

`npm install --save gh-pages`

Add in "scripts" side of package.json:
`"deploy": "gh-pages -d build"`

Add at the end of the previous file (before to close the bracket): 
`
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build
`

Run `npm run deploy`

Make a commit and push 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
