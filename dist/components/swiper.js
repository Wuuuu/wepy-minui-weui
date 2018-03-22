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

var Swiper = function (_wepy$component) {
  _inherits(Swiper, _wepy$component);

  function Swiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      dots: {
        // 是否显示面板指示点
        type: Boolean,
        default: true
      },
      autoplay: {
        // 是否自动切换
        type: Boolean,
        default: true
      },
      interval: {
        type: [String, Number],
        default: 5000
      },
      duration: {
        type: [String, Number],
        default: 1000
      },
      current: {
        type: Number,
        default: 0
      }
    }, _this.data = {
      imgUrls: ['../assets/index/index_banner_01.png', '../assets/index/index_banner_02.jpg', '../assets/index/index_banner_03.jpg']
    }, _this.method = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsImRvdHMiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJhdXRvcGxheSIsImludGVydmFsIiwiU3RyaW5nIiwiTnVtYmVyIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiZGF0YSIsImltZ1VybHMiLCJtZXRob2QiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSjtBQUNBQyxjQUFNQyxPQUZGO0FBR0pDLGlCQUFTO0FBSEwsT0FEQTtBQU1OQyxnQkFBVTtBQUNSO0FBQ0FILGNBQU1DLE9BRkU7QUFHUkMsaUJBQVM7QUFIRCxPQU5KO0FBV05FLGdCQUFVO0FBQ1JKLGNBQU0sQ0FBQ0ssTUFBRCxFQUFTQyxNQUFULENBREU7QUFFUkosaUJBQVM7QUFGRCxPQVhKO0FBZU5LLGdCQUFVO0FBQ1JQLGNBQU0sQ0FBQ0ssTUFBRCxFQUFTQyxNQUFULENBREU7QUFFUkosaUJBQVM7QUFGRCxPQWZKO0FBbUJOTSxlQUFTO0FBQ1BSLGNBQU1NLE1BREM7QUFFUEosaUJBQVM7QUFGRjtBQW5CSCxLLFFBeUJSTyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLHFDQURPLEVBRVAscUNBRk8sRUFHUCxxQ0FITztBQURKLEssUUFRUEMsTSxHQUFTLEU7Ozs7RUFsQ3lCLGVBQUtDLFM7O2tCQUFwQmYsTSIsImZpbGUiOiJzd2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgZG90czoge1xuICAgICAgLy8g5piv5ZCm5pi+56S66Z2i5p2/5oyH56S654K5XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIC8vIOaYr+WQpuiHquWKqOWIh+aNolxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGludGVydmFsOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogNTAwMFxuICAgIH0sXG4gICAgZHVyYXRpb246IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAxMDAwXG4gICAgfSxcbiAgICBjdXJyZW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9O1xuXG4gIGRhdGEgPSB7XG4gICAgaW1nVXJsczogW1xuICAgICAgJy4uL2Fzc2V0cy9pbmRleC9pbmRleF9iYW5uZXJfMDEucG5nJyxcbiAgICAgICcuLi9hc3NldHMvaW5kZXgvaW5kZXhfYmFubmVyXzAyLmpwZycsXG4gICAgICAnLi4vYXNzZXRzL2luZGV4L2luZGV4X2Jhbm5lcl8wMy5qcGcnXG4gICAgXVxuICB9O1xuXG4gIG1ldGhvZCA9IHt9O1xufVxuIl19