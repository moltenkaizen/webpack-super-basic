const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const appHtmlTitle = 'Webpack Go!'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.ejs'),
            title: appHtmlTitle
        })
    ],
    module: {
    	rules: [
    		{
    			test: /\.js$/,
    			exclude: /node_modules/,
    			use: [
    			{ loader: 'babel-loader'}
    			]
    		}
    	]
    }
}
