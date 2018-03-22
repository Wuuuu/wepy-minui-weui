'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveuser = saveuser;
exports.verifycode = verifycode;
exports.resetpassword = resetpassword;
var request = require('./../../utils/request.js');

function saveuser(_ref) {
  var params = _ref.params,
      data = _ref.data,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/mobileapi/auth/login', params: params, data: data, method: 'post', success: success, complete: complete });
}
function verifycode(_ref2) {
  var params = _ref2.params,
      data = _ref2.data,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/mobileapi/verifycode/send', params: params, success: success, complete: complete });
}
function resetpassword(_ref3) {
  var params = _ref3.params,
      data = _ref3.data,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/mobileapi/auth/resetpassword', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInNhdmV1c2VyIiwidmVyaWZ5Y29kZSIsInJlc2V0cGFzc3dvcmQiLCJyZXF1ZXN0IiwicmVxdWlyZSIsInBhcmFtcyIsImRhdGEiLCJzdWNjZXNzIiwiY29tcGxldGUiLCJ1cmwiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxRLEdBQUFBLFE7UUFHQUMsVSxHQUFBQSxVO1FBR0FDLGEsR0FBQUEsYTtBQVJoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNKLFFBQVQsT0FBdUQ7QUFBQSxNQUFuQ0ssTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQzVELFNBQU9MLFFBQVEsRUFBRU0sS0FBSyx1QkFBUCxFQUFnQ0osY0FBaEMsRUFBd0NDLFVBQXhDLEVBQThDSSxRQUFRLE1BQXRELEVBQThESCxnQkFBOUQsRUFBdUVDLGtCQUF2RSxFQUFSLENBQVA7QUFDRDtBQUNNLFNBQVNQLFVBQVQsUUFBeUQ7QUFBQSxNQUFuQ0ksTUFBbUMsU0FBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLElBQTJCLFNBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQzlELFNBQU9MLFFBQVEsRUFBRU0sS0FBSyw0QkFBUCxFQUFzQ0osY0FBdEMsRUFBOENFLGdCQUE5QyxFQUF1REMsa0JBQXZELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU04sYUFBVCxRQUE0RDtBQUFBLE1BQW5DRyxNQUFtQyxTQUFuQ0EsTUFBbUM7QUFBQSxNQUEzQkMsSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJDLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDakUsU0FBT0wsUUFBUSxFQUFFTSxLQUFLLCtCQUFQLEVBQXdDSixjQUF4QyxFQUFnREMsVUFBaEQsRUFBc0RJLFFBQVEsTUFBOUQsRUFBc0VILGdCQUF0RSxFQUErRUMsa0JBQS9FLEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZXVzZXIoeyBwYXJhbXMsIGRhdGEsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL2F1dGgvbG9naW4nLCBwYXJhbXMsIGRhdGEsIG1ldGhvZDogJ3Bvc3QnLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeWNvZGUoeyBwYXJhbXMsIGRhdGEsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvbW9iaWxlYXBpL3ZlcmlmeWNvZGUvc2VuZCcsICBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXRwYXNzd29yZCh7IHBhcmFtcywgZGF0YSwgc3VjY2VzcywgY29tcGxldGUgfSkge1xuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9tb2JpbGVhcGkvYXV0aC9yZXNldHBhc3N3b3JkJywgcGFyYW1zLCBkYXRhLCBtZXRob2Q6ICdwb3N0Jywgc3VjY2VzcywgY29tcGxldGUgfSlcbn0iXX0=