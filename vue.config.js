const path = require('path')
const url = require('url')
const findList = require('./mock/findList.json')
const seller = require("./mock/data.json")
const sylb = require("./mock/sylb.json")
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 8080,
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
        },
        before(app) {
            app.get("/api/getSeller", (req, res) => {
                setTimeout(() => {
                    res.json(seller["goods"])
                }, 500)
            }),
                app.get("/api/getSeller", (req, res) => {
                    res.json({ sylb })
                })
        },
        chainWebpack(config) {
            config.resolve.alias
                //用com这个别名代表./src/components的完整路径
                .set('com', resolve('./src/components'))
                .set('page', resolve('./src/views'))
        }

    }
}