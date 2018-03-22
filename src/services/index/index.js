const request = require('../../utils/request')

export function query({ params, success, complete }) {
  return request({ url: '/mobileapi/teach/ui/homepage', params, success, complete })
}
export function queryLesson({ params, success, complete }) {
  return request({ url: '/adminapi/teach/course/query', params, success, complete })
}
export function queryTeacher({ params, success, complete }) {
  return request({ url: '/adminapi/teach/person/query', params, success, complete })
}
