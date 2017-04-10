const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './main',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
            // , {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     loader: 'style-loader!css-loader'
            // }
        ]
    },
    
    // module: {
    //     rules: [
    //         {
    //             test: /\.scss$/,
    //             use: [{
    //                 loader: "style-loader" // creates style nodes from JS strings
    //             }, {
    //                 loader: "css-loader" // translates CSS into CommonJS
    //             }, {
    //                 loader: "sass-loader" // compiles Sass to CSS
    //             }]
    //         },
    //         {
    //             test: /\.(js|jsx)$/,
    //             use: 'babel-loader'
    //         }
    //     ]
    // },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};