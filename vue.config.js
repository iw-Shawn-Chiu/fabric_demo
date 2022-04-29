const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fabric_demo/'
    : '/',
  configureWebpack: {
    plugins : [
      new webpack.optimize.UglifyJsPlugin({ 
        uglifyOptions: { 
          compress: false, 
          warnings: false, 
          mangle: false
        }
      }),
    ]
  }
})
