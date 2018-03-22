'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.queryLesson = queryLesson;
exports.queryTeacher = queryTeacher;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/teach/ui/homepage', params: params, success: success, complete: complete });
}
function queryLesson(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/adminapi/teach/course/query', params: params, success: success, complete: complete });
}
function queryTeacher(_ref3) {
  var params = _ref3.params,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/adminapi/teach/person/query', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInF1ZXJ5IiwicXVlcnlMZXNzb24iLCJxdWVyeVRlYWNoZXIiLCJyZXF1ZXN0IiwicmVxdWlyZSIsInBhcmFtcyIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSztRQUdBQyxXLEdBQUFBLFc7UUFHQUMsWSxHQUFBQSxZO0FBUmhCLElBQU1DLFVBQVVDLFFBQVEscUJBQVIsQ0FBaEI7O0FBRU8sU0FBU0osS0FBVCxPQUE4QztBQUFBLE1BQTdCSyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNuRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssOEJBQVAsRUFBdUNILGNBQXZDLEVBQStDQyxnQkFBL0MsRUFBd0RDLGtCQUF4RCxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNOLFdBQVQsUUFBb0Q7QUFBQSxNQUE3QkksTUFBNkIsU0FBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDekQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLDhCQUFQLEVBQXVDSCxjQUF2QyxFQUErQ0MsZ0JBQS9DLEVBQXdEQyxrQkFBeEQsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTCxZQUFULFFBQXFEO0FBQUEsTUFBN0JHLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQzFELFNBQU9KLFFBQVEsRUFBRUssS0FBSyw4QkFBUCxFQUF1Q0gsY0FBdkMsRUFBK0NDLGdCQUEvQyxFQUF3REMsa0JBQXhELEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3RlYWNoL3VpL2hvbWVwYWdlJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5TGVzc29uKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL2FkbWluYXBpL3RlYWNoL2NvdXJzZS9xdWVyeScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVRlYWNoZXIoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvYWRtaW5hcGkvdGVhY2gvcGVyc29uL3F1ZXJ5JywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxufVxuIl19