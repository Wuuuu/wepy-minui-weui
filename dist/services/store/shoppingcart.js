'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.remove = remove;
exports.update = update;
exports.quantitychange = quantitychange;
exports.addtocart = addtocart;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/shoppingcart/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/shoppingcart/info', params: params, success: success, complete: complete });
}
function remove(_ref3) {
  var params = _ref3.params,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/shoppingcart/remove', params: params, success: success, complete: complete });
}
function update(_ref4) {
  var params = _ref4.params,
      data = _ref4.data,
      success = _ref4.success,
      complete = _ref4.complete;

  return request({ url: '/mobileapi/shop/shoppingcart/update', params: params, data: data, method: 'post', success: success, complete: complete });
}

function quantitychange(_ref5) {
  var params = _ref5.params,
      success = _ref5.success,
      complete = _ref5.complete;

  return request({ url: '/mobileapi/shop/shoppingcart/quantitychange', params: params, success: success, complete: complete });
}
function addtocart(_ref6) {
  var params = _ref6.params,
      data = _ref6.data,
      success = _ref6.success,
      complete = _ref6.complete;

  return request({ url: '/mobileapi/shop/shoppingcart/addtocart', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nY2FydC5qcyJdLCJuYW1lcyI6WyJxdWVyeSIsImluZm8iLCJyZW1vdmUiLCJ1cGRhdGUiLCJxdWFudGl0eWNoYW5nZSIsImFkZHRvY2FydCIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIiwiZGF0YSIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSztRQUdBQyxJLEdBQUFBLEk7UUFHQUMsTSxHQUFBQSxNO1FBR0FDLE0sR0FBQUEsTTtRQUlBQyxjLEdBQUFBLGM7UUFHQUMsUyxHQUFBQSxTO0FBbEJoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNQLEtBQVQsT0FBOEM7QUFBQSxNQUE3QlEsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDbkQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLG9DQUFQLEVBQTZDSCxjQUE3QyxFQUFxREMsZ0JBQXJELEVBQThEQyxrQkFBOUQsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTVCxJQUFULFFBQTZDO0FBQUEsTUFBN0JPLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ2xELFNBQU9KLFFBQVEsRUFBRUssS0FBSyxtQ0FBUCxFQUE0Q0gsY0FBNUMsRUFBb0RDLGdCQUFwRCxFQUE2REMsa0JBQTdELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU1IsTUFBVCxRQUErQztBQUFBLE1BQTdCTSxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUNwRCxTQUFPSixRQUFRLEVBQUVLLEtBQUsscUNBQVAsRUFBOENILGNBQTlDLEVBQXNEQyxnQkFBdEQsRUFBK0RDLGtCQUEvRCxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNQLE1BQVQsUUFBcUQ7QUFBQSxNQUFuQ0ssTUFBbUMsU0FBbkNBLE1BQW1DO0FBQUEsTUFBM0JJLElBQTJCLFNBQTNCQSxJQUEyQjtBQUFBLE1BQXJCSCxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQzFELFNBQU9KLFFBQVEsRUFBRUssS0FBSyxxQ0FBUCxFQUE4Q0gsY0FBOUMsRUFBc0RJLFVBQXRELEVBQTREQyxRQUFRLE1BQXBFLEVBQTRFSixnQkFBNUUsRUFBcUZDLGtCQUFyRixFQUFSLENBQVA7QUFDRDs7QUFFTSxTQUFTTixjQUFULFFBQXVEO0FBQUEsTUFBN0JJLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQzVELFNBQU9KLFFBQVEsRUFBRUssS0FBSyw2Q0FBUCxFQUFzREgsY0FBdEQsRUFBOERDLGdCQUE5RCxFQUF1RUMsa0JBQXZFLEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU0wsU0FBVCxRQUF3RDtBQUFBLE1BQW5DRyxNQUFtQyxTQUFuQ0EsTUFBbUM7QUFBQSxNQUEzQkksSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJILE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDN0QsU0FBT0osUUFBUSxFQUFFSyxLQUFLLHdDQUFQLEVBQWlESCxjQUFqRCxFQUF5REksVUFBekQsRUFBK0RDLFFBQVEsTUFBdkUsRUFBK0VKLGdCQUEvRSxFQUF3RkMsa0JBQXhGLEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6InNob3BwaW5nY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi91dGlscy9yZXF1ZXN0JylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL3Nob3BwaW5nY2FydC9xdWVyeScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluZm8oeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9zaG9wcGluZ2NhcnQvaW5mbycsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL3Nob3BwaW5nY2FydC9yZW1vdmUnLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoeyBwYXJhbXMsIGRhdGEsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9zaG9wcGluZ2NhcnQvdXBkYXRlJywgcGFyYW1zLCBkYXRhLCBtZXRob2Q6ICdwb3N0Jywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWFudGl0eWNoYW5nZSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL3Nob3BwaW5nY2FydC9xdWFudGl0eWNoYW5nZScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZHRvY2FydCh7IHBhcmFtcywgZGF0YSwgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL3Nob3BwaW5nY2FydC9hZGR0b2NhcnQnLCBwYXJhbXMsIGRhdGEsIG1ldGhvZDogJ3Bvc3QnLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG4gIl19