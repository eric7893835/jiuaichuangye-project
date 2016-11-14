var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
//插件项
    plugins: [commonsPlugin],
//页面入口文件配置
    entry: {
        whd: 'webpack/hot/dev-server',
        client: 'webpack-dev-server/client?http://localhost:8080',
        'index': './src/js/index.js'
    },
//入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
//加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
//其它解决方案配置
    resolve: {
        root: __dirname, //绝对路径
        extensions: ['', '.js', '.json', '.less'],
        alias: {

        }
    }
};