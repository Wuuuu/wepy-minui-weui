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

  return request({ url: '/adminapi/teach/course/info', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3Nvbi5qcyJdLCJuYW1lcyI6WyJxdWVyeSIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsSyxHQUFBQSxLO0FBRmhCLElBQU1DLFVBQVVDLFFBQVEscUJBQVIsQ0FBaEI7O0FBRU8sU0FBU0YsS0FBVCxPQUE4QztBQUFBLE1BQTdCRyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNuRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssNkJBQVAsRUFBc0NILGNBQXRDLEVBQThDQyxnQkFBOUMsRUFBdURDLGtCQUF2RCxFQUFSLENBQVA7QUFDRCIsImZpbGUiOiJsZXNzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcmVxdWVzdCcpXG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeSh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9hZG1pbmFwaS90ZWFjaC9jb3Vyc2UvaW5mbycsIHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSlcbn1cbiJdfQ==