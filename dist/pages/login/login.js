'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _underscore = require('./../../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

var _config = require('./../../config/config.js');

var _config2 = _interopRequireDefault(_config);

var _login = require('./../../services/login/login.js');

var services_login_login = _interopRequireWildcard(_login);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录界面',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-toast': '../../packages/@minui/wxc-toast/dist/index'
      }
    }, _this.components = {}, _this.data = {
      errors: {},
      entity: {
        userName: null,
        password: null,
        client: '小程序',
        userType: 'student' // 'student.code'
      },
      btnChangeColor: '#999',
      confirmLoading: false,
      errText: '',
      toastShow: false
    }, _this.methods = {
      bindChange: function bindChange(e) {
        var self = this;
        var entity = self.data.entity;
        var field = e.currentTarget.dataset.field;
        var value = e.detail.value;

        entity[field] = value;

        if (value) {
          self.btnChangeColor = '#dd5044';
          self.$apply();
        } else {
          self.btnChangeColor = '#999';
          self.$apply();
        }

        self.entity = entity;
        self.$apply();
      },
      handletoPage: function handletoPage(page) {
        if (page == 'byTel') this.$navigate('/pages/login/loginByTel');else this.$navigate('/pages/login/changePwd');
      },
      handleLogin: function handleLogin() {
        var self = this;
        var _self$data = self.data,
            entity = _self$data.entity,
            confirmLoading = _self$data.confirmLoading;
        // if (!app.auth()) {
        //   return
        // }

        if (confirmLoading) return;

        self.confirmLoading = true;
        // wx.showLoading({
        //   title: '加载中'
        // })

        self.checkEntity(entity, null, function (errors) {
          if (!_underscore2.default.isEmpty(errors)) {
            var errs = [];
            for (var index in errors) {
              errs.push(errors[index]);
            }
            // wx.showToast({ title: errs[0], duration: 1500 })
            self.errText = errs[0];
            // console.log(errs[0])
            self.toastShow = true;
            self.confirmLoading = false;

            setTimeout(function () {
              self.toastShow = false;
              self.$apply();
            }, 1000);

            self.$apply();
            wx.hideLoading();
            return;
          }

          services_login_login.saveuser({
            data: _extends({}, entity),
            success: function success(res) {
              var token = res.token,
                  unionuser = res.unionuser;

              _config2.default.setToken(token);
              _config2.default.setUnionuser(unionuser);
              self.$parent.globalData.unionuser = unionuser;
              console.log('回调res', res);
              // console.log(self.$parent.globalData)
            },
            complete: function complete() {
              self.confirmLoading = false;
              self.$apply();
              wx.hideLoading();
              wx.switchTab({
                url: '/pages/mine'
              });
            }
          });
        });
        self.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'checkEntity',
    value: function checkEntity(entity, field, callback) {
      var errors = {};
      if (_underscore2.default.isEmpty(entity.userName)) {
        errors.userName = "手机号不能为空";
      }
      if (_underscore2.default.isEmpty(entity.password)) {
        errors.password = "密码不能为空";
      }
      callback(errors);
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzX2xvZ2luX2xvZ2luIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImVycm9ycyIsImVudGl0eSIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJjbGllbnQiLCJ1c2VyVHlwZSIsImJ0bkNoYW5nZUNvbG9yIiwiY29uZmlybUxvYWRpbmciLCJlcnJUZXh0IiwidG9hc3RTaG93IiwibWV0aG9kcyIsImJpbmRDaGFuZ2UiLCJlIiwic2VsZiIsImZpZWxkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsImRldGFpbCIsIiRhcHBseSIsImhhbmRsZXRvUGFnZSIsInBhZ2UiLCIkbmF2aWdhdGUiLCJoYW5kbGVMb2dpbiIsImNoZWNrRW50aXR5IiwiaXNFbXB0eSIsImVycnMiLCJpbmRleCIsInB1c2giLCJzZXRUaW1lb3V0Iiwid3giLCJoaWRlTG9hZGluZyIsInNhdmV1c2VyIiwic3VjY2VzcyIsInJlcyIsInRva2VuIiwidW5pb251c2VyIiwic2V0VG9rZW4iLCJzZXRVbmlvbnVzZXIiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsInN3aXRjaFRhYiIsInVybCIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0lBQVlBLG9COzs7Ozs7Ozs7Ozs7SUFFU0MsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyxvQ0FBOEIsU0FIdkI7QUFJUEMsdUJBQWlCO0FBQ2YscUJBQWE7QUFERTtBQUpWLEssUUFRVEMs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TTtBQUNkOUIsbUJBQUtOLGNBQUwsR0FBc0IsS0FBdEI7QUFDQU0sbUJBQUtNLE1BQUw7QUFDQVcsaUJBQUdDLFdBQUg7QUFDQUQsaUJBQUdjLFNBQUgsQ0FBYTtBQUNYQyxxQkFBSztBQURNLGVBQWI7QUFHRDtBQWpCMkIsV0FBOUI7QUFtQkQsU0F6Q0Q7QUEwQ0FoQyxhQUFLTSxNQUFMO0FBQ0Q7QUFqRk8sSzs7Ozs7NkJBbUZBLENBQ1Q7OztnQ0FDWWxCLE0sRUFBUWEsSyxFQUFPZ0MsUSxFQUFVO0FBQ3BDLFVBQUk5QyxTQUFTLEVBQWI7QUFDQSxVQUFJLHFCQUFFeUIsT0FBRixDQUFVeEIsT0FBT0MsUUFBakIsQ0FBSixFQUFnQztBQUM5QkYsZUFBT0UsUUFBUCxHQUFrQixTQUFsQjtBQUNEO0FBQ0QsVUFBSSxxQkFBRXVCLE9BQUYsQ0FBVXhCLE9BQU9FLFFBQWpCLENBQUosRUFBZ0M7QUFDOUJILGVBQU9HLFFBQVAsR0FBa0IsUUFBbEI7QUFDRDtBQUNEMkMsZUFBUzlDLE1BQVQ7QUFDRDs7OztFQXRIZ0MsZUFBS3FCLEk7O2tCQUFuQjdCLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcblxuICBpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnXG4gIGltcG9ydCAqIGFzIHNlcnZpY2VzX2xvZ2luX2xvZ2luIGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2luL2xvZ2luJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2V55WM6Z2iJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2RkNTA0NCcsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy10b2FzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRvYXN0L2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgZW50aXR5OiB7XG4gICAgICAgIHVzZXJOYW1lOiBudWxsLFxuICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgY2xpZW50OiAn5bCP56iL5bqPJyxcbiAgICAgICAgdXNlclR5cGU6ICdzdHVkZW50JyAvLyAnc3R1ZGVudC5jb2RlJ1xuICAgICAgfSxcbiAgICAgIGJ0bkNoYW5nZUNvbG9yOiAnIzk5OScsXG4gICAgICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJUZXh0OiAnJyxcbiAgICAgIHRvYXN0U2hvdzogZmFsc2VcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRDaGFuZ2UgKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHtlbnRpdHl9ID0gc2VsZi5kYXRhXG4gICAgICAgIGNvbnN0IHtmaWVsZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgICBjb25zdCB7dmFsdWV9ID0gZS5kZXRhaWxcbiAgICAgICAgZW50aXR5W2ZpZWxkXSA9IHZhbHVlXG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgc2VsZi5idG5DaGFuZ2VDb2xvciA9ICcjZGQ1MDQ0J1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmJ0bkNoYW5nZUNvbG9yID0gJyM5OTknXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5lbnRpdHkgPSBlbnRpdHlcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGhhbmRsZXRvUGFnZShwYWdlKSB7XG4gICAgICAgIGlmIChwYWdlID09ICdieVRlbCcpXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy9wYWdlcy9sb2dpbi9sb2dpbkJ5VGVsJylcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnL3BhZ2VzL2xvZ2luL2NoYW5nZVB3ZCcpXG4gICAgICB9LFxuICAgICAgaGFuZGxlTG9naW4gKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qge2VudGl0eSwgY29uZmlybUxvYWRpbmd9ID0gc2VsZi5kYXRhXG4gICAgICAgIC8vIGlmICghYXBwLmF1dGgoKSkge1xuICAgICAgICAvLyAgIHJldHVyblxuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChjb25maXJtTG9hZGluZykgcmV0dXJuXG5cbiAgICAgICAgc2VsZi5jb25maXJtTG9hZGluZyA9IHRydWVcbiAgICAgICAgLy8gd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAvLyAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgICAvLyB9KVxuXG4gICAgICAgIHNlbGYuY2hlY2tFbnRpdHkoZW50aXR5LCBudWxsLCAoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgaWYgKCFfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgICAgICAgbGV0IGVycnMgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gZXJyb3JzKSB7XG4gICAgICAgICAgICAgIGVycnMucHVzaChlcnJvcnNbaW5kZXhdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gd3guc2hvd1RvYXN0KHsgdGl0bGU6IGVycnNbMF0sIGR1cmF0aW9uOiAxNTAwIH0pXG4gICAgICAgICAgICBzZWxmLmVyclRleHQgPSBlcnJzWzBdXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJzWzBdKVxuICAgICAgICAgICAgc2VsZi50b2FzdFNob3cgPSB0cnVlXG4gICAgICAgICAgICBzZWxmLmNvbmZpcm1Mb2FkaW5nID0gZmFsc2VcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBzZWxmLnRvYXN0U2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2VzX2xvZ2luX2xvZ2luLnNhdmV1c2VyKHtcbiAgICAgICAgICAgIGRhdGE6IHsgLi4uZW50aXR5IH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHt0b2tlbiwgdW5pb251c2VyfSA9IHJlc1xuICAgICAgICAgICAgICBjb25maWcuc2V0VG9rZW4odG9rZW4pXG4gICAgICAgICAgICAgIGNvbmZpZy5zZXRVbmlvbnVzZXIodW5pb251c2VyKVxuICAgICAgICAgICAgICBzZWxmLiRwYXJlbnQuZ2xvYmFsRGF0YS51bmlvbnVzZXIgPSB1bmlvbnVzZXJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wbnuiwg3JlcycscmVzKVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLiRwYXJlbnQuZ2xvYmFsRGF0YSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLmNvbmZpcm1Mb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21pbmUnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgICBjaGVja0VudGl0eSAoZW50aXR5LCBmaWVsZCwgY2FsbGJhY2spIHtcbiAgICAgIGxldCBlcnJvcnMgPSB7fVxuICAgICAgaWYgKF8uaXNFbXB0eShlbnRpdHkudXNlck5hbWUpKSB7XG4gICAgICAgIGVycm9ycy51c2VyTmFtZSA9IFwi5omL5py65Y+35LiN6IO95Li656m6XCJcbiAgICAgIH1cbiAgICAgIGlmIChfLmlzRW1wdHkoZW50aXR5LnBhc3N3b3JkKSkge1xuICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBcIuWvhueggeS4jeiDveS4uuepulwiXG4gICAgICB9XG4gICAgICBjYWxsYmFjayhlcnJvcnMpXG4gICAgfVxuICB9XG4iXX0=