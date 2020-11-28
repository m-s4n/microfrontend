const {merge} = require('webpack-merge'); // iki farklı web config birleştirmesi için kullanılır.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN;  // production'ın nerede olacağını içerecek.

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js' // adlandırma şablonu
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js` // deploy edince burada barınacak.
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

