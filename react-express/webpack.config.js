const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'components/MainApp.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public', 'javascripts')
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'components'),
            loader: ['babel-loader'],
            exclude: /node_modules/
        }]
    }
};
