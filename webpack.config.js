var webpack=require('webpack')

module.exports={
	entry:'./src/js/index.js',
	output:{
		path:__dirname + '/build',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{   test:/\.css$/ , loader:'style!css' },
			{   test: /\.js$/ , loader: 'babel-loader' ,
				query: {
		          presets: ['es2015']
		        }
			},
			{   test: /\.jsx?$/ , loader: 'babel',
				query: {
                    presets: ['react', 'es2015']
                }
			}, 
			{	test: /\.less$/,      loader: 'style!css!less'    },
			{ 	test: /\.(png|jpg)$/, loader: 'url?limit=25000'  }
		]
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by tingzhou')
	]
}