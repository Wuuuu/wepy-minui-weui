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

var LoginByTel = function (_wepy$page) {
  _inherits(LoginByTel, _wepy$page);

  function LoginByTel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginByTel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginByTel.__proto__ || Object.getPrototypeOf(LoginByTel)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录界面',
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
        client: '小程序',
        userType: 'student.code' // 'student.code'
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
        console.log('entity:', self.entity);
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
              console.log('回调res', res);
              self.$switch('/pages/mine');
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

  _createClass(LoginByTel, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.$parent);
    }
  }, {
    key: 'checkEntity',
    value: function checkEntity(entity, field, callback) {
      var errors = {};
      if (_underscore2.default.isEmpty(entity.userName)) {
        errors.userName = "手机号不能为空";
      }
      if (_underscore2.default.isEmpty(entity.password)) {
        errors.password = "验证码不能为空";
      }
      callback(errors);
    }
  }]);

  return LoginByTel;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(LoginByTel , 'pages/login/loginByTel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luQnlUZWwuanMiXSwibmFtZXMiOlsic2VydmljZXNfbG9naW5fbG9naW4iLCJMb2dpbkJ5VGVsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJlcnJvcnMiLCJlbnRpdHkiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiY2xpZW50IiwidXNlclR5cGUiLCJ0ZWxlcGhvbmUiLCJidG5DaGFuZ2VDb2xvciIsImVyclRleHQiLCJ0b2FzdFNob3ciLCJtZXRob2RzIiwiYmluZENoYW5nZSIsImUiLCJzZWxmIiwiZmllbGQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiZGV0YWlsIiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsImdldFZlcmlmaWNhdGlvbkNvZGUiLCJsZW5ndGgiLCJ2ZXJpZnljb2RlIiwicGFyYW1zIiwic3VjY2VzcyIsInJlcyIsInNldFRpbWVvdXQiLCJoYW5kbGVMb2dpbiIsImNvbmZpcm1Mb2FkaW5nIiwiY2hlY2tFbnRpdHkiLCJpc0VtcHR5IiwiZXJycyIsImluZGV4IiwicHVzaCIsInd4IiwiaGlkZUxvYWRpbmciLCJzYXZldXNlciIsInRva2VuIiwidW5pb251c2VyIiwic2V0VG9rZW4iLCJzZXRVbmlvbnVzZXIiLCIkc3dpdGNoIiwiY29tcGxldGUiLCIkcGFyZW50IiwiY2FsbGJhY2siLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0lBQVlBLG9COzs7Ozs7Ozs7Ozs7SUFFU0MsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyxvQ0FBOEIsU0FIdkI7QUFJUEMsdUJBQWlCO0FB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R0FBa0IsU0FBbEI7QUFDRDtBQUNEMkMsZUFBUzlDLE1BQVQ7QUFDRDs7OztFQXJJcUMsZUFBSytDLEk7O2tCQUF4QnZELFUiLCJmaWxlIjoibG9naW5CeVRlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuXG4gIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZydcbiAgaW1wb3J0ICogYXMgc2VydmljZXNfbG9naW5fbG9naW4gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9naW4vbG9naW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5CeVRlbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9leeVjOmdoicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtdG9hc3QnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10b2FzdC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1jb3VudGRvd24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jb3VudGRvd24vZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGVycm9yczoge30sXG4gICAgICBlbnRpdHk6IHtcbiAgICAgICAgdXNlck5hbWU6IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICBjbGllbnQ6ICflsI/nqIvluo8nLFxuICAgICAgICB1c2VyVHlwZTogJ3N0dWRlbnQuY29kZScgLy8gJ3N0dWRlbnQuY29kZSdcbiAgICAgIH0sXG4gICAgICB0ZWxlcGhvbmU6IG51bGwsXG4gICAgICBidG5DaGFuZ2VDb2xvcjogJyM5OTknLFxuICAgICAgZXJyVGV4dDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPt+eggScsXG4gICAgICB0b2FzdFNob3c6IGZhbHNlXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kQ2hhbmdlIChlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCB7ZW50aXR5fSA9IHNlbGYuZGF0YVxuICAgICAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IGUuZGV0YWlsXG4gICAgICAgIGVudGl0eVtmaWVsZF0gPSB2YWx1ZVxuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHNlbGYuYnRuQ2hhbmdlQ29sb3IgPSAnI2RkNTA0NCdcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5idG5DaGFuZ2VDb2xvciA9ICcjOTk5J1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBpZihmaWVsZCA9PSAndXNlck5hbWUnKSB7XG4gICAgICAgICAgc2VsZi50ZWxlcGhvbmUgPSB2YWx1ZVxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuZW50aXR5ID0gZW50aXR5XG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGl0eTonLCBzZWxmLmVudGl0eSlcbiAgICAgIH0sXG4gICAgICBnZXRWZXJpZmljYXRpb25Db2RlICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHt0ZWxlcGhvbmV9ID0gc2VsZi5kYXRhIFxuICAgICAgICBjb25zb2xlLmxvZyh0ZWxlcGhvbmUpXG4gICAgICAgIGlmICggdGVsZXBob25lICE9IG51bGwgJiYgdGVsZXBob25lLmxlbmd0aCA9PSAxMSApIHtcbiAgICAgICAgICBzZXJ2aWNlc19sb2dpbl9sb2dpbi52ZXJpZnljb2RlKHtcbiAgICAgICAgICAgIHBhcmFtczoge3RlbGVwaG9uZX0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudG9hc3RTaG93ID0gdHJ1ZVxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLnRvYXN0U2hvdyA9IGZhbHNlXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUxvZ2luICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHtlbnRpdHksIGNvbmZpcm1Mb2FkaW5nfSA9IHNlbGYuZGF0YVxuICAgICAgICAvLyBpZiAoIWFwcC5hdXRoKCkpIHtcbiAgICAgICAgLy8gICByZXR1cm5cbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoY29uZmlybUxvYWRpbmcpIHJldHVyblxuXG4gICAgICAgIHNlbGYuY29uZmlybUxvYWRpbmcgPSB0cnVlXG4gICAgICAgIC8vIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgLy8gICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgICAgLy8gfSlcbiAgICAgICAgc2VsZi5jaGVja0VudGl0eShlbnRpdHksIG51bGwsIChlcnJvcnMpID0+IHtcbiAgICAgICAgICBpZiAoIV8uaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgICAgICAgICBsZXQgZXJycyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBlcnJvcnMpIHtcbiAgICAgICAgICAgICAgZXJycy5wdXNoKGVycm9yc1tpbmRleF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB3eC5zaG93VG9hc3QoeyB0aXRsZTogZXJyc1swXSwgZHVyYXRpb246IDE1MDAgfSlcbiAgICAgICAgICAgIHNlbGYuZXJyVGV4dCA9IGVycnNbMF1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycnNbMF0pXG4gICAgICAgICAgICBzZWxmLnRvYXN0U2hvdyA9IHRydWVcbiAgICAgICAgICAgIHNlbGYuY29uZmlybUxvYWRpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIHNlbGYudG9hc3RTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2VzX2xvZ2luX2xvZ2luLnNhdmV1c2VyKHtcbiAgICAgICAgICAgIGRhdGE6IHsgLi4uZW50aXR5IH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHt0b2tlbiwgdW5pb251c2VyfSA9IHJlc1xuICAgICAgICAgICAgICBjb25maWcuc2V0VG9rZW4odG9rZW4pXG4gICAgICAgICAgICAgIGNvbmZpZy5zZXRVbmlvbnVzZXIodW5pb251c2VyKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Zue6LCDcmVzJyxyZXMpXG4gICAgICAgICAgICAgIHNlbGYuJHN3aXRjaCgnL3BhZ2VzL21pbmUnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYuY29uZmlybUxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQpXG4gICAgfVxuICAgIGNoZWNrRW50aXR5IChlbnRpdHksIGZpZWxkLCBjYWxsYmFjaykge1xuICAgICAgbGV0IGVycm9ycyA9IHt9XG4gICAgICBpZiAoXy5pc0VtcHR5KGVudGl0eS51c2VyTmFtZSkpIHtcbiAgICAgICAgZXJyb3JzLnVzZXJOYW1lID0gXCLmiYvmnLrlj7fkuI3og73kuLrnqbpcIlxuICAgICAgfVxuICAgICAgaWYgKF8uaXNFbXB0eShlbnRpdHkucGFzc3dvcmQpKSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwi6aqM6K+B56CB5LiN6IO95Li656m6XCJcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKGVycm9ycylcbiAgICB9XG4gIH1cbiJdfQ==