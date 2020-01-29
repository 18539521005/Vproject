const path = require('path')
const url = require('url')
<<<<<<< HEAD
const goodsList = require("./mock/goodsList.json")
=======
const findList = require('./mock/findList.json')
const seller = require("./mock/data.json")
>>>>>>> zp

function resolve(dir) {
    return path.join(__dirname, dir)
}

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
    }
}