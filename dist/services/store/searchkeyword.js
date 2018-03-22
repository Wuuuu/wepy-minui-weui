'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/shop/searchkeyword/query', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGtleXdvcmQuanMiXSwibmFtZXMiOlsicXVlcnkiLCJyZXF1ZXN0IiwicmVxdWlyZSIsInBhcmFtcyIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSztBQUZoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNGLEtBQVQsT0FBOEM7QUFBQSxNQUE3QkcsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDbkQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLHFDQUFQLEVBQThDSCxjQUE5QyxFQUFzREMsZ0JBQXRELEVBQStEQyxrQkFBL0QsRUFBUixDQUFQO0FBQ0QiLCJmaWxlIjoic2VhcmNoa2V5d29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi91dGlscy9yZXF1ZXN0JylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL21vYmlsZWFwaS9zaG9wL3NlYXJjaGtleXdvcmQvcXVlcnknLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pO1xyXG59XHJcbiJdfQ==