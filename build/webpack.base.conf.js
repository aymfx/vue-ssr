const path = require('path') //路径api
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    // 设置map，
    entry: {
        // app: './src/app.js'
        app: './src/entry-client.js'
    },
    resolve: { //解析，对一些操作更加方便快捷
        extensions: ['.js', '.vue', '.json'], //自动解决某些扩展名 便于webpack识别
        alias: { //为一些路径添加别名
            'vue$': 'vue / dist / vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.js$/,
                use: [
                    "babel-loader"
                ],
                exclude: [
                    'node_modules'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}