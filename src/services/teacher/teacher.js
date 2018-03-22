const request = require('../../utils/request')

export function query({ params, success, complete }) {
  return request({ url: '/adminapi/teach/person/query', params, success, complete })
}
export function info({ params, success, complete }) {
  return request({ url: '/adminapi/teach/person/info', params, success, complete })
}
