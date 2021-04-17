module.exports ={
	devServer: {
		host: '127.0.0.1',
		port: 8080,
		disableHostCheck: true
	},
	publicPath:'./',
	outputDir:'./dist'
	  
}
const webpack = require('webpack')
 
configureWebpack: {
    plugins: [
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
        })
    ]
}