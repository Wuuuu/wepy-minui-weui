'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.querybyskuid = querybyskuid;
exports.queryshippinginfo = queryshippinginfo;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/goods/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/goods/info', params: params, success: success, complete: complete });
}
function querybyskuid(_ref3) {
  var params = _ref3.params,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/goods/querybyskuid', params: params, success: success, complete: complete });
}
function queryshippinginfo(_ref4) {
  var params = _ref4.params,
      success = _ref4.success,
      complete = _ref4.complete;

  return request({ url: '/mobileapi/shop/goods/queryshippinginfo', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzLmpzIl0sIm5hbWVzIjpbInF1ZXJ5IiwiaW5mbyIsInF1ZXJ5Ynlza3VpZCIsInF1ZXJ5c2hpcHBpbmdpbmZvIiwicmVxdWVzdCIsInJlcXVpcmUiLCJwYXJhbXMiLCJzdWNjZXNzIiwiY29tcGxldGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxLLEdBQUFBLEs7UUFHQUMsSSxHQUFBQSxJO1FBR0FDLFksR0FBQUEsWTtRQUdBQyxpQixHQUFBQSxpQjtBQVhoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNMLEtBQVQsT0FBOEM7QUFBQSxNQUE3Qk0sTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDbkQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLDZCQUFQLEVBQXNDSCxjQUF0QyxFQUE4Q0MsZ0JBQTlDLEVBQXVEQyxrQkFBdkQsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTUCxJQUFULFFBQTZDO0FBQUEsTUFBN0JLLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ2xELFNBQU9KLFFBQVEsRUFBRUssS0FBSyw0QkFBUCxFQUFxQ0gsY0FBckMsRUFBNkNDLGdCQUE3QyxFQUFzREMsa0JBQXRELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU04sWUFBVCxRQUFxRDtBQUFBLE1BQTdCSSxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUMxRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssb0NBQVAsRUFBNkNILGNBQTdDLEVBQXFEQyxnQkFBckQsRUFBOERDLGtCQUE5RCxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNMLGlCQUFULFFBQTBEO0FBQUEsTUFBN0JHLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQy9ELFNBQU9KLFFBQVEsRUFBRUssS0FBSyx5Q0FBUCxFQUFrREgsY0FBbEQsRUFBMERDLGdCQUExRCxFQUFtRUMsa0JBQW5FLEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6Imdvb2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3AvZ29vZHMvcXVlcnknLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3AvZ29vZHMvaW5mbycsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5Ynlza3VpZCh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL2dvb2RzL3F1ZXJ5Ynlza3VpZCcsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5c2hpcHBpbmdpbmZvKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3AvZ29vZHMvcXVlcnlzaGlwcGluZ2luZm8nLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59Il19