'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.calculate = calculate;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/orderactivity/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/orderactivity/info', params: params, success: success, complete: complete });
}

function calculate(_ref3) {
  var params = _ref3.params,
      data = _ref3.data,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/orderactivity/calculate', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyYWN0aXZpdHkuanMiXSwibmFtZXMiOlsicXVlcnkiLCJpbmZvIiwiY2FsY3VsYXRlIiwicmVxdWVzdCIsInJlcXVpcmUiLCJwYXJhbXMiLCJzdWNjZXNzIiwiY29tcGxldGUiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsSyxHQUFBQSxLO1FBR0FDLEksR0FBQUEsSTtRQUlBQyxTLEdBQUFBLFM7QUFUaEIsSUFBTUMsVUFBVUMsUUFBUSxxQkFBUixDQUFoQjs7QUFFTyxTQUFTSixLQUFULE9BQThDO0FBQUEsTUFBN0JLLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ25ELFNBQU9KLFFBQVEsRUFBRUssS0FBSyxxQ0FBUCxFQUE4Q0gsY0FBOUMsRUFBc0RDLGdCQUF0RCxFQUErREMsa0JBQS9ELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU04sSUFBVCxRQUE2QztBQUFBLE1BQTdCSSxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUNsRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssb0NBQVAsRUFBNkNILGNBQTdDLEVBQXFEQyxnQkFBckQsRUFBOERDLGtCQUE5RCxFQUFSLENBQVA7QUFDRDs7QUFFTSxTQUFTTCxTQUFULFFBQXdEO0FBQUEsTUFBbkNHLE1BQW1DLFNBQW5DQSxNQUFtQztBQUFBLE1BQTNCSSxJQUEyQixTQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkgsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUM3RCxTQUFPSixRQUFRLEVBQUVLLEtBQUsseUNBQVAsRUFBa0RILGNBQWxELEVBQTBESSxVQUExRCxFQUFnRUMsUUFBUSxNQUF4RSxFQUFnRkosZ0JBQWhGLEVBQXlGQyxrQkFBekYsRUFBUixDQUFQO0FBQ0QiLCJmaWxlIjoib3JkZXJhY3Rpdml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi91dGlscy9yZXF1ZXN0JylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL29yZGVyYWN0aXZpdHkvcXVlcnknLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avb3JkZXJhY3Rpdml0eS9pbmZvJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZSh7IHBhcmFtcywgZGF0YSwgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL29yZGVyYWN0aXZpdHkvY2FsY3VsYXRlJywgcGFyYW1zLCBkYXRhLCBtZXRob2Q6ICdwb3N0Jywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn0iXX0=