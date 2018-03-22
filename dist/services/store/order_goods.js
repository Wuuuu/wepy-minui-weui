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

  return request({ url: '/mobileapi/shop/order_goods/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/order_goods/info', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyX2dvb2RzLmpzIl0sIm5hbWVzIjpbInF1ZXJ5IiwiaW5mbyIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsSyxHQUFBQSxLO1FBR0FDLEksR0FBQUEsSTtBQUxoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNILEtBQVQsT0FBOEM7QUFBQSxNQUE3QkksTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDbkQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLG1DQUFQLEVBQTRDSCxjQUE1QyxFQUFvREMsZ0JBQXBELEVBQTZEQyxrQkFBN0QsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTCxJQUFULFFBQTZDO0FBQUEsTUFBN0JHLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ2xELFNBQU9KLFFBQVEsRUFBRUssS0FBSyxrQ0FBUCxFQUEyQ0gsY0FBM0MsRUFBbURDLGdCQUFuRCxFQUE0REMsa0JBQTVELEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6Im9yZGVyX2dvb2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avb3JkZXJfZ29vZHMvcXVlcnknLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avb3JkZXJfZ29vZHMvaW5mbycsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn0iXX0=