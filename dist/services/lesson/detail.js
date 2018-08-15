'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.submit = submit;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/adminapi/teach/course/info', params: params, success: success, complete: complete });
}
function submit(_ref2) {
  var params = _ref2.params,
      data = _ref2.data,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/adminapi/teach/preview/book', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJxdWVyeSIsInN1Ym1pdCIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIiwiZGF0YSIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSztRQUdBQyxNLEdBQUFBLE07QUFMaEIsSUFBTUMsVUFBVUMsUUFBUSxxQkFBUixDQUFoQjs7QUFFTyxTQUFTSCxLQUFULE9BQThDO0FBQUEsTUFBN0JJLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ25ELFNBQU9KLFFBQVEsRUFBRUssS0FBSyw2QkFBUCxFQUFzQ0gsY0FBdEMsRUFBOENDLGdCQUE5QyxFQUF1REMsa0JBQXZELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU0wsTUFBVCxRQUFtRDtBQUFBLE1BQWxDRyxNQUFrQyxTQUFsQ0EsTUFBa0M7QUFBQSxNQUExQkksSUFBMEIsU0FBMUJBLElBQTBCO0FBQUEsTUFBcEJILE9BQW9CLFNBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLFFBQVcsU0FBWEEsUUFBVzs7QUFDeEQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLDhCQUFQLEVBQXVDSCxjQUF2QyxFQUErQ0ksVUFBL0MsRUFBcURDLFFBQVEsTUFBN0QsRUFBcUVKLGdCQUFyRSxFQUE4RUMsa0JBQTlFLEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi91dGlscy9yZXF1ZXN0JylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL2FkbWluYXBpL3RlYWNoL2NvdXJzZS9pbmZvJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXQoe3BhcmFtcywgZGF0YSwgc3VjY2VzcywgY29tcGxldGV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvYWRtaW5hcGkvdGVhY2gvcHJldmlldy9ib29rJywgcGFyYW1zLCBkYXRhLCBtZXRob2Q6ICdwb3N0Jywgc3VjY2VzcywgY29tcGxldGUgfSlcclxufVxyXG4iXX0=