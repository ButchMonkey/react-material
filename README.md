# React - Material UI - Babel - Webpack

A simple React boilerplate with [Material UI](http://www.material-ui.com/) and [MDI React Components](http://materialdesignicons.com)

## Usage
1. `git clone https://github.com/ButchMonkey/react-material.git my-app-name`
2. `cd my-app-name`
3. `npm install`

### Server
Start the server with:

```
npm run start
```

And see your app live at [localhost:8080](http://localhost:8080)

### Configuration
Edit `package.json` for:

* App Name
* Description
* Author
* Version
* Repo

To set the title of the app that is injected into index.html, modify `webpack.config.js` - 

```javascript
new HtmlWebpackPlugin({title: 'React App'}),
```




### Files
Development is done in `./app/`

Builds are output to `./build/`

`init.js` should not need to be edited often. `./app/container/App.jsx` will be injected into the `#app` via `init.js`

Components are stored in `./app/components/`

The main stylesheet is `./app/styles/main.scss`, if you want to add more, these need to be imported into `init.js`

There are 2 theme templates (Light / Dark) held in `./app/styles/custom-themes/`, most of the time only the primary and secondary colors need to be changed. You can also use the default [Material UI themes](http://www.material-ui.com/#/customization/themes) by importing from `material-ui/styles/baseThemes/`



### Build
Bundle your app with its dependencies using:

```
npm run build
```

You'll get an `index.html` and an `app.js` file inside `build`.

`index.html` will automatically inject `app.js` and the title of the app.

#### Building for production

```
npm run build:dist
```
You'll get an `index.prod.html` and an `app.prod.js` file inside `build`.

## To Do
* Add Redux
* Add Hammer
* Add Jest for testing
* Update to Webpack 2

## License
MIT.
