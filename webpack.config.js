const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./bundle.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "./js/bundle.js"
    },
    watch: true,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw-loader!html-minify-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader : "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use : [{  
                        loader : "css-loader",
                        options : {url : false, minimize: true}
                    },
                           "autoprefixer"],
                    fallback: "style-loader"
                }),
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use : [{  
                        loader : "css-loader",
                        options : {url:false, minimize: true}
                    },
                           "less-loader"],
                    fallback: "style-loader"
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader",
                options: {
                    name: './images/[name].[ext]'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: './fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("./css/styles.css"),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ],
    resolve: {
        extensions: [" ", ".js", ".es6", ".css", ".less"]
    }
};
