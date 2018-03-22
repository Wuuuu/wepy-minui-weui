'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = function (_wepy$page) {
  _inherits(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.components = {}, _this.data = {
      unionuser: null
    }, _this.methods = {
      toDetailPage: function toDetailPage(params) {
        this.$navigate('/pages/mine/' + params);
      },
      toLogin: function toLogin() {
        this.$navigate('/pages/login/login');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      var unionuser = _config2.default.getUnionuser();
      self.unionuser = unionuser;
    }
  }]);

  return Mine;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInVuaW9udXNlciIsIm1ldGhvZHMiLCJ0b0RldGFpbFBhZ2UiLCJwYXJhbXMiLCIkbmF2aWdhdGUiLCJ0b0xvZ2luIiwic2VsZiIsImdldFVuaW9udXNlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsaUJBQVc7QUFETixLLFFBR1BDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsTUFETixFQUNjO0FBQ3BCLGFBQUtDLFNBQUwsa0JBQThCRCxNQUE5QjtBQUNELE9BSE87QUFJUkUsYUFKUSxxQkFJRztBQUNULGFBQUtELFNBQUw7QUFDRDtBQU5PLEs7Ozs7OzZCQVFBLENBQ1Q7Ozs2QkFDUztBQUNSLFVBQUlFLE9BQU8sSUFBWDtBQUNBLFVBQU1OLFlBQVksaUJBQU9PLFlBQVAsRUFBbEI7QUFDQUQsV0FBS04sU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OztFQXZCK0IsZUFBS1EsSTs7a0JBQWxCYixJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICB1bmlvbnVzZXI6IG51bGxcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvRGV0YWlsUGFnZSAocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKGAvcGFnZXMvbWluZS8ke3BhcmFtc31gKVxuICAgICAgfSxcbiAgICAgIHRvTG9naW4gKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgL3BhZ2VzL2xvZ2luL2xvZ2luYClcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkICgpIHtcbiAgICB9XG4gICAgb25TaG93ICgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcyBcbiAgICAgIGNvbnN0IHVuaW9udXNlciA9IGNvbmZpZy5nZXRVbmlvbnVzZXIoKVxuICAgICAgc2VsZi51bmlvbnVzZXIgPSB1bmlvbnVzZXJcbiAgICB9XG4gIH1cbiJdfQ==