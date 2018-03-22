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

var MyCourses = function (_wepy$page) {
  _inherits(MyCourses, _wepy$page);

  function MyCourses() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyCourses);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyCourses.__proto__ || Object.getPrototypeOf(MyCourses)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的课程',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-progress': '../../packages/@minui/wxc-progress/dist/index'
      }
    }, _this.data = {}, _this.methods = {
      toDetail: function toDetail(item) {
        this.$navigate('./myMessageDetail', item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyCourses, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }]);

  return MyCourses;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyCourses , 'pages/mine/myCourses'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Q291cnNlcy5qcyJdLCJuYW1lcyI6WyJNeUNvdXJzZXMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsInRvRGV0YWlsIiwiaXRlbSIsIiRuYXZpZ2F0ZSIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCLFNBSHZCO0FBSVBDLHVCQUFpQjtBQUNmLHdCQUFnQjtBQUREO0FBSlYsSyxRQVFUQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDRUMsSUFERixFQUNRO0FBQ2QsYUFBS0MsU0FBTCxDQUFlLG1CQUFmLEVBQW9DRCxJQUFwQztBQUNEO0FBSE8sSzs7Ozs7NkJBS0Q7QUFDUCxVQUFJRSxPQUFPLElBQVg7QUFDRDs7OztFQWxCb0MsZUFBS0MsSTs7a0JBQXZCWixTIiwiZmlsZSI6Im15Q291cnNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q291cnNlcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOivvueoiycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtcHJvZ3Jlc3MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcm9ncmVzcy9kaXN0L2luZGV4JyxcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvRGV0YWlsIChpdGVtKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL215TWVzc2FnZURldGFpbCcsIGl0ZW0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgIH1cbiAgfVxuXG4iXX0=