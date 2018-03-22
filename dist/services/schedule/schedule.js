'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.info = info;
exports.addcomment = addcomment;
var request = require('./../../utils/request.js');

function query(_ref) {
  var params = _ref.params,
      success = _ref.success,
      complete = _ref.complete;

  return request({ url: '/adminapi/teach/schedule/query', params: params, success: success, complete: complete });
}
function info(_ref2) {
  var params = _ref2.params,
      success = _ref2.success,
      complete = _ref2.complete;

  return request({ url: '/adminapi/teach/schedule/info', params: params, success: success, complete: complete });
}
function addcomment(_ref3) {
  var params = _ref3.params,
      data = _ref3.data,
      success = _ref3.success,
      complete = _ref3.complete;

  return request({ url: '/adminapi/teach/comment/add', params: params, data: data, method: 'post', success: success, complete: complete });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmpzIl0sIm5hbWVzIjpbInF1ZXJ5IiwiaW5mbyIsImFkZGNvbW1lbnQiLCJyZXF1ZXN0IiwicmVxdWlyZSIsInBhcmFtcyIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInVybCIsImRhdGEiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxLLEdBQUFBLEs7UUFHQUMsSSxHQUFBQSxJO1FBR0FDLFUsR0FBQUEsVTtBQVJoQixJQUFNQyxVQUFVQyxRQUFRLHFCQUFSLENBQWhCOztBQUVPLFNBQVNKLEtBQVQsT0FBOEM7QUFBQSxNQUE3QkssTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDbkQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLGdDQUFQLEVBQXlDSCxjQUF6QyxFQUFpREMsZ0JBQWpELEVBQTBEQyxrQkFBMUQsRUFBUixDQUFQO0FBQ0Q7QUFDTSxTQUFTTixJQUFULFFBQTZDO0FBQUEsTUFBN0JJLE1BQTZCLFNBQTdCQSxNQUE2QjtBQUFBLE1BQXJCQyxPQUFxQixTQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQ2xELFNBQU9KLFFBQVEsRUFBRUssS0FBSywrQkFBUCxFQUF3Q0gsY0FBeEMsRUFBZ0RDLGdCQUFoRCxFQUF5REMsa0JBQXpELEVBQVIsQ0FBUDtBQUNEO0FBQ00sU0FBU0wsVUFBVCxRQUF5RDtBQUFBLE1BQW5DRyxNQUFtQyxTQUFuQ0EsTUFBbUM7QUFBQSxNQUEzQkksSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJILE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFDOUQsU0FBT0osUUFBUSxFQUFFSyxLQUFLLDZCQUFQLEVBQXNDSCxjQUF0QyxFQUE4Q0ksVUFBOUMsRUFBb0RDLFFBQVEsTUFBNUQsRUFBb0VKLGdCQUFwRSxFQUE2RUMsa0JBQTdFLEVBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6InNjaGVkdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QnKVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoeyBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvYWRtaW5hcGkvdGVhY2gvc2NoZWR1bGUvcXVlcnknLCBwYXJhbXMsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gaW5mbyh7IHBhcmFtcywgc3VjY2VzcywgY29tcGxldGUgfSkge1xuICByZXR1cm4gcmVxdWVzdCh7IHVybDogJy9hZG1pbmFwaS90ZWFjaC9zY2hlZHVsZS9pbmZvJywgcGFyYW1zLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZGNvbW1lbnQoeyBwYXJhbXMsIGRhdGEsIHN1Y2Nlc3MsIGNvbXBsZXRlIH0pIHtcbiAgcmV0dXJuIHJlcXVlc3QoeyB1cmw6ICcvYWRtaW5hcGkvdGVhY2gvY29tbWVudC9hZGQnLCBwYXJhbXMsIGRhdGEsIG1ldGhvZDogJ3Bvc3QnLCBzdWNjZXNzLCBjb21wbGV0ZSB9KVxufVxuIl19