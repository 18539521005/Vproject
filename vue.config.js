module.exports = {
    devServer: {
      port: 8080,
      // 服务器代理 (反向代理)
      proxy: {
        '/api': {
          // php开启的服务器
          target: 'http://localhost/api',
          //允许跨域
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  