const path = require('path')
const url = require('url')
const goodsList = require("./mock/goodsList.json")

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 8080,
        before(app) {
            app.get("/api/getgoodsList",(req,res)=>{
                setTimeout(()=>{
                    res.json(goodsList)
                },500)
            })
        }
    }
}