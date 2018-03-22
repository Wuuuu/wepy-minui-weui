function config() {
  var setting = {}
  var appsettings = {}
  try {
    setting = wepy.getStorageSync('setting')
    appsettings = setting ? setting.appsettings : {}
  } catch (e) { }

  return {
    platformNo: 'teach',  // 平台编号
    appId: 'wx64a1c6b915f39968',  // 小程序appid
    name: '教立方', // 名称
    version: '1.0.0', // 版本
    description: '', // 说明
    logo: appsettings.logo || 'http://iph.href.lu/128x128?text=%E5%8D%A0%E4%BD%8D', // 正方形logo
    rectangleLogo: appsettings.rectangleLogo || 'http://iph.href.lu/400x128?text=%E5%8D%A0%E4%BD%8D', // 长方形logo
    rootUrl: appsettings.rootUrl || 'https://ceshi.conpanda.cn', // 根目录  https://store.conpanda.cn
    imgRootUrl: appsettings.imgRootUrl || 'https://ceshi.conpanda.cn', // 图片根目录
    imgUrl: appsettings.imgUrl || 'https://ceshi.conpanda.cn/img/src', // 根据id获取图片的地址
    uploadRoute: appsettings.uploadRoute || "/upload", // 统一上传路由
    loginRoute: '/pages/member/bindtelephone/index', // 登录路由
    homeRoute: '/pages/index/index', // 主页
    errorRoute: '/error', // 错误页面
    author: '成都童伙信息技术有限公司',
    copyright: '版权所有 © 2018 由 成都童伙信息技术有限公司 提供',
    authentication: false,
    getToken: function () {
      try {
        return wx.getStorageSync('token')
      } catch (e) { }
      return null;
    },
    setToken: function (token) {
      try {
        return wx.setStorageSync('token', token)
      } catch (e) { }
      return null;
    },
    getUnionuser: function () {
      try {
        return wx.getStorageSync('unionuser')
      } catch (e) { }
      return null;
    },
    setUnionuser: function (unionuser) {
      try {
        return wx.setStorageSync('unionuser', unionuser)
      } catch (e) { }
      return null;
    }
  }
}

module.exports = config()