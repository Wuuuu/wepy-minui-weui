'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_wepy$page) {
  _inherits(About, _wepy$page);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关于',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044'
    }, _this.components = {}, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('about');
    }
  }]);

  return About;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/mine/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyxvQ0FBOEI7QUFIdkIsSyxRQUtUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVUsRTs7Ozs7NkJBRUE7QUFDUkMsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDRDs7OztFQWRnQyxlQUFLQyxJOztrQkFBbkJWLEsiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFs+S6jicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7IFxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ2Fib3V0JylcbiAgICB9XG59XG5cbiJdfQ==