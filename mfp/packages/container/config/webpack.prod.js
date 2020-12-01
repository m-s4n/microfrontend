const {merge} = require('webpack-merge'); // iki farklı web config birleştirmesi için kullanılır.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
//const domain = process.env.PRODUCTION_DOMAIN;  // production'ın nerede olacağını içerecek.
const marketingDomain = 'http://localhost:5556';
const authDomain = 'http://localhost:5557'; 
const dashboardDomain = 'http://localhost:5558'; 
const path = require('path');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', // adlandırma şablonu
        publicPath: '/container/v1/', // main file'a erişilecek path '/container/latest/main.js'
        path: path.resolve(__dirname,'../container/v1/')
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${marketingDomain}/marketing/v1/remoteEntry.js`, // deploy edince burada barınacak.
                auth: `auth@${authDomain}/auth/v1/remoteEntry.js`,
                dashboard: `dashboard@${dashboardDomain}/dashboard/v1/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);

