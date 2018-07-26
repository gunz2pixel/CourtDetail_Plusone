const
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env, argv) => {
    const pathsToClean = [
        "dist"
    ]

    const outputPath = __dirname + "/dist";

    const targetPath = {
        "production": {
            reactCdnPath: "production.min",
            outputPath: outputPath
        },
        "development": {
            reactCdnPath: "development",
            outputPath: outputPath
        }
    }

    const configPath = targetPath[argv.mode];

    return {
        entry: {
            // specify your moudle name and the entry point of it
            app: "./src/app/app.jsx",
            splash: "./src/splash/index.jsx"
        },
        output: {
            // [name] is the name of your provided entry[name]
            filename: "[name].js?[hash]",
            path: configPath.outputPath,
            publicPath: "/"
        },

        // Enables sourcemaps for debugging webpack's output"
        devtool: "source-map",
        resolve: {
            extensions: [".js", ".jsx", ".json"]
        },

        module: {
            rules: [{
                test: /\.(.js|jsx)?$/,
                loader: "babel-loader"
            }, {
                test: /\.scss$/,
                loader: "sass-loader"
            }, {
                test: /\.(png|jp(e*)g|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8000,
                    name: "assets/images/[name].[ext]"
                }
            }, {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "assets/fonts/[name].[ext]"
                    }
                }]
            }, {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }]
            }, {
                // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
                enforce: "pre", test: /\.js$/,
                loader: "source-map-loader"
            }]
        },

        plugins: [
            new CleanWebpackPlugin(pathsToClean, {}),

            new CopyWebpackPlugin([
                { from: "style", to: "style" }
            ]),

            // splash page
            new HtmlWebpackPlugin({
                fileName: "index.html",
                template: "index.html",
                reactMode: configPath.reactCdnPath,
                chunks: ["splash"]
            }),

            // app page
            new HtmlWebpackPlugin({
                filename: "app.html",
                template: "app.html",
                reactMode: configPath.reactCdnPath,
                chunks: ["app"]
            })
        ],

        // When importing a module whose path matches one of the following, just
        // assume a corresponing global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "$el": "jQuery"
        },

        devServer: {
            historyApiFallback: {
                rewrites: [
                    { from: /\/app/, to: "/app.html" }
                ]
            },
            contentBase: './',
            openPage: "app"
        }
    }
}