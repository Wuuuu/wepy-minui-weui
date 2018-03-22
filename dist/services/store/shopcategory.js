'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.treepage = treepage;
exports.treelist = treelist;
exports.treedata = treedata;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/shopcategory/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/shop/shopcategory/info', params: params, success: success, complete: complete });
}
function treepage(_ref3) {
  var params = _ref3.params,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/shop/shopcategory/treepage', params: params, success: success, complete: complete });
}
function treelist(_ref4) {
  var params = _ref4.params,
      success = _ref4.success,
      complete = _ref4.complete;

  return request({ url: '/mobileapi/shop/shopcategory/treelist', params: params, success: success, complete: complete });
}
function treedata(_ref5) {
  var params = _ref5.params,
      success = _ref5.success,
      complete = _ref5.complete;

  return request({ url: '/mobileapi/shop/shopcategory/treedata', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BjYXRlZ29yeS5qcyJdLCJuYW1lcyI6WyJxdWVyeSIsImluZm8iLCJ0cmVlcGFnZSIsInRyZWVsaXN0IiwidHJlZWRhdGEiLCJyZXF1ZXN0IiwicmVxdWlyZSIsInBhcmFtcyIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSztRQUdBQyxJLEdBQUFBLEk7UUFHQUMsUSxHQUFBQSxRO1FBR0FDLFEsR0FBQUEsUTtRQUdBQyxRLEdBQUFBLFE7QUFkaEIsSUFBTUMsVUFBVUMsUUFBUSxxQkFBUixDQUFoQjs7QUFFTyxTQUFTTixLQUFULE9BQThDO0FBQUEsTUFBN0JPLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ25ELFNBQU9KLFFBQVEsRUFBRUssS0FBSyxvQ0FBUCxFQUE2Q0gsY0FBN0MsRUFBcURDLGdCQUFyRCxFQUE4REMsa0JBQTlELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU1IsSUFBVCxRQUE2QztBQUFBLE1BQTdCTSxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUNsRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssbUNBQVAsRUFBNENILGNBQTVDLEVBQW9EQyxnQkFBcEQsRUFBNkRDLGtCQUE3RCxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNQLFFBQVQsUUFBaUQ7QUFBQSxNQUE3QkssTUFBNkIsU0FBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDdEQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLHVDQUFQLEVBQWdESCxjQUFoRCxFQUF3REMsZ0JBQXhELEVBQWlFQyxrQkFBakUsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTixRQUFULFFBQWlEO0FBQUEsTUFBN0JJLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ3RELFNBQU9KLFFBQVEsRUFBRUssS0FBSyx1Q0FBUCxFQUFnREgsY0FBaEQsRUFBd0RDLGdCQUF4RCxFQUFpRUMsa0JBQWpFLEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU0wsUUFBVCxRQUFpRDtBQUFBLE1BQTdCRyxNQUE2QixTQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsU0FBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxTQUFaQSxRQUFZOztBQUN0RCxTQUFPSixRQUFRLEVBQUVLLEtBQUssdUNBQVAsRUFBZ0RILGNBQWhELEVBQXdEQyxnQkFBeEQsRUFBaUVDLGtCQUFqRSxFQUFSLENBQVA7QUFDRCIsImZpbGUiOiJzaG9wY2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcmVxdWVzdCcpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9zaG9wY2F0ZWdvcnkvcXVlcnknLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avc2hvcGNhdGVnb3J5L2luZm8nLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmVlcGFnZSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL3Nob3BjYXRlZ29yeS90cmVlcGFnZScsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVsaXN0KHsgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3Nob3Avc2hvcGNhdGVnb3J5L3RyZWVsaXN0JywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJlZWRhdGEoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvc2hvcC9zaG9wY2F0ZWdvcnkvdHJlZWRhdGEnLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbiJdfQ==