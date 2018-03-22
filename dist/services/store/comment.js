'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.comment = comment;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/comment/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/comment/info', params: params, success: success, complete: complete });
}

function comment(_ref3) {
  var params = _ref3.params,
      data = _ref3.data,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/comment/comment', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsicXVlcnkiLCJpbmZvIiwiY29tbWVudCIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIiwiZGF0YSIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSztRQUdBQyxJLEdBQUFBLEk7UUFJQUMsTyxHQUFBQSxPO0FBVGhCLElBQU1DLFVBQVVDLFFBQVEscUJBQVIsQ0FBaEI7O0FBRU8sU0FBU0osS0FBVCxPQUE4QztBQUFBLE1BQTdCSyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNuRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssK0JBQVAsRUFBd0NILGNBQXhDLEVBQWdEQyxnQkFBaEQsRUFBeURDLGtCQUF6RCxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNOLElBQVQsUUFBNkM7QUFBQSxNQUE3QkksTUFBNkIsU0FBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDbEQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLDhCQUFQLEVBQXVDSCxjQUF2QyxFQUErQ0MsZ0JBQS9DLEVBQXdEQyxrQkFBeEQsRUFBUixDQUFQO0FBQ0Q7O0FBRU0sU0FBU0wsT0FBVCxRQUFzRDtBQUFBLE1BQW5DRyxNQUFtQyxTQUFuQ0EsTUFBbUM7QUFBQSxNQUEzQkksSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJILE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDM0QsU0FBT0osUUFBUSxFQUFFSyxLQUFLLGlDQUFQLEVBQTBDSCxjQUExQyxFQUFrREksVUFBbEQsRUFBd0RDLFFBQVEsTUFBaEUsRUFBd0VKLGdCQUF4RSxFQUFpRkMsa0JBQWpGLEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcmVxdWVzdCcpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9jb21tZW50L3F1ZXJ5JywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5mbyh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL2NvbW1lbnQvaW5mbycsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50KHsgcGFyYW1zLCBkYXRhLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3AvY29tbWVudC9jb21tZW50JywgcGFyYW1zLCBkYXRhLCBtZXRob2Q6ICdwb3N0Jywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn0iXX0=