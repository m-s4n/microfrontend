const {merge} = require('webpack-merge'); // iki farklı web config birleştirmesi için kullanılır.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
//const domain = process.env.PRODUCTION_DOMAIN;  // production'ın nerede olacağını içerecek.
const domain = 'http://localhost:5556';
const path = require('path');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', // adlandırma şablonu
        publicPath: '/container/latest/', // main file'a erişilecek path '/container/latest/main.js'
        path: path.resolve(__dirname,'../marketing/v1/')
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js` // deploy edince burada barınacak.
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

