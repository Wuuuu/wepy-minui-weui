const request = require('../../utils/request')

export function saveuser({ params, data, success, complete }) {
  return request({ url: '/mobileapi/auth/login', params, data, method: 'post', success, complete })
}
export function verifycode({ params, data, success, complete }) {
  return request({ url: '/mobileapi/verifycode/send',  params, success, complete })
}
export function resetpassword({ params, data, success, complete }) {
  return request({ url: '/mobileapi/auth/resetpassword', params, data, method: 'post', success, complete })
}