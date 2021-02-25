const path = require('path');
const CopyPlugin = require('copy-webpack-plugin'); // copies the 'public' to the 'dist'
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the 'dist' folder before copying
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{
                from: 'public',
            }, ],
        }),
        new ESLintPlugin({
            extensions: ['ts'],
        })
    ],
};