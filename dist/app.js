'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _config = require('./config/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.config = {
      pages: ['pages/lessons', 'pages/index', 'pages/schedule', 'pages/mine', 'pages/school/school', 'pages/teacher/teacher', 'pages/teacher/teacherDetail', 'pages/lessonDetail/lessonDetail', 'pages/lessonDetail/appointment', 'pages/lessonDetail/order', 'pages/scheduleDetail/courseEvaluation', 'pages/scheduleDetail/scheduleDetail', 'pages/mine/myMessageDetail', 'pages/mine/myMessage', 'pages/mine/myCourses', 'pages/mine/myOrder', 'pages/mine/about', 'pages/login/login', 'pages/login/loginByTel', 'pages/login/changePwd'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#999999',
        selectedColor: '#dd5044',
        backgroundColor: '#fff',
        list: [{
          pagePath: 'pages/index',
          iconPath: 'assets/icon/iconfont-home.png',
          selectedIconPath: 'assets/icon/iconfont-home-active.png',
          text: '首页'
        }, {
          pagePath: 'pages/lessons',
          iconPath: 'assets/icon/iconfont-lesson.png',
          selectedIconPath: 'assets/icon/iconfont-lesson-active.png',
          text: '课程'
        }, {
          pagePath: 'pages/schedule',
          iconPath: 'assets/icon/iconfont-teacher.png',
          selectedIconPath: 'assets/icon/iconfont-teacher-active.png',
          text: '课表'
        }, {
          pagePath: 'pages/mine',
          iconPath: 'assets/icon/iconfont-mine.png',
          selectedIconPath: 'assets/icon/iconfont-mine-active.png',
          text: '我的'
        }]
      }
      // this.$parent.globalData 获取全局变量
    };
    _this.globalData = {
      userInfo: null
      // myname: 'wuyaoke'
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('程序启动');
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'auth',
    value: function auth() {
      var token = _config2.default.getToken();
      if (!token) {
        this.showAuthFailedModal();
      } else {
        // let unionuser = config.getUnionuser();
        // if (unionuser.type == "student") {
        // }
        return true;
      }
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
          alert(res);
        }
      });
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwiY29uc29sZSIsImxvZyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0b2tlbiIsImdldFRva2VuIiwic2hvd0F1dGhGYWlsZWRNb2RhbCIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFsZXJ0IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWdFRSxvQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBN0RmQSxNQTZEZSxHQTdETjtBQUNQQyxhQUFPLENBQ0wsZUFESyxFQUVMLGFBRkssRUFHTCxnQkFISyxFQUlMLFlBSkssRUFLTCxxQkFMSyxFQU1MLHVCQU5LLEVBT0wsNkJBUEssRUFRTCxpQ0FSSyxFQVNMLGdDQVRLLEVBVUwsMEJBVkssRUFXTCx1Q0FYSyxFQVlMLHFDQVpLLEVBYUwsNEJBYkssRUFjTCxzQkFkSyxFQWVMLHNCQWZLLEVBZ0JMLG9CQWhCSyxFQWlCTCxrQkFqQkssRUFrQkwsbUJBbEJLLEVBbUJMLHdCQW5CSyxFQW9CTCx1QkFwQkssQ0FEQTtBQXVCUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQXZCRDtBQTZCUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyx5QkFBaUIsTUFIWDtBQUlOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsYUFETDtBQUVMQyxvQkFBVSwrQkFGTDtBQUdMQyw0QkFBa0Isc0NBSGI7QUFJTEMsZ0JBQU07QUFKRCxTQUFELEVBS0g7QUFDREgsb0JBQVUsZUFEVDtBQUVEQyxvQkFBVSxpQ0FGVDtBQUdEQyw0QkFBa0Isd0NBSGpCO0FBSURDLGdCQUFNO0FBSkwsU0FMRyxFQVVIO0FBQ0RILG9CQUFVLGdCQURUO0FBRURDLG9CQUFVLGtDQUZUO0FBR0RDLDRCQUFrQix5Q0FIakI7QUFJREMsZ0JBQU07QUFKTCxTQVZHLEVBZUg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxvQkFBVSwrQkFGVDtBQUdEQyw0QkFBa0Isc0NBSGpCO0FBSURDLGdCQUFNO0FBSkwsU0FmRztBQUpBO0FBMkJWO0FBeERTLEtBNkRNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBQ1Y7QUFGVyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7OzsrQkFFVTtBQUNUQyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7OzsyQkFDTztBQUNOLFVBQUlLLFFBQVEsaUJBQU9DLFFBQVAsRUFBWjtBQUNBLFVBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsYUFBS0UsbUJBQUw7QUFDRCxPQUZELE1BRU87QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFPLElBQVA7QUFDRDtBQUNGOzs7Z0NBQ1dDLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtjLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZ0IsSUFBSWhCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSSxJQUFJaEIsUUFBUCxDQUFOO0FBQ0FpQixnQkFBTUQsR0FBTjtBQUNEO0FBTGMsT0FBakI7QUFPRDs7OztFQXJHMEIsZUFBS0UsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9sZXNzb25zJyxcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL3NjaGVkdWxlJyxcclxuICAgICAgJ3BhZ2VzL21pbmUnLFxyXG4gICAgICAncGFnZXMvc2Nob29sL3NjaG9vbCcsXHJcbiAgICAgICdwYWdlcy90ZWFjaGVyL3RlYWNoZXInLFxyXG4gICAgICAncGFnZXMvdGVhY2hlci90ZWFjaGVyRGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2xlc3NvbkRldGFpbC9sZXNzb25EZXRhaWwnLFxyXG4gICAgICAncGFnZXMvbGVzc29uRGV0YWlsL2FwcG9pbnRtZW50JyxcclxuICAgICAgJ3BhZ2VzL2xlc3NvbkRldGFpbC9vcmRlcicsXHJcbiAgICAgICdwYWdlcy9zY2hlZHVsZURldGFpbC9jb3Vyc2VFdmFsdWF0aW9uJyxcclxuICAgICAgJ3BhZ2VzL3NjaGVkdWxlRGV0YWlsL3NjaGVkdWxlRGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL21pbmUvbXlNZXNzYWdlRGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL21pbmUvbXlNZXNzYWdlJyxcclxuICAgICAgJ3BhZ2VzL21pbmUvbXlDb3Vyc2VzJyxcclxuICAgICAgJ3BhZ2VzL21pbmUvbXlPcmRlcicsXHJcbiAgICAgICdwYWdlcy9taW5lL2Fib3V0JyxcclxuICAgICAgJ3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgJ3BhZ2VzL2xvZ2luL2xvZ2luQnlUZWwnLFxyXG4gICAgICAncGFnZXMvbG9naW4vY2hhbmdlUHdkJyxcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyM5OTk5OTknLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnI2RkNTA0NCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ljb24vaWNvbmZvbnQtaG9tZS5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdhc3NldHMvaWNvbi9pY29uZm9udC1ob21lLWFjdGl2ZS5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfpppbpobUnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2xlc3NvbnMnLFxyXG4gICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ljb24vaWNvbmZvbnQtbGVzc29uLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pY29uL2ljb25mb250LWxlc3Nvbi1hY3RpdmUucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6K++56iLJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zY2hlZHVsZScsXHJcbiAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaWNvbi9pY29uZm9udC10ZWFjaGVyLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pY29uL2ljb25mb250LXRlYWNoZXItYWN0aXZlLnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+ivvuihqCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWluZScsXHJcbiAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaWNvbi9pY29uZm9udC1taW5lLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pY29uL2ljb25mb250LW1pbmUtYWN0aXZlLnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEg6I635Y+W5YWo5bGA5Y+Y6YePXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgICAvLyBteW5hbWU6ICd3dXlhb2tlJ1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCfnqIvluo/lkK/liqgnKVxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG4gIGF1dGggKCkge1xyXG4gICAgbGV0IHRva2VuID0gY29uZmlnLmdldFRva2VuKClcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgdGhpcy5zaG93QXV0aEZhaWxlZE1vZGFsKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGxldCB1bmlvbnVzZXIgPSBjb25maWcuZ2V0VW5pb251c2VyKCk7XHJcbiAgICAgIC8vIGlmICh1bmlvbnVzZXIudHlwZSA9PSBcInN0dWRlbnRcIikge1xyXG4gICAgICAvLyB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgICBhbGVydChyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==