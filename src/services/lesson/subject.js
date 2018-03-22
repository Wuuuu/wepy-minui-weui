const request = require('../../utils/request')

export function query({ params, success, complete }) {
  return request({ url: '/adminapi/teach/subject/query', params, success, complete })
}
export function queryCourse({ params, success, complete }) {
  return request({ url: '/adminapi/teach/course/query', params, success, complete })
}
