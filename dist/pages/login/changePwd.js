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

var ChangePwd = function (_wepy$page) {
  _inherits(ChangePwd, _wepy$page);

  function ChangePwd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChangePwd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChangePwd.__proto__ || Object.getPrototypeOf(ChangePwd)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '修改密码',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-toast': '../../packages/@minui/wxc-toast/dist/index',
        'wxc-countdown': '../../packages/@minui/wxc-countdown/dist/index'
      }
    }, _this.components = {}, _this.data = {
      errors: {},
      entity: {
        userName: null,
        password: null,
        code: null,
        client: '小程序',
        userType: 'student' // 'student.code'
      },
      telephone: null,
      btnChangeColor: '#999',
      errText: '请输入正确的手机号码',
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
        if (field == 'userName') {
          self.telephone = value;
          self.$apply();
        }

        self.entity = entity;
        self.$apply();
      },
      getVerificationCode: function getVerificationCode() {
        var self = this;
        var telephone = self.data.telephone;

        console.log(telephone);
        if (telephone != null && telephone.length == 11) {
          services_login_login.verifycode({
            params: { telephone: telephone },
            success: function success(res) {
              console.log(res);
            }
          });
        } else {
          self.toastShow = true;
          self.$apply();
          setTimeout(function () {
            self.toastShow = false;
            self.$apply();
          }, 1000);
        }
      },
      handleLogin: function handleLogin() {
        var self = this;
        var _self$data = self.data,
            entity = _self$data.entity,
            confirmLoading = _self$data.confirmLoading;


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
          services_login_login.resetpassword({
            data: _extends({}, entity),
            success: function success(res) {
              var token = res.token,
                  unionuser = res.unionuser;

              _config2.default.setToken(token);
              _config2.default.setUnionuser(unionuser);
              wx.showToast({
                title: '修改成功！',
                icon: 'success',
                duration: 1500,
                success: function success() {
                  wx.navigateBack();
                }
              });
              console.log('回调res', res);
              // wx.navigateBack()
            },
            complete: function complete() {
              self.confirmLoading = false;
              self.$apply();
              wx.hideLoading();
            }
          });
        });
        self.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChangePwd, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'checkEntity',
    value: function checkEntity(entity, field, callback) {
      var errors = {};
      if (_underscore2.default.isEmpty(entity.userName)) {
        errors.userName = "手机号不能为空";
      }
      if (_underscore2.default.isEmpty(entity.code)) {
        errors.code = "验证码不能为空";
      }
      if (_underscore2.default.isEmpty(entity.password)) {
        errors.password = "新密码不能为空";
      }
      callback(errors);
    }
  }]);

  return ChangePwd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ChangePwd , 'pages/login/changePwd'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZVB3ZC5qcyJdLCJuYW1lcyI6WyJzZXJ2aWNlc19sb2dpbl9sb2dpbiIsIkNoYW5nZVB3ZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiZXJyb3JzIiwiZW50aXR5IiwidXNlck5hbWUiLCJwYXNzd29yZCIsImNvZGUiLCJjbGllbnQiLCJ1c2VyVHlwZSIsInRlbGVwaG9uZSIsImJ0bkNoYW5nZUNvbG9yIiwiZXJyVGV4dCIsInRvYXN0U2hvdyIsIm1ldGhvZHMiLCJiaW5kQ2hhbmdlIiwiZSIsInNlbGYiLCJmaWVsZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmFsdWUiLCJkZXRhaWwiLCIkYXBwbHkiLCJnZXRWZXJpZmljYXRpb25Db2RlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInZlcmlmeWNvZGUiLCJwYXJhbXMiLCJzdWNjZXNzIiwicmVzIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ2luIiwiY29uZmlybUxvYWRpbmciLCJjaGVja0VudGl0eSIsImlzRW1wdHkiLCJlcnJzIiwiaW5kZXgiLCJwdXNoIiwid3giLCJoaWRlTG9hZGluZyIsInJlc2V0cGFzc3dvcmQiLCJ0b2tlbiIsInVuaW9udXNlciIsInNldFRva2VuIiwic2V0VW5pb251c2VyIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJuYXZpZ2F0ZUJhY2siLCJjb21wbGV0ZSIsImNhbGxiYWNrIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztJQUFZQSxvQjs7Ozs7Ozs7Ozs7O0lBRVNDLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw4QkFB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RCxVQUFJLHFCQUFFK0IsT0FBRixDQUFVaEMsT0FBT0csSUFBakIsQ0FBSixFQUE0QjtBQUMxQkosZUFBT0ksSUFBUCxHQUFjLFNBQWQ7QUFDRDtBQUNELFVBQUkscUJBQUU2QixPQUFGLENBQVVoQyxPQUFPRSxRQUFqQixDQUFKLEVBQWdDO0FBQzlCSCxlQUFPRyxRQUFQLEdBQWtCLFNBQWxCO0FBQ0Q7QUFDRCtDLGVBQVNsRCxNQUFUO0FBQ0Q7Ozs7RUE3SW9DLGVBQUttRCxJOztrQkFBdkIzRCxTIiwiZmlsZSI6ImNoYW5nZVB3ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuXG4gIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZydcbiAgaW1wb3J0ICogYXMgc2VydmljZXNfbG9naW5fbG9naW4gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9naW4vbG9naW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlUHdkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L+u5pS55a+G56CBJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2RkNTA0NCcsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy10b2FzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRvYXN0L2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWNvdW50ZG93bic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNvdW50ZG93bi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIGVudGl0eToge1xuICAgICAgICB1c2VyTmFtZTogbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgIGNvZGU6IG51bGwsXG4gICAgICAgIGNsaWVudDogJ+Wwj+eoi+W6jycsXG4gICAgICAgIHVzZXJUeXBlOiAnc3R1ZGVudCcgLy8gJ3N0dWRlbnQuY29kZSdcbiAgICAgIH0sXG4gICAgICB0ZWxlcGhvbmU6IG51bGwsXG4gICAgICBidG5DaGFuZ2VDb2xvcjogJyM5OTknLFxuICAgICAgZXJyVGV4dDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPt+eggScsXG4gICAgICB0b2FzdFNob3c6IGZhbHNlXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kQ2hhbmdlIChlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCB7ZW50aXR5fSA9IHNlbGYuZGF0YVxuICAgICAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IGUuZGV0YWlsXG4gICAgICAgIGVudGl0eVtmaWVsZF0gPSB2YWx1ZVxuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHNlbGYuYnRuQ2hhbmdlQ29sb3IgPSAnI2RkNTA0NCdcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5idG5DaGFuZ2VDb2xvciA9ICcjOTk5J1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBpZihmaWVsZCA9PSAndXNlck5hbWUnKSB7XG4gICAgICAgICAgc2VsZi50ZWxlcGhvbmUgPSB2YWx1ZVxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuZW50aXR5ID0gZW50aXR5XG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBnZXRWZXJpZmljYXRpb25Db2RlICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHt0ZWxlcGhvbmV9ID0gc2VsZi5kYXRhIFxuICAgICAgICBjb25zb2xlLmxvZyh0ZWxlcGhvbmUpXG4gICAgICAgIGlmICggdGVsZXBob25lICE9IG51bGwgJiYgdGVsZXBob25lLmxlbmd0aCA9PSAxMSApIHtcbiAgICAgICAgICBzZXJ2aWNlc19sb2dpbl9sb2dpbi52ZXJpZnljb2RlKHtcbiAgICAgICAgICAgIHBhcmFtczoge3RlbGVwaG9uZX0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudG9hc3RTaG93ID0gdHJ1ZVxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLnRvYXN0U2hvdyA9IGZhbHNlXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUxvZ2luICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHtlbnRpdHksIGNvbmZpcm1Mb2FkaW5nfSA9IHNlbGYuZGF0YVxuXG4gICAgICAgIGlmIChjb25maXJtTG9hZGluZykgcmV0dXJuXG5cbiAgICAgICAgc2VsZi5jb25maXJtTG9hZGluZyA9IHRydWVcbiAgICAgICAgLy8gd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAvLyAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgICAvLyB9KVxuICAgICAgICBzZWxmLmNoZWNrRW50aXR5KGVudGl0eSwgbnVsbCwgKGVycm9ycykgPT4ge1xuICAgICAgICAgIGlmICghXy5pc0VtcHR5KGVycm9ycykpIHtcbiAgICAgICAgICAgIGxldCBlcnJzID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIGVycm9ycykge1xuICAgICAgICAgICAgICBlcnJzLnB1c2goZXJyb3JzW2luZGV4XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHd4LnNob3dUb2FzdCh7IHRpdGxlOiBlcnJzWzBdLCBkdXJhdGlvbjogMTUwMCB9KVxuICAgICAgICAgICAgc2VsZi5lcnJUZXh0ID0gZXJyc1swXVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyc1swXSlcbiAgICAgICAgICAgIHNlbGYudG9hc3RTaG93ID0gdHJ1ZVxuICAgICAgICAgICAgc2VsZi5jb25maXJtTG9hZGluZyA9IGZhbHNlXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgc2VsZi50b2FzdFNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZXNfbG9naW5fbG9naW4ucmVzZXRwYXNzd29yZCh7XG4gICAgICAgICAgICBkYXRhOiB7IC4uLmVudGl0eSB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7dG9rZW4sIHVuaW9udXNlcn0gPSByZXNcbiAgICAgICAgICAgICAgY29uZmlnLnNldFRva2VuKHRva2VuKVxuICAgICAgICAgICAgICBjb25maWcuc2V0VW5pb251c2VyKHVuaW9udXNlcilcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfkv67mlLnmiJDlip/vvIEnLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wbnuiwg3JlcycscmVzKVxuICAgICAgICAgICAgICAvLyB3eC5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYuY29uZmlybUxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICAgIGNoZWNrRW50aXR5IChlbnRpdHksIGZpZWxkLCBjYWxsYmFjaykge1xuICAgICAgbGV0IGVycm9ycyA9IHt9XG4gICAgICBpZiAoXy5pc0VtcHR5KGVudGl0eS51c2VyTmFtZSkpIHtcbiAgICAgICAgZXJyb3JzLnVzZXJOYW1lID0gXCLmiYvmnLrlj7fkuI3og73kuLrnqbpcIlxuICAgICAgfVxuICAgICAgaWYgKF8uaXNFbXB0eShlbnRpdHkuY29kZSkpIHtcbiAgICAgICAgZXJyb3JzLmNvZGUgPSBcIumqjOivgeeggeS4jeiDveS4uuepulwiXG4gICAgICB9XG4gICAgICBpZiAoXy5pc0VtcHR5KGVudGl0eS5wYXNzd29yZCkpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gXCLmlrDlr4bnoIHkuI3og73kuLrnqbpcIlxuICAgICAgfVxuICAgICAgY2FsbGJhY2soZXJyb3JzKVxuICAgIH1cbiAgfVxuIl19