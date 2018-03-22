const request = require('../../utils/request')

export function send({ params, success, complete }) {
  return request({ url: '/mobileapi/verifycode/send', params, success, complete })
}