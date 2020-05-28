const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  configureWebpack: {
    entry: './src/packages/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/',
        filename: 'dclog.js',
        libraryTarget: "umd"
    },
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  devServer: {
    // development server port 8000
    port: 7777,
    proxy: {
      '/distribute': {
        // target: 'http://192.168.5.114:8895', // 戴内网测试
        // target: 'http://10.46.199.205:8895/', // 内网测试
        target: 'http://chaos-gateway.dianchu.cc:8110', // 内网测试-网关
        // target: 'https://dc-gateway.9longe.net:18110', // 正式线上-网关
        // target: 'https://10.85.18.37:8895', // 线上-私有地址不能直接访问
        // target: 'http://10.31.14.87:8895', // 外网测试
        ws: false,
        changeOrigin: true
      }
    }
  },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}
