'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var config = require('./../config/config.js');

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
      '_t': config.getToken(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSIsInVybEVuY29kZSIsInBhcmFtcyIsImtleSIsImVuY29kZSIsInBhcmFtc1N0ciIsInQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpIiwiayIsIkFycmF5IiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJtZXRob2QiLCJzdWNjZXNzIiwiY29tcGxldGUiLCJzdWJzdHIiLCJyb290VXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3REYXRhIiwiaGVhZGVyIiwicGxhdGZvcm1ObyIsImdldFRva2VuIiwicmVzdWx0IiwiZXJyY29kZSIsInVuZGVmaW5lZCIsInd4Iiwic2hvd01vZGFsIiwiY29udGVudCIsImVycm1zZyIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsU0FBU0MsUUFBUSxrQkFBUixDQUFmOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxHQUEzQixFQUFnQ0MsTUFBaEMsRUFBd0M7QUFDdEMsTUFBSUYsVUFBVSxJQUFkLEVBQW9CLE9BQU8sRUFBUDtBQUNwQixNQUFJRyxZQUFZLEVBQWhCO0FBQ0EsTUFBSUMsV0FBWUosTUFBWix5Q0FBWUEsTUFBWixDQUFKO0FBQ0EsTUFBSUksS0FBSyxRQUFMLElBQWlCQSxLQUFLLFFBQXRCLElBQWtDQSxLQUFLLFNBQTNDLEVBQXNEO0FBQ3BERCxpQkFBYSxNQUFNRixHQUFOLEdBQVksR0FBWixJQUFvQkMsVUFBVSxJQUFWLElBQWtCQSxNQUFuQixHQUE2QkcsbUJBQW1CTCxNQUFuQixDQUE3QixHQUEwREEsTUFBN0UsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMLFNBQUssSUFBSU0sQ0FBVCxJQUFjTixNQUFkLEVBQXNCO0FBQ3BCLFVBQUlPLElBQUlOLE9BQU8sSUFBUCxHQUFjSyxDQUFkLEdBQWtCTCxPQUFPRCxrQkFBa0JRLEtBQWxCLEdBQTBCLE1BQU1GLENBQU4sR0FBVSxHQUFwQyxHQUEwQyxNQUFNQSxDQUF2RCxDQUExQjtBQUNBSCxtQkFBYUosVUFBVUMsT0FBT00sQ0FBUCxDQUFWLEVBQXFCQyxDQUFyQixFQUF3QkwsTUFBeEIsQ0FBYjtBQUNEO0FBQ0Y7QUFDRCxTQUFPQyxTQUFQO0FBQ0Q7O0FBRUQsU0FBU00sT0FBVCxPQUFtRTtBQUFBLE1BQWhEQyxHQUFnRCxRQUFoREEsR0FBZ0Q7QUFBQSxNQUEzQ1YsTUFBMkMsUUFBM0NBLE1BQTJDO0FBQUEsTUFBbkNXLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUNqRTtBQUNBLE1BQUlKLElBQUlLLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxLQUFvQixNQUF4QixFQUNFTCxNQUFNYixPQUFPbUIsT0FBUCxHQUFpQk4sR0FBdkI7QUFDRkEsUUFBTUEsTUFBTSxHQUFOLEdBQVlYLFVBQVVDLE1BQVYsQ0FBbEI7QUFDQTtBQUNBVyxTQUFPTSxLQUFLQyxTQUFMLENBQWVQLElBQWYsQ0FBUDs7QUFFQSxNQUFJUSxjQUFjO0FBQ2hCVCxZQURnQjtBQUVoQkMsY0FGZ0I7QUFHaEJDLFlBQVFBLFVBQVUsS0FIRjtBQUloQlEsWUFBUTtBQUNOLHNCQUFnQixrQkFEVjtBQUVOLFlBQU12QixPQUFPd0IsVUFGUDtBQUdOLFlBQU14QixPQUFPeUIsUUFBUCxFQUhBO0FBSU4sWUFBTTtBQUpBLEtBSlE7QUFVaEJULGFBQVMsaUJBQUNVLE1BQUQsRUFBWTtBQUNuQixVQUFJWixPQUFPWSxPQUFPWixJQUFsQjtBQUNBLFVBQUlBLEtBQUthLE9BQUwsSUFBZ0JDLFNBQWhCLElBQTZCZCxLQUFLYSxPQUFMLElBQWdCLENBQWpELEVBQW9EO0FBQ2xELFlBQUlYLFFBQUosRUFBYUEsU0FBUUYsSUFBUjtBQUNkLE9BRkQsTUFFTztBQUNMLFlBQUlBLEtBQUthLE9BQUwsSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJFLGFBQUdDLFNBQUgsQ0FBYTtBQUNYQyxxQkFBU2pCLEtBQUtrQixNQURIO0FBRVhDLHdCQUFZLEtBRkQ7QUFHWEMseUJBQWE7QUFIRixXQUFiO0FBS0QsU0FORCxNQU1PLElBQUlwQixLQUFLYSxPQUFMLElBQWdCLENBQXBCLEVBQXVCO0FBQzVCRSxhQUFHTSxTQUFILENBQWE7QUFDWEMsbUJBQU90QixLQUFLa0IsTUFERDtBQUVYSyxrQkFBTSxTQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtELFNBTk0sTUFNQTtBQUNMQyxrQkFBUUMsR0FBUixDQUFZMUIsSUFBWjtBQUNEO0FBQ0Y7QUFDRixLQS9CZTtBQWdDaEIyQixVQUFNLGdCQUFNO0FBQ1ZaLFNBQUdDLFNBQUgsQ0FBYTtBQUNYQyxpQkFBUyxRQURFO0FBRVhFLG9CQUFZLEtBRkQ7QUFHWEMscUJBQWE7QUFIRixPQUFiO0FBS0QsS0F0Q2U7QUF1Q2hCakI7QUFFRjtBQXpDa0IsR0FBbEIsQ0EwQ0FZLEdBQUdqQixPQUFILENBQVdVLFdBQVg7QUFDRDs7QUFFRG9CLE9BQU9DLE9BQVAsR0FBaUIvQixPQUFqQiIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZycpXG5cbmZ1bmN0aW9uIHVybEVuY29kZShwYXJhbXMsIGtleSwgZW5jb2RlKSB7XG4gIGlmIChwYXJhbXMgPT0gbnVsbCkgcmV0dXJuICcnXG4gIHZhciBwYXJhbXNTdHIgPSAnJ1xuICB2YXIgdCA9IHR5cGVvZiAocGFyYW1zKVxuICBpZiAodCA9PSAnc3RyaW5nJyB8fCB0ID09ICdudW1iZXInIHx8IHQgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgcGFyYW1zU3RyICs9ICcmJyArIGtleSArICc9JyArICgoZW5jb2RlID09IG51bGwgfHwgZW5jb2RlKSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXMpIDogcGFyYW1zKVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgaW4gcGFyYW1zKSB7XG4gICAgICB2YXIgayA9IGtleSA9PSBudWxsID8gaSA6IGtleSArIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSA/ICdbJyArIGkgKyAnXScgOiAnLicgKyBpKVxuICAgICAgcGFyYW1zU3RyICs9IHVybEVuY29kZShwYXJhbXNbaV0sIGssIGVuY29kZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmFtc1N0clxufVxuXG5mdW5jdGlvbiByZXF1ZXN0KHsgdXJsLCBwYXJhbXMsIGRhdGEsIG1ldGhvZCwgc3VjY2VzcywgY29tcGxldGUgfSkge1xuICAvLyDooaXpvZB1cmxcbiAgaWYgKHVybC5zdWJzdHIoMCwgNCkgIT0gJ2h0dHAnKVxuICAgIHVybCA9IGNvbmZpZy5yb290VXJsICsgdXJsXG4gIHVybCA9IHVybCArICc/JyArIHVybEVuY29kZShwYXJhbXMpXG4gIC8vIOaVsOaNrlxuICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblxuICBsZXQgcmVxdWVzdERhdGEgPSB7XG4gICAgdXJsLFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ2dldCcsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ19wJzogY29uZmlnLnBsYXRmb3JtTm8sXG4gICAgICAnX3QnOiBjb25maWcuZ2V0VG9rZW4oKSxcbiAgICAgICdfYSc6ICdmYWxzZSdcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gcmVzdWx0LmRhdGFcbiAgICAgIGlmIChkYXRhLmVycmNvZGUgPT0gdW5kZWZpbmVkIHx8IGRhdGEuZXJyY29kZSA9PSAwKSB7XG4gICAgICAgIGlmIChzdWNjZXNzKSBzdWNjZXNzKGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YS5lcnJjb2RlID09IDEpIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgY29udGVudDogZGF0YS5lcnJtc2csXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5lcnJjb2RlID09IDIpIHsgXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBkYXRhLmVycm1zZyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWlsOiAoKSA9PiB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICBjb250ZW50OiAn572R57uc6K+35rGC5aSx6LSlJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNvbXBsZXRlXG4gIH1cbiAgLy8gY29uc29sZS5sb2cocmVxdWVzdERhdGEpXG4gIHd4LnJlcXVlc3QocmVxdWVzdERhdGEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdFxuIl19