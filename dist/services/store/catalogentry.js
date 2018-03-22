'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.treepage = treepage;
exports.treelist = treelist;
exports.treedata = treedata;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/catalogentry/query', params: params, success: success, complete: complete });
}

function treepage(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/catalogentry/treepage', params: params, success: success, complete: complete });
}
function treelist(_ref3) {
  var params = _ref3.params,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/catalogentry/treelist', params: params, success: success, complete: complete });
}
function treedata(_ref4) {
  var params = _ref4.params,
      success = _ref4.success,
      complete = _ref4.complete;

  return request({ url: '/mobileapi/shop/catalogentry/treedata', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2dlbnRyeS5qcyJdLCJuYW1lcyI6WyJxdWVyeSIsInRyZWVwYWdlIiwidHJlZWxpc3QiLCJ0cmVlZGF0YSIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsSyxHQUFBQSxLO1FBSUFDLFEsR0FBQUEsUTtRQUdBQyxRLEdBQUFBLFE7UUFHQUMsUSxHQUFBQSxRO0FBWmhCLElBQU1DLFVBQVVDLFFBQVEscUJBQVIsQ0FBaEI7O0FBRU8sU0FBU0wsS0FBVCxPQUE4QztBQUFBLE1BQTdCTSxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNuRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssb0NBQVAsRUFBNkNILGNBQTdDLEVBQXFEQyxnQkFBckQsRUFBOERDLGtCQUE5RCxFQUFSLENBQVA7QUFDRDs7QUFFTSxTQUFTUCxRQUFULFFBQWlEO0FBQUEsTUFBN0JLLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ3RELFNBQU9KLFFBQVEsRUFBRUssS0FBSyx1Q0FBUCxFQUFnREgsY0FBaEQsRUFBd0RDLGdCQUF4RCxFQUFpRUMsa0JBQWpFLEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU04sUUFBVCxRQUFpRDtBQUFBLE1BQTdCSSxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUN0RCxTQUFPSixRQUFRLEVBQUVLLEtBQUssdUNBQVAsRUFBZ0RILGNBQWhELEVBQXdEQyxnQkFBeEQsRUFBaUVDLGtCQUFqRSxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNMLFFBQVQsUUFBaUQ7QUFBQSxNQUE3QkcsTUFBNkIsU0FBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDdEQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLHVDQUFQLEVBQWdESCxjQUFoRCxFQUF3REMsZ0JBQXhELEVBQWlFQyxrQkFBakUsRUFBUixDQUFQO0FBQ0QiLCJmaWxlIjoiY2F0YWxvZ2VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3AvY2F0YWxvZ2VudHJ5L3F1ZXJ5JywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVwYWdlKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3AvY2F0YWxvZ2VudHJ5L3RyZWVwYWdlJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJlZWxpc3QoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9jYXRhbG9nZW50cnkvdHJlZWxpc3QnLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmVlZGF0YSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL2NhdGFsb2dlbnRyeS90cmVlZGF0YScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn0iXX0=