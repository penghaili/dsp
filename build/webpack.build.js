const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode:'production',
    entry: {
        bundle: path.resolve(process.cwd(),"src/main.js")
    },
    output: {
        path: path.resolve(process.cwd(),"dist"),
        filename: "[name].js"
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test: /\.css$/, 
                use: ["style-loader","css-loader"]
            },{
                test: /\.(jpg|png|gif|jpeg|eot|svg|ttf|woff|woff2)/,
                loader: 'url-loader',
            }
        ]
    },
    resolve:{
        alias:{}
    },
    plugins:[
        
    ]
}