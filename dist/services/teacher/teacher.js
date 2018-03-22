'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/adminapi/teach/person/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/adminapi/teach/person/info', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXIuanMiXSwibmFtZXMiOlsicXVlcnkiLCJpbmZvIiwicmVxdWVzdCIsInJlcXVpcmUiLCJwYXJhbXMiLCJzdWNjZXNzIiwiY29tcGxldGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxLLEdBQUFBLEs7UUFHQUMsSSxHQUFBQSxJO0FBTGhCLElBQU1DLFVBQVVDLFFBQVEscUJBQVIsQ0FBaEI7O0FBRU8sU0FBU0gsS0FBVCxPQUE4QztBQUFBLE1BQTdCSSxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNuRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssOEJBQVAsRUFBdUNILGNBQXZDLEVBQStDQyxnQkFBL0MsRUFBd0RDLGtCQUF4RCxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNMLElBQVQsUUFBNkM7QUFBQSxNQUE3QkcsTUFBNkIsU0FBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDbEQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLDZCQUFQLEVBQXNDSCxjQUF0QyxFQUE4Q0MsZ0JBQTlDLEVBQXVEQyxrQkFBdkQsRUFBUixDQUFQO0FBQ0QiLCJmaWxlIjoidGVhY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi91dGlscy9yZXF1ZXN0JylcblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL2FkbWluYXBpL3RlYWNoL3BlcnNvbi9xdWVyeScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL2FkbWluYXBpL3RlYWNoL3BlcnNvbi9pbmZvJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxufVxuIl19