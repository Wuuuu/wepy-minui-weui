const request = require('../../utils/request')

export function query({ params, success, complete }) {
  return request({ url: '/adminapi/teach/notice/query', params, success, complete })
}
