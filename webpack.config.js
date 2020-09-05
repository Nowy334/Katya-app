const path = require("path");
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    watch: false,
    mode: "development",
    devServer:{
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }

}