'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.remove = remove;
exports.create = create;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/order_logistics/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/order_logistics/info', params: params, success: success, complete: complete });
}
function remove(_ref3) {
  var params = _ref3.params,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/order_logistics/remove', params: params, success: success, complete: complete });
}
function create(_ref4) {
  var params = _ref4.params,
      data = _ref4.data,
      success = _ref4.success,
      complete = _ref4.complete;

  return request({ url: '/mobileapi/shop/order_logistics/create', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyX2xvZ2lzdGljcy5qcyJdLCJuYW1lcyI6WyJxdWVyeSIsImluZm8iLCJyZW1vdmUiLCJjcmVhdGUiLCJyZXF1ZXN0IiwicmVxdWlyZSIsInBhcmFtcyIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInVybCIsImRhdGEiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxLLEdBQUFBLEs7UUFHQUMsSSxHQUFBQSxJO1FBR0FDLE0sR0FBQUEsTTtRQUdBQyxNLEdBQUFBLE07QUFYaEIsSUFBTUMsVUFBVUMsUUFBUSxxQkFBUixDQUFoQjs7QUFFTyxTQUFTTCxLQUFULE9BQThDO0FBQUEsTUFBN0JNLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ25ELFNBQU9KLFFBQVEsRUFBRUssS0FBSyx1Q0FBUCxFQUFnREgsY0FBaEQsRUFBd0RDLGdCQUF4RCxFQUFpRUMsa0JBQWpFLEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU1AsSUFBVCxRQUE2QztBQUFBLE1BQTdCSyxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUNsRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssc0NBQVAsRUFBK0NILGNBQS9DLEVBQXVEQyxnQkFBdkQsRUFBZ0VDLGtCQUFoRSxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNOLE1BQVQsUUFBK0M7QUFBQSxNQUE3QkksTUFBNkIsU0FBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDcEQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLHdDQUFQLEVBQWlESCxjQUFqRCxFQUF5REMsZ0JBQXpELEVBQWtFQyxrQkFBbEUsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTCxNQUFULFFBQXFEO0FBQUEsTUFBbkNHLE1BQW1DLFNBQW5DQSxNQUFtQztBQUFBLE1BQTNCSSxJQUEyQixTQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkgsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUMxRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssd0NBQVAsRUFBaURILGNBQWpELEVBQXlESSxVQUF6RCxFQUErREMsUUFBUSxNQUF2RSxFQUErRUosZ0JBQS9FLEVBQXdGQyxrQkFBeEYsRUFBUixDQUFQO0FBQ0QiLCJmaWxlIjoib3JkZXJfbG9naXN0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avb3JkZXJfbG9naXN0aWNzL3F1ZXJ5JywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5mbyh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL29yZGVyX2xvZ2lzdGljcy9pbmZvJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avb3JkZXJfbG9naXN0aWNzL3JlbW92ZScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSh7IHBhcmFtcywgZGF0YSwgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL29yZGVyX2xvZ2lzdGljcy9jcmVhdGUnLCBwYXJhbXMsIGRhdGEsIG1ldGhvZDogJ3Bvc3QnLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5cclxuIl19