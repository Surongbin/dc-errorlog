/*
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-28 17:19:47
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-28 18:33:37
 */ 
var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'dclog.js',
        libraryTarget: "umd"
    },
    mode: 'development'
}