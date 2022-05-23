const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const path = require('path')

module.exports = function build(env, arg) {
    console.table({
        arg,
        env,
    })
    const config = {
        output: {
            path: path.join(__dirname, 'dist'),
            chunkFilename: 'chunks/[id].js',
            publicPath: '/',
        },
        devServer: {
            compress: true,
            port: 5000,
            allowedHosts: [
                'local.risks.com.br',
                'local.documents.com.br',
                'local.nonconformities.com.br',
                'local.indicators.com.br',
            ],
        },
        mode: arg.mode,
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            }),
            new webpack.DefinePlugin({
                POINTING_ENV: JSON.stringify('default'),
            }),
        ],
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            extensions: ['.js', '.json', '.ts', '.tsx'],
            alias: {
                react: path.join(__dirname, 'node_modules', 'react'),
                '@app': path.resolve(__dirname, 'src/'),
                '@config': path.resolve(__dirname, 'config/'),
                '@states': path.resolve(__dirname, 'src/state/'),
                '@components': path.resolve(__dirname, 'src/components/'),
                '@devices': path.resolve(__dirname, 'src/devices/'),
                '@services': path.resolve(__dirname, 'src/services/'),
                '@modules': path.resolve(__dirname, 'src/modules/'),
                '@constants': path.resolve(__dirname, 'config/constants/'),
                '@types': path.resolve(__dirname, 'config/types/'),
            },
        },
    }
    return config
}
