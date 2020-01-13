const path = require('path')
const url = require('url')
const findList = require('./mock/findList.json')
const seller = require("./mock/data.json")

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 8080,
        before(app) {
            app.get("/api/getSeller",(req,res)=>{
                setTimeout(()=>{
                    res.json(seller["goods"])
                },500)
            })
        },
    }
}