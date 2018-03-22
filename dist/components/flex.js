'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flex = function (_wepy$component) {
  _inherits(Flex, _wepy$component);

  function Flex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Flex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Flex.__proto__ || Object.getPrototypeOf(Flex)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      // 主轴方向
      dir: {
        type: String,
        default: 'left'
      },
      // 主轴对齐方式
      main: {
        type: String,
        default: 'left'
      },
      // 交叉轴对齐方式
      cross: {
        type: String,
        default: 'stretch'
      },
      // 换行设置
      wrap: {
        type: String,
        default: 'nowrap'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Flex;
}(_wepy2.default.component);

exports.default = Flex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXguanMiXSwibmFtZXMiOlsiRmxleCIsInByb3BzIiwiZGlyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJtYWluIiwiY3Jvc3MiLCJ3cmFwIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOO0FBQ0FDLFdBQUs7QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxpQkFBUztBQUZOLE9BRkM7QUFNTjtBQUNBQyxZQUFNO0FBQ0pILGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQVBBO0FBV047QUFDQUUsYUFBTztBQUNMSixjQUFNQyxNQUREO0FBRUxDLGlCQUFTO0FBRkosT0FaRDtBQWdCTjtBQUNBRyxZQUFNO0FBQ0pMLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTDtBQWpCQSxLOzs7O0VBRHdCLGVBQUtJLFM7O2tCQUFsQlQsSSIsImZpbGUiOiJmbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIC8vIOS4u+i9tOaWueWQkVxuICAgICAgZGlyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xlZnQnXG4gICAgICB9LFxuICAgICAgLy8g5Li76L205a+56b2Q5pa55byPXG4gICAgICBtYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xlZnQnXG4gICAgICB9LFxuICAgICAgLy8g5Lqk5Y+J6L205a+56b2Q5pa55byPXG4gICAgICBjcm9zczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdzdHJldGNoJ1xuICAgICAgfSxcbiAgICAgIC8vIOaNouihjOiuvue9rlxuICAgICAgd3JhcDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdub3dyYXAnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=