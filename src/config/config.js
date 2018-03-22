function config() {
  var setting = {}
  var appsettings = {}
  try {
    setting = wepy.getStorageSync('setting')
    appsettings = setting ? setting.appsettings : {}
  } catch (e) { }

  return {
    platformNo: '平台编号',  // 平台编号
    appId: 'appID',  // 小程序appid
    name: '', // 名称
    version: '1.0.0', // 版本
    description: '', // 说明
    logo: appsettings.logo || 'http://iph.href.lu/128x128?text=%E5%8D%A0%E4%BD%8D', // 正方形logo
    rectangleLogo: appsettings.rectangleLogo || 'http://iph.href.lu/400x128?text=%E5%8D%A0%E4%BD%8D', // 长方形logo
    rootUrl: appsettings.rootUrl || 'https://xxx.cn', // 根目录 
    imgRootUrl: appsettings.imgRootUrl || 'https://xxx.cn', // 图片根目录
    imgUrl: appsettings.imgUrl || 'https://xxx.cn/img/src', // 根据id获取图片的地址
    uploadRoute: appsettings.uploadRoute || "/upload", // 统一上传路由
    loginRoute: '/pages/member/bindtelephone/index', // 登录路由
    homeRoute: '/pages/index/index', // 主页
    errorRoute: '/error', // 错误页面
    author: '',
    copyright: '',
    authentication: false
  }
}

module.exports = config()