module.exports = {
    entry:'./src/login.jsx',
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