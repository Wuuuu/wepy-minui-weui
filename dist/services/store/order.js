'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.order = order;
exports.cancel = cancel;
exports.statis_status = statis_status;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/order/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/order/info', params: params, success: success, complete: complete });
}

function order(_ref3) {
  var params = _ref3.params,
      data = _ref3.data,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/order/order', params: params, data: data, method: 'post', success: success, complete: complete });
}
function cancel(_ref4) {
  var params = _ref4.params,
      success = _ref4.success,
      complete = _ref4.complete;

  return request({ url: '/mobileapi/shop/order/cancel', params: params, success: success, complete: complete });
}
function statis_status(_ref5) {
  var params = _ref5.params,
      success = _ref5.success,
      complete = _ref5.complete;

  return request({ url: '/mobileapi/shop/order/statis_status', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbInF1ZXJ5IiwiaW5mbyIsIm9yZGVyIiwiY2FuY2VsIiwic3RhdGlzX3N0YXR1cyIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIiwiZGF0YSIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSztRQUdBQyxJLEdBQUFBLEk7UUFJQUMsSyxHQUFBQSxLO1FBR0FDLE0sR0FBQUEsTTtRQUdBQyxhLEdBQUFBLGE7QUFmaEIsSUFBTUMsVUFBVUMsUUFBUSxxQkFBUixDQUFoQjs7QUFFTyxTQUFTTixLQUFULE9BQThDO0FBQUEsTUFBN0JPLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ25ELFNBQU9KLFFBQVEsRUFBRUssS0FBSyw2QkFBUCxFQUFzQ0gsY0FBdEMsRUFBOENDLGdCQUE5QyxFQUF1REMsa0JBQXZELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU1IsSUFBVCxRQUE2QztBQUFBLE1BQTdCTSxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUNsRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssNEJBQVAsRUFBcUNILGNBQXJDLEVBQTZDQyxnQkFBN0MsRUFBc0RDLGtCQUF0RCxFQUFSLENBQVA7QUFDRDs7QUFFTSxTQUFTUCxLQUFULFFBQW9EO0FBQUEsTUFBbkNLLE1BQW1DLFNBQW5DQSxNQUFtQztBQUFBLE1BQTNCSSxJQUEyQixTQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkgsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUN6RCxTQUFPSixRQUFRLEVBQUVLLEtBQUssNkJBQVAsRUFBc0NILGNBQXRDLEVBQThDSSxVQUE5QyxFQUFvREMsUUFBUSxNQUE1RCxFQUFvRUosZ0JBQXBFLEVBQTZFQyxrQkFBN0UsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTixNQUFULFFBQStDO0FBQUEsTUFBN0JJLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ3BELFNBQU9KLFFBQVEsRUFBRUssS0FBSyw4QkFBUCxFQUF1Q0gsY0FBdkMsRUFBK0NDLGdCQUEvQyxFQUF3REMsa0JBQXhELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU0wsYUFBVCxRQUFzRDtBQUFBLE1BQTdCRyxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUMzRCxTQUFPSixRQUFRLEVBQUVLLEtBQUsscUNBQVAsRUFBOENILGNBQTlDLEVBQXNEQyxnQkFBdEQsRUFBK0RDLGtCQUEvRCxFQUFSLENBQVA7QUFDRCIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi91dGlscy9yZXF1ZXN0JylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL29yZGVyL3F1ZXJ5JywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5mbyh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL29yZGVyL2luZm8nLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3JkZXIoeyBwYXJhbXMsIGRhdGEsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9vcmRlci9vcmRlcicsIHBhcmFtcywgZGF0YSwgbWV0aG9kOiAncG9zdCcsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWwoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9vcmRlci9jYW5jZWwnLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdGF0aXNfc3RhdHVzKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avb3JkZXIvc3RhdGlzX3N0YXR1cycsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn0iXX0=