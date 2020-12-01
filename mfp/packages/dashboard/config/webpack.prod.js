const {merge} = require('webpack-merge'); // iki farklı web config birleştirmesi için kullanılır.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', // adlandırma şablonu
        publicPath: '/dashboard/v1/',
        path: path.resolve(__dirname,'../dashboard/v1/')
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

