'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveuser = saveuser;
var request = require('./../../utils/request.js');

function saveuser(_ref) {
  var params = _ref.params,
      data = _ref.data,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/wxgzh/xcx/saveuser', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhjeC5qcyJdLCJuYW1lcyI6WyJzYXZldXNlciIsInJlcXVlc3QiLCJyZXF1aXJlIiwicGFyYW1zIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInVybCIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLFEsR0FBQUEsUTtBQUZoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNGLFFBQVQsT0FBdUQ7QUFBQSxNQUFuQ0csTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQzVELFNBQU9MLFFBQVEsRUFBRU0sS0FBSyxxQkFBUCxFQUE4QkosY0FBOUIsRUFBc0NDLFVBQXRDLEVBQTRDSSxRQUFRLE1BQXBELEVBQTRESCxnQkFBNUQsRUFBcUVDLGtCQUFyRSxFQUFSLENBQVA7QUFDRCIsImZpbGUiOiJ4Y3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcmVxdWVzdCcpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZXVzZXIoeyBwYXJhbXMsIGRhdGEsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy93eGd6aC94Y3gvc2F2ZXVzZXInLCBwYXJhbXMsIGRhdGEsIG1ldGhvZDogJ3Bvc3QnLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxyXG59XHJcbiJdfQ==