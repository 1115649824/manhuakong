'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const data = require('../data.json')
const adpositionlist = data.adpositionlist
const Recommended = data.Recommended
const Exclusivestart = data.Exclusivestart
const free = data.free
const Maidenlove = data.Maidenlove
const Finish = data.Finish
const Officialactivities = data.Officialactivities
const HotbloodAdventure = data.HotbloodAdventure
const Hotnovel = data.Hotnovel
const Realmanarea = data.Realmanarea
const Horror = data.Horror
const Strongrecommendation = data.Strongrecommendation
const Finebooklist = data.Finebooklist
const Popularitylist = data.Popularitylist
const Bestsellinglist = data.Bestsellinglist
const Newbooklist =  data.Newbooklist
const end = data.end
const freebook = data.freebook
const recommendone = data.recommendone
const popularityone = data.popularityone
const endone = data.endone
const recommendtwo = data.recommendtwo
const popularitytwo = data.popularitytwo
const endtwo = data.endtwo
const retui = data.retui
const xinshu = data.xinshu
const jinpin = data.jinpin

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before (app) {
      app.get('/api/adpositionlist', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: adpositionlist
        })
      })
      app.get('/api/Recommended', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Recommended
        })
      })
      app.get('/api/Exclusivestart', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Exclusivestart
        })
      })
      app.get('/api/free', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: free
        })
      })
      app.get('/api/Maidenlove', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Maidenlove
        })
      })
      app.get('/api/Finish', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Finish
        })
      })
      app.get('/api/Officialactivities', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Officialactivities
        })
      })
      app.get('/api/HotbloodAdventure', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: HotbloodAdventure
        })
      })
      app.get('/api/Hotnovel', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Hotnovel
        })
      })
      app.get('/api/Realmanarea', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Realmanarea
        })
      })
      app.get('/api/Horror', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Horror
        })
      })
      app.get('/api/Strongrecommendation', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Strongrecommendation
        })
      })
      app.get('/api/Finebooklist', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Finebooklist
        })
      })
      app.get('/api/Popularitylist', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Popularitylist
        })
      })
      app.get('/api/Bestsellinglist', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Bestsellinglist
        })
      })
      app.get('/api/Newbooklist', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: Newbooklist
        })
      })
      app.get('/api/end', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: end
        })
      })
      app.get('/api/endtwo', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: endtwo
        })
      })
      app.get('/api/freebook', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: freebook
        })
      })
      app.get('/api/recommendone', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: recommendone
        })
      })
      app.get('/api/popularityone', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: popularityone
        })
      })
      app.get('/api/endone', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: endone
        })
      })
      app.get('/api/recommendtwo', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: recommendtwo
        })
      })
      app.get('/api/popularitytwo', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: popularitytwo
        })
      })
      app.get('/api/retui', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: retui
        })
      })
      app.get('/api/jinpin', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: jinpin
        })
      })
      app.get('/api/xinshu', function (req, res) {
        // req 用户向服务器发送的请求信息对象
        // res 服务器给前端用户的回复信息对象
        res.json({
          errno: 0, // 标记告诉客户请求成功
          data: xinshu
        })
      })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
