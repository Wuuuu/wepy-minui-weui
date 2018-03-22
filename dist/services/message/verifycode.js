'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = send;
var request = require('./../../utils/request.js');

function send(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/verifycode/send', params: params, success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeWNvZGUuanMiXSwibmFtZXMiOlsic2VuZCIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwic3VjY2VzcyIsImNvbXBsZXRlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsSSxHQUFBQSxJO0FBRmhCLElBQU1DLFVBQVVDLFFBQVEscUJBQVIsQ0FBaEI7O0FBRU8sU0FBU0YsSUFBVCxPQUE2QztBQUFBLE1BQTdCRyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNsRCxTQUFPSixRQUFRLEVBQUVLLEtBQUssNEJBQVAsRUFBcUNILGNBQXJDLEVBQTZDQyxnQkFBN0MsRUFBc0RDLGtCQUF0RCxFQUFSLENBQVA7QUFDRCIsImZpbGUiOiJ2ZXJpZnljb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZCh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvdmVyaWZ5Y29kZS9zZW5kJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxufSJdfQ==