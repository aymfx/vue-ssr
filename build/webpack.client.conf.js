const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const webpack = require('webpack')
module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"' // 增加process.env.VUE_ENV
        }),
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin() //
    ]
})