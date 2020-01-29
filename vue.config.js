<<<<<<< HEAD
const path = require('path')
const url = require('url')
<<<<<<< HEAD
<<<<<<< HEAD
const goodsList = require("./mock/goodsList.json")
=======
const findList = require('./mock/findList.json')
const seller = require("./mock/data.json")
>>>>>>> zp
=======
const sylb = require("./mock/sylb.json")
>>>>>>> fan

function resolve(dir) {
    return path.join(__dirname, dir)
}

<<<<<<< HEAD
module.exports = {
    devServer: {
        port: 8080,
        before(app) {
<<<<<<< HEAD
            app.get("/api/getgoodsList",(req,res)=>{
                setTimeout(()=>{
                    res.json(goodsList)
                },500)
            })
        }
=======
            app.get("/api/getSeller",(req,res)=>{
                setTimeout(()=>{
                    res.json(seller["goods"])
                },500)
            })
        },
>>>>>>> zp
=======
module.exports ={
    devServer:{
        port: 8080,
        before(app) {
            app.get("/api/getSeller",(req,res)=>{
                    
                    res.json({sylb})
              
            })
        }
    },
    chainWebpack(config) {
        config.resolve.alias
            //用com这个别名代表./src/components的完整路径
            .set('com', resolve('./src/components'))
            .set('page', resolve('./src/views'))
>>>>>>> fan
    }
}
=======
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
  
>>>>>>> dingyan
