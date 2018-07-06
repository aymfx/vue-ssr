/*
 * @Author: ly 
 * @Date: 2018-07-05 10:00:43 
 * @Last Modified by: ly
 * @Last Modified time: 2018-07-05 10:55:41
 * @description: {'开发环境的配置'} 
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const webpack = require('webpack')
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ]
})