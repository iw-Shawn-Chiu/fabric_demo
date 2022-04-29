const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fabric_demo/'
    : '/',
  chainWebpack: config => config.optimization.minimize(false),
})
