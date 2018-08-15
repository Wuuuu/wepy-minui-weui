const config = require('../config/config')
const util = require('../utils/util')

function urlEncode(params, key, encode) {
  if (params == null) return ''
  var paramsStr = ''
  var t = typeof (params)
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramsStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(params) : params)
  } else {
    for (var i in params) {
      var k = key == null ? i : key + (params instanceof Array ? '[' + i + ']' : '.' + i)
      paramsStr += urlEncode(params[i], k, encode)
    }
  }
  return paramsStr
}

function request({ url, params, data, method, success, complete }) {
  // 补齐url
  if (url.substr(0, 4) != 'http')
    url = config.rootUrl + url
  url = url + '?' + urlEncode(params)
  // 数据
  data = JSON.stringify(data)

  let requestData = {
    url,
    data,
    method: method || 'get',
    header: {
      'content-type': 'application/json',
      '_p': config.platformNo,
      '_t': util.getToken(),
      '_a': 'false'
    },
    success: (result) => {
      let data = result.data
      if (data.errcode == undefined || data.errcode == 0) {
        if (success) success(data)
      } else {
        if (data.errcode == 1) {
          wx.showModal({
            content: data.errmsg,
            showCancel: false,
            confirmText: '知道了'
          })
        } else if (data.errcode == 2) { 
          wx.showToast({
            title: data.errmsg,
            icon: 'success',
            duration: 1500
          })
        } else {
          console.log(data)
        }
      }
    },
    fail: () => {
      wx.showModal({
        content: '网络请求失败',
        showCancel: false,
        confirmText: '知道了'
      })
    },
    complete
  }
  // console.log(requestData)
  wx.request(requestData)
}

module.exports = request
