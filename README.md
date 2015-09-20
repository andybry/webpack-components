# webpack-components

Example of how to create React components using Webpack.

## Running/Developing

    npm install
    npm install -g webpack-dev-server
    bin/webpack-server.sh
    
Then visit http://localhost:8080/webpack-dev-server/ and load `index.htm`.
Files are hot-loaded by Webpack.


## Adding components

1. Add a folder to the `components directory` with an `index.js` and `index.styl` (copy an existing component).
2. Add the new components to `styles.styl` and `components/ComponentRenderer.js`.


## Using components

The files in the data folder use a JSON format for specifying the UI. The file that is currently being used
is configured in main.js
