module.exports = {
    entry:'./src/app.jsx',
    output:{
        path: __dirname + '/static',
        filename:'app.js',
    },
    module:{
        loaders:[
            {
                test:/\jsx$/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015'],
                }
            }
        ]
    }
};