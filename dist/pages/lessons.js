"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lessons = function (_wepy$page) {
  _inherits(Lessons, _wepy$page);

  function Lessons() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Lessons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lessons.__proto__ || Object.getPrototypeOf(Lessons)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "第二页",
      navigationBarTextStyle: "white",
      navigationBarBackgroundColor: "#dd5044",
      enablePullDownRefresh: true,
      usingComponents: {}
    }, _this.components = {}, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lessons, [{
    key: "onLoad",
    value: function onLoad() {
      console.log("onLoad");
    }
  }]);

  return Lessons;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Lessons , 'pages/lessons'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3NvbnMuanMiXSwibmFtZXMiOlsiTGVzc29ucyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCLFNBSHZCO0FBSVBDLDZCQUF1QixJQUpoQjtBQUtQQyx1QkFBaUI7QUFMVixLLFFBUVRDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVSxFOzs7Ozs2QkFFRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBZmtDLGVBQUtDLEk7O2tCQUFyQlosTyIsImZpbGUiOiJsZXNzb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXNzb25zIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuesrOS6jOmhtVwiLFxyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJ3aGl0ZVwiLFxyXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjZGQ1MDQ0XCIsXHJcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuICBkYXRhID0ge307XHJcbiAgbWV0aG9kcyA9IHt9O1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uTG9hZFwiKTtcclxuICB9XHJcbn1cclxuIl19