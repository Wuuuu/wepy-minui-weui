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

var LessonItem = function (_wepy$component) {
  _inherits(LessonItem, _wepy$component);

  function LessonItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LessonItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonItem.__proto__ || Object.getPrototypeOf(LessonItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      lessonImg: [{ url: '../assets/lesson/vocal_music_01.png' }, { url: '../assets/lesson/vocal_music_02.png' }, { url: '../assets/lesson/vocal_music_03.png' }]
    }, _this.method = {
      toLessonDetail: function toLessonDetail(name) {
        console.log('1111');
        this.$navigate('pages/index');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LessonItem;
}(_wepy2.default.component);

exports.default = LessonItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3Nvbkl0ZW0uanMiXSwibmFtZXMiOlsiTGVzc29uSXRlbSIsInByb3BzIiwiZGF0YSIsImxlc3NvbkltZyIsInVybCIsIm1ldGhvZCIsInRvTGVzc29uRGV0YWlsIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCIkbmF2aWdhdGUiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsSyxHQUFRLEUsUUFJUkMsSSxHQUFPO0FBQ0xDLGlCQUFXLENBQ1QsRUFBQ0MsS0FBSyxxQ0FBTixFQURTLEVBRVQsRUFBQ0EsS0FBSyxxQ0FBTixFQUZTLEVBR1QsRUFBQ0EsS0FBSyxxQ0FBTixFQUhTO0FBRE4sSyxRQVFQQyxNLEdBQVM7QUFDUEMsb0JBRE8sMEJBQ1FDLElBRFIsRUFDYztBQUNuQkMsZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsYUFBS0MsU0FBTDtBQUNEO0FBSk0sSyxRQU1UQyxNLEdBQVMsRTs7OztFQW5CNkIsZUFBS0MsUzs7a0JBQXhCWixVIiwiZmlsZSI6Imxlc3Nvbkl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlc3Nvbkl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuXG4gIH07XG5cbiAgZGF0YSA9IHtcbiAgICBsZXNzb25JbWc6IFtcbiAgICAgIHt1cmw6ICcuLi9hc3NldHMvbGVzc29uL3ZvY2FsX211c2ljXzAxLnBuZyd9LFxuICAgICAge3VybDogJy4uL2Fzc2V0cy9sZXNzb24vdm9jYWxfbXVzaWNfMDIucG5nJ30sXG4gICAgICB7dXJsOiAnLi4vYXNzZXRzL2xlc3Nvbi92b2NhbF9tdXNpY18wMy5wbmcnfSxcbiAgICBdXG4gIH07XG5cbiAgbWV0aG9kID0ge1xuICAgIHRvTGVzc29uRGV0YWlsKG5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcxMTExJylcbiAgICAgIHRoaXMuJG5hdmlnYXRlKGBwYWdlcy9pbmRleGApO1xuICAgIH1cbiAgfTtcbiAgZXZlbnRzID0ge1xuICB9XG59XG4iXX0=