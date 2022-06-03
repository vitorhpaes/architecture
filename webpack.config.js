const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')

const path = require('path')

const generateAnalyzisPlugin = (isAnalysing) => {
    if (!isAnalysing) return []
    return [
        new BundleAnalyzerPlugin({
            generateStatsFile: true,
        }),
    ]
}

module.exports = function build(env) {
    const isProduction = process.env.NODE_ENV === 'production'
    const isHTTPS = process.env.HTTPS === 'true' || env.HTTPS === 'true'
    const isAnalysing = process.env.ANALYZE === 'true' || env.ANALYZE === 'true'

    const analysisPlugins = generateAnalyzisPlugin(isAnalysing)
    console.log('@Production:', isProduction ? 'yes' : 'no')
    console.log('@Environment:', env.CONFIG_ENVIRONMENT || 'default')
    console.log('@Analysing:', isAnalysing ? 'yes' : 'no')
    console.log('@HTTPS:', isHTTPS ? 'yes' : 'no')

    const config = {
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: '/',
        },
        devServer: {
            compress: true,
            https: isHTTPS,
            allowedHosts: [
                'local.risks.com.br',
                'local.documents.com.br',
                'local.nonconformities.com.br',
                'local.indicators.com.br',
            ],
        },
        devtool: 'source-map',
        module: {
            rules: [{
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
                    test: /.d.ts$/,
                    use: {
                        loader: 'ignore-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [{
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
                POINTING_ENV: JSON.stringify(env.CONFIG_ENVIRONMENT),
            }),
            ...analysisPlugins,
        ],
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 400000,
                maxSize: 450000,

                cacheGroups: {
                    modules: {
                        test: /[\\/]src[\\/]modules[\\/]/,
                        priority: 15,
                        reuseExistingChunk: false,
                        enforce: true,
                        chunks: 'async',
                        name: (module) => {
                            const file = module.identifier()

                            const chunkName = file
                                .split('/')
                                .reverse()
                                .slice(1, 4)
                                .reverse()
                                .join('-')
                                .replace('-modules', isProduction ? '' : '-modules')

                            return chunkName
                        },
                    },
                    devices: {
                        test: /[\\/]src[\\/]devices[\\/]/,
                        priority: 20,
                        reuseExistingChunk: false,
                        enforce: true,
                        chunks: 'async',
                        name: (module) => {
                            const file = module.identifier()

                            const chunkName = file
                                .split('/')
                                .reverse()
                                .slice(1, 3)
                                .reverse()
                                .join('-')
                                .replace('-devices', isProduction ? '' : '-devices')

                            return chunkName
                        },
                    },
                },
            },
        },
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