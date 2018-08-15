'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.queryCourse = queryCourse;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/adminapi/teach/subject/query', params: params, success: success, complete: complete });
}
function queryCourse(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/adminapi/teach/course/query', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3QuanMiXSwibmFtZXMiOlsicXVlcnkiLCJxdWVyeUNvdXJzZSIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsSyxHQUFBQSxLO1FBR0FDLFcsR0FBQUEsVztBQUxoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNILEtBQVQsT0FBOEM7QUFBQSxNQUE3QkksTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDbkQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLCtCQUFQLEVBQXdDSCxjQUF4QyxFQUFnREMsZ0JBQWhELEVBQXlEQyxrQkFBekQsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTCxXQUFULFFBQW9EO0FBQUEsTUFBN0JHLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ3pELFNBQU9KLFFBQVEsRUFBRUssS0FBSyw4QkFBUCxFQUF1Q0gsY0FBdkMsRUFBK0NDLGdCQUEvQyxFQUF3REMsa0JBQXhELEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6InN1YmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcmVxdWVzdCcpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9hZG1pbmFwaS90ZWFjaC9zdWJqZWN0L3F1ZXJ5JywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUNvdXJzZSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL2FkbWluYXBpL3RlYWNoL2NvdXJzZS9xdWVyeScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSlcclxufVxyXG4iXX0=