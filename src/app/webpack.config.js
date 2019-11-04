const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'development',
    entry: './index.ts',
    context: __dirname,
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../../public')
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: [/elm-stuff/, /node_modules/],
            include: __dirname,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        },{
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            include: __dirname,
            use: {
                loader: 'elm-webpack-loader',
                options: {
                    debug: true
                }
            }
        }, {
            test: /\.ts$/,
            exclude: [/elm-stuff/, /node_modules/],
            include: __dirname,
            use: {
                loader: 'ts-loader',
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.css', '.elm']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject:   'body',
            filename: 'index.html'
        })
    ]
};