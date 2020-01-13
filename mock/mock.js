import Mock from 'mockjs'

// 拦截请求
Mock.mock(RegExp('/api/getFindList.php'+'.*'),'get',{
	"code": 0,
	"message": "请求成功",
	"data|20": [{
		"name": "@cname",//cname 中文，name 英文
		"userId|+1": 1,
		"lastDate": "@datetime",
		"other":"公众号：honeyBadger8,宝剑锋从磨砺出，梅花香自苦寒来，做有温度的攻城狮!"
	}]
})

Mock.mock('/api/getGoodsList.php','get',{
	"code": 0,
	"message": "请求成功",
	'list|8':[{
        "id|+1":1, //id自增长
        "name" : '@cword(6,10)',     //商品名称
        "price|1-100":100,          //商品价格
        "content"  : "@cparagraph()", //简短描述
        "thumb"  : "@dataImage('200x200')" //缩略图
    }]
})

