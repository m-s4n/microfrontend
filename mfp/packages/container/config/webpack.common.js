const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,  // js ile bitenleri babel tarafından işlensin,
                exclude: /node_modules/,  // modulleri babel işlemsinden hariç tut.
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'], // Eklentilere izin ver.
                    }
                }

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}