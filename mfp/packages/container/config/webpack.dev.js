const {merge} = require('webpack-merge'); // iki farklı web config birleştirmesi için kullanılır.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
// required from container
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pakageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: pakageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);


