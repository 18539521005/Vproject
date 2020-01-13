const path = require('path')
const url = require('url')
const sylb = require("./mock/sylb.json")

function resolve(dir) {
    return path.join(__dirname, dir)
}

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
    }
}