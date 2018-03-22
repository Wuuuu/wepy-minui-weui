const request = require('../../utils/request')

export function query({ params, success, complete }) {
  return request({ url: '/adminapi/teach/schedule/query', params, success, complete })
}
export function info({ params, success, complete }) {
  return request({ url: '/adminapi/teach/schedule/info', params, success, complete })
}
export function addcomment({ params, data, success, complete }) {
  return request({ url: '/adminapi/teach/comment/add', params, data, method: 'post', success, complete })
}
