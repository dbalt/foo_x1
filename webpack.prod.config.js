const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('./utils/WatchMissingNodeModulesPlugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'prod'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            // Process scss
            {
                test: /\.scss$/,
                // include: /src/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?outpuStyle=expanded',
                ]
            },
            {
                test: /\.css$/,
                // include: /src/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?outpuStyle=expanded',
                ]
            },

            // Process JS with Babel.
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            // JSON is not enabled by default in Webpack but both Node and Browserify
            // allow it implicitly so we also enable it.
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()

        // // Makes some environment variables available to the JS code, for example:
        // new webpack.DefinePlugin({
        //     '__DEV__': true
        // }),
        // // Tell webpack we want hot reloading
        // new webpack.HotModuleReplacementPlugin(),
        // // Watcher doesn't work well if you mistype casing in a path so we use
        // // a plugin that prints an error when you attempt to do this.
        // // See https://github.com/facebookincubator/create-react-app/issues/240
        // new CaseSensitivePathsPlugin(),
        // // If you require a missing module and then `npm install` it, you still have
        // // to restart the development server for Webpack to discover it. This plugin
        // // makes the discovery automatic so you don't have to restart.
        // // See https://github.com/facebookincubator/create-react-app/issues/186
        // new WatchMissingNodeModulesPlugin(path.resolve(__dirname, 'node_modules'))
    ]
};
