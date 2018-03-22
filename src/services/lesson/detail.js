const request = require('../../utils/request')

export function query({ params, success, complete }) {
  return request({ url: '/adminapi/teach/course/info', params, success, complete })
}
export function submit({params, data, success, complete}) {
  return request({ url: '/adminapi/teach/preview/book', params, data, method: 'post', success, complete })
}
