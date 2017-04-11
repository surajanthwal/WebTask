//the plugin is used for handling generated css independently
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//weback configuration
module.exports = {
    //entry point of the process which is main.js file
    entry: './main',
    //output file for the process
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            //Configuration for the js file
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            //Configuration for the .scss file using extract text plugin to handle it separately
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    //generating the converted css from scss in a separate file and storing inside public/generatedCss folder
    plugins: [
        new ExtractTextPlugin("./public/generatedCss/styles.css")
    ]
};