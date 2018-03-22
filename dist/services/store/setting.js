'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.set = set;
var request = require('./../../utils/request.js');

function get(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/setting/get', params: params, success: success, complete: complete });
}
function set(_ref2) {
  var params = _ref2.params,
      data = _ref2.data,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/setting/set', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuanMiXSwibmFtZXMiOlsiZ2V0Iiwic2V0IiwicmVxdWVzdCIsInJlcXVpcmUiLCJwYXJhbXMiLCJzdWNjZXNzIiwiY29tcGxldGUiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsRyxHQUFBQSxHO1FBR0FDLEcsR0FBQUEsRztBQUxoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNILEdBQVQsT0FBNEM7QUFBQSxNQUE3QkksTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDakQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLDZCQUFQLEVBQXNDSCxjQUF0QyxFQUE4Q0MsZ0JBQTlDLEVBQXVEQyxrQkFBdkQsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTCxHQUFULFFBQWtEO0FBQUEsTUFBbkNHLE1BQW1DLFNBQW5DQSxNQUFtQztBQUFBLE1BQTNCSSxJQUEyQixTQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkgsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUN2RCxTQUFPSixRQUFRLEVBQUVLLEtBQUssNkJBQVAsRUFBc0NILGNBQXRDLEVBQThDSSxVQUE5QyxFQUFvREMsUUFBUSxNQUE1RCxFQUFvRUosZ0JBQXBFLEVBQTZFQyxrQkFBN0UsRUFBUixDQUFQO0FBQ0QiLCJmaWxlIjoic2V0dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi91dGlscy9yZXF1ZXN0JylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXQoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9zZXR0aW5nL2dldCcsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldCh7IHBhcmFtcywgZGF0YSwgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL3NldHRpbmcvc2V0JywgcGFyYW1zLCBkYXRhLCBtZXRob2Q6ICdwb3N0Jywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuIl19