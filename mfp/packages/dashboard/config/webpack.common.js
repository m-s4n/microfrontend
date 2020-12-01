const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    {loader: 'file-loader'} // bir yazı tipi veya resim kullanmamızı sağlar
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?js$/,  // js ile bitenleri babel tarafından işlensin,
                exclude: /node_modules/,  // modulleri babel işlemsinden hariç tut.
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'], // Eklentilere izin ver.
                    }
                }

            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}