const {merge} = require('webpack-merge'); // iki farklı web config birleştirmesi için kullanılır.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', // adlandırma şablonu
        publicPath: '/marketing/v1/',
        path: path.resolve(__dirname,'../marketing/v1/')
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

