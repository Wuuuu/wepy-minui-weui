'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var config = require('./../config/config.js');
var util = require('./util.js');

function urlEncode(params, key, encode) {
  if (params == null) return '';
  var paramsStr = '';
  var t = typeof params === 'undefined' ? 'undefined' : _typeof(params);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramsStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(params) : params);
  } else {
    for (var i in params) {
      var k = key == null ? i : key + (params instanceof Array ? '[' + i + ']' : '.' + i);
      paramsStr += urlEncode(params[i], k, encode);
    }
  }
  return paramsStr;
}

function request(_ref) {
  var url = _ref.url,
      params = _ref.params,
      data = _ref.data,
      method = _ref.method,
      _success = _ref.success,
      complete = _ref.complete;

  // 补齐url
  if (url.substr(0, 4) != 'http') url = config.rootUrl + url;
  url = url + '?' + urlEncode(params);
  // 数据
  data = JSON.stringify(data);

  var requestData = {
    url: url,
    data: data,
    method: method || 'get',
    header: {
      'content-type': 'application/json',
      '_p': config.platformNo,
      '_t': util.getToken(),
      '_a': 'false'
    },
    success: function success(result) {
      var data = result.data;
      if (data.errcode == undefined || data.errcode == 0) {
        if (_success) _success(data);
      } else {
        if (data.errcode == 1) {
          wx.showModal({
            content: data.errmsg,
            showCancel: false,
            confirmText: '知道了'
          });
        } else if (data.errcode == 2) {
          wx.showToast({
            title: data.errmsg,
            icon: 'success',
            duration: 1500
          });
        } else {
          console.log(data);
        }
      }
    },
    fail: function fail() {
      wx.showModal({
        content: '网络请求失败',
        showCancel: false,
        confirmText: '知道了'
      });
    },
    complete: complete
    // console.log(requestData)
  };wx.request(requestData);
}

module.exports = request;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSIsInV0aWwiLCJ1cmxFbmNvZGUiLCJwYXJhbXMiLCJrZXkiLCJlbmNvZGUiLCJwYXJhbXNTdHIiLCJ0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaSIsImsiLCJBcnJheSIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwic3VjY2VzcyIsImNvbXBsZXRlIiwic3Vic3RyIiwicm9vdFVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0RGF0YSIsImhlYWRlciIsInBsYXRmb3JtTm8iLCJnZXRUb2tlbiIsInJlc3VsdCIsImVycmNvZGUiLCJ1bmRlZmluZWQiLCJ3eCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJlcnJtc2ciLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLFNBQVNDLFFBQVEsa0JBQVIsQ0FBZjtBQUNBLElBQU1DLE9BQU9ELFFBQVEsZUFBUixDQUFiOztBQUVBLFNBQVNFLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxHQUEzQixFQUFnQ0MsTUFBaEMsRUFBd0M7QUFDdEMsTUFBSUYsVUFBVSxJQUFkLEVBQW9CLE9BQU8sRUFBUDtBQUNwQixNQUFJRyxZQUFZLEVBQWhCO0FBQ0EsTUFBSUMsV0FBWUosTUFBWix5Q0FBWUEsTUFBWixDQUFKO0FBQ0EsTUFBSUksS0FBSyxRQUFMLElBQWlCQSxLQUFLLFFBQXRCLElBQWtDQSxLQUFLLFNBQTNDLEVBQXNEO0FBQ3BERCxpQkFBYSxNQUFNRixHQUFOLEdBQVksR0FBWixJQUFvQkMsVUFBVSxJQUFWLElBQWtCQSxNQUFuQixHQUE2QkcsbUJBQW1CTCxNQUFuQixDQUE3QixHQUEwREEsTUFBN0UsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMLFNBQUssSUFBSU0sQ0FBVCxJQUFjTixNQUFkLEVBQXNCO0FBQ3BCLFVBQUlPLElBQUlOLE9BQU8sSUFBUCxHQUFjSyxDQUFkLEdBQWtCTCxPQUFPRCxrQkFBa0JRLEtBQWxCLEdBQTBCLE1BQU1GLENBQU4sR0FBVSxHQUFwQyxHQUEwQyxNQUFNQSxDQUF2RCxDQUExQjtBQUNBSCxtQkFBYUosVUFBVUMsT0FBT00sQ0FBUCxDQUFWLEVBQXFCQyxDQUFyQixFQUF3QkwsTUFBeEIsQ0FBYjtBQUNEO0FBQ0Y7QUFDRCxTQUFPQyxTQUFQO0FBQ0Q7O0FBRUQsU0FBU00sT0FBVCxPQUFtRTtBQUFBLE1BQWhEQyxHQUFnRCxRQUFoREEsR0FBZ0Q7QUFBQSxNQUEzQ1YsTUFBMkMsUUFBM0NBLE1BQTJDO0FBQUEsTUFBbkNXLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNqRTtBQUNBLE1BQUlKLElBQUlLLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxLQUFvQixNQUF4QixFQUNFTCxNQUFNZCxPQUFPb0IsT0FBUCxHQUFpQk4sR0FBdkI7QUFDRkEsUUFBTUEsTUFBTSxHQUFOLEdBQVlYLFVBQVVDLE1BQVYsQ0FBbEI7QUFDQTtBQUNBVyxTQUFPTSxLQUFLQyxTQUFMLENBQWVQLElBQWYsQ0FBUDs7QUFFQSxNQUFJUSxjQUFjO0FBQ2hCVCxZQURnQjtBQUVoQkMsY0FGZ0I7QUFHaEJDLFlBQVFBLFVBQVUsS0FIRjtBQUloQlEsWUFBUTtBQUNOLHNCQUFnQixrQkFEVjtBQUVOLFlBQU14QixPQUFPeUIsVUFGUDtBQUdOLFlBQU12QixLQUFLd0IsUUFBTCxFQUhBO0FBSU4sWUFBTTtBQUpBLEtBSlE7QUFVaEJULGFBQVMsaUJBQUNVLE1BQUQsRUFBWTtBQUNuQixVQUFJWixPQUFPWSxPQUFPWixJQUFsQjtBQUNBLFVBQUlBLEtBQUthLE9BQUwsSUFBZ0JDLFNBQWhCLElBQTZCZCxLQUFLYSxPQUFMLElBQWdCLENBQWpELEVBQW9EO0FBQ2xELFlBQUlYLFFBQUosRUFBYUEsU0FBUUYsSUFBUjtBQUNkLE9BRkQsTUFFTztBQUNMLFlBQUlBLEtBQUthLE9BQUwsSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJFLGFBQUdDLFNBQUgsQ0FBYTtBQUNYQyxxQkFBU2pCLEtBQUtrQixNQURIO0FBRVhDLHdCQUFZLEtBRkQ7QUFHWEMseUJBQWE7QUFIRixXQUFiO0FBS0QsU0FORCxNQU1PLElBQUlwQixLQUFLYSxPQUFMLElBQWdCLENBQXBCLEVBQXVCO0FBQzVCRSxhQUFHTSxTQUFILENBQWE7QUFDWEMsbUJBQU90QixLQUFLa0IsTUFERDtBQUVYSyxrQkFBTSxTQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtELFNBTk0sTUFNQTtBQUNMQyxrQkFBUUMsR0FBUixDQUFZMUIsSUFBWjtBQUNEO0FBQ0Y7QUFDRixLQS9CZTtBQWdDaEIyQixVQUFNLGdCQUFNO0FBQ1ZaLFNBQUdDLFNBQUgsQ0FBYTtBQUNYQyxpQkFBUyxRQURFO0FBRVhFLG9CQUFZLEtBRkQ7QUFHWEMscUJBQWE7QUFIRixPQUFiO0FBS0QsS0F0Q2U7QUF1Q2hCakI7QUFFRjtBQXpDa0IsR0FBbEIsQ0EwQ0FZLEdBQUdqQixPQUFILENBQVdVLFdBQVg7QUFDRDs7QUFFRG9CLE9BQU9DLE9BQVAsR0FBaUIvQixPQUFqQiIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZycpXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbCcpXG5cbmZ1bmN0aW9uIHVybEVuY29kZShwYXJhbXMsIGtleSwgZW5jb2RlKSB7XG4gIGlmIChwYXJhbXMgPT0gbnVsbCkgcmV0dXJuICcnXG4gIHZhciBwYXJhbXNTdHIgPSAnJ1xuICB2YXIgdCA9IHR5cGVvZiAocGFyYW1zKVxuICBpZiAodCA9PSAnc3RyaW5nJyB8fCB0ID09ICdudW1iZXInIHx8IHQgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgcGFyYW1zU3RyICs9ICcmJyArIGtleSArICc9JyArICgoZW5jb2RlID09IG51bGwgfHwgZW5jb2RlKSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXMpIDogcGFyYW1zKVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgaW4gcGFyYW1zKSB7XG4gICAgICB2YXIgayA9IGtleSA9PSBudWxsID8gaSA6IGtleSArIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSA/ICdbJyArIGkgKyAnXScgOiAnLicgKyBpKVxuICAgICAgcGFyYW1zU3RyICs9IHVybEVuY29kZShwYXJhbXNbaV0sIGssIGVuY29kZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmFtc1N0clxufVxuXG5mdW5jdGlvbiByZXF1ZXN0KHsgdXJsLCBwYXJhbXMsIGRhdGEsIG1ldGhvZCwgc3VjY2VzcywgY29tcGxldGUgfSkge1xuICAvLyDooaXpvZB1cmxcbiAgaWYgKHVybC5zdWJzdHIoMCwgNCkgIT0gJ2h0dHAnKVxuICAgIHVybCA9IGNvbmZpZy5yb290VXJsICsgdXJsXG4gIHVybCA9IHVybCArICc/JyArIHVybEVuY29kZShwYXJhbXMpXG4gIC8vIOaVsOaNrlxuICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuICBsZXQgcmVxdWVzdERhdGEgPSB7XG4gICAgdXJsLFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ2dldCcsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ19wJzogY29uZmlnLnBsYXRmb3JtTm8sXG4gICAgICAnX3QnOiB1dGlsLmdldFRva2VuKCksXG4gICAgICAnX2EnOiAnZmFsc2UnXG4gICAgfSxcbiAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHJlc3VsdC5kYXRhXG4gICAgICBpZiAoZGF0YS5lcnJjb2RlID09IHVuZGVmaW5lZCB8fCBkYXRhLmVycmNvZGUgPT0gMCkge1xuICAgICAgICBpZiAoc3VjY2Vzcykgc3VjY2VzcyhkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGEuZXJyY29kZSA9PSAxKSB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuZXJybXNnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXJyY29kZSA9PSAyKSB7IFxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogZGF0YS5lcnJtc2csXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZmFpbDogKCkgPT4ge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgY29udGVudDogJ+e9kee7nOivt+axguWksei0pScsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb21wbGV0ZVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKHJlcXVlc3REYXRhKVxuICB3eC5yZXF1ZXN0KHJlcXVlc3REYXRhKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3RcbiJdfQ==