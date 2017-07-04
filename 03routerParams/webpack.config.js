var webpack=require("webpack");
var openBrowser=require("open-browser-webpack-plugin");
var htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/app/app.js",
    output:{
            path:__dirname+"/build",
            filename:"bundle.js"
        },
        module:{
            rules:[
                {
                    test : /\.json$/,
                    use:"babel-loader"
                },
                {
                    test : /\.js$/,
                    use:"babel-loader"
                },
                {
                    test:/\.css$/,
                    use:["style-loader","css-loader"]
                },
                {
                    test:/\.less$/,
                    use:["style-loader","css-loader","less-loader"]
                },
                {
                    test:/\.(jpg|png|gif|jpeg)$/,
                    use:"url-loader?limit=8129"
                }

            ]
        },
        plugins:[
            new openBrowser({
                url:"http://localhost:8080"
            }),
            new htmlPlugin({
                template:__dirname+'/src/app/index.tmpl.html'
            })
        ]

}