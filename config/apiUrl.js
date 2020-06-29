// let ipUrl = 'http://47.95.145.164:7001//default/' //上线
let ipUrl = 'http://localhost:7002/default/'
let servicePath = {
  getArticleList: ipUrl + 'getArticleList',
  getArticleById: ipUrl + 'getArticleById/',
  getTypeInfo: ipUrl + 'getTypeInfo', //文章类别接口
  getListById: ipUrl + 'getListByid/',  // 根据类别ID获得文章列表
}

export default servicePath