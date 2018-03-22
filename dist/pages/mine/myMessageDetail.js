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

var MyMessageDetail = function (_wepy$page) {
  _inherits(MyMessageDetail, _wepy$page);

  function MyMessageDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyMessageDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyMessageDetail.__proto__ || Object.getPrototypeOf(MyMessageDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的消息',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044'
    }, _this.data = {
      list: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyMessageDetail, [{
    key: 'onLoad',
    value: function onLoad(item) {
      var self = this;
      self.list = item;
      self.$apply();
    }
  }]);

  return MyMessageDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyMessageDetail , 'pages/mine/myMessageDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15TWVzc2FnZURldGFpbC5qcyJdLCJuYW1lcyI6WyJNeU1lc3NhZ2VEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJkYXRhIiwibGlzdCIsIm1ldGhvZHMiLCJpdGVtIiwic2VsZiIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyxvQ0FBOEI7QUFIdkIsSyxRQUtUQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFHUEMsTyxHQUFVLEU7Ozs7OzJCQUVIQyxJLEVBQU07QUFDWCxVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS0gsSUFBTCxHQUFZRSxJQUFaO0FBQ0FDLFdBQUtDLE1BQUw7QUFDRDs7OztFQWYwQyxlQUFLQyxJOztrQkFBN0JYLGUiLCJmaWxlIjoibXlNZXNzYWdlRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlNZXNzYWdlRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5raI5oGvJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2RkNTA0NCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIG9uTG9hZChpdGVtKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYubGlzdCA9IGl0ZW1cbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfVxuICB9XG5cbiJdfQ==