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

var SchoolIntro = function (_wepy$page) {
  _inherits(SchoolIntro, _wepy$page);

  function SchoolIntro() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SchoolIntro);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SchoolIntro.__proto__ || Object.getPrototypeOf(SchoolIntro)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '学校介绍',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-progress': '../../packages/@minui/wxc-progress/dist/index'
      }
    }, _this.components = {}, _this.data = {
      schoolIntro: '豪韵艺术培训机构--天艺校区，位于成都市高新区锦城大道790号4楼。天艺校区作为豪韵教育的首家旗舰店，从开业到现在获得了行业内外的一致好评，也深受学生家长信赖。'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SchoolIntro, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SchoolIntro;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(SchoolIntro , 'pages/school/school'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC5qcyJdLCJuYW1lcyI6WyJTY2hvb2xJbnRybyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwic2Nob29sSW50cm8iLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyx1QkFBaUI7QUFDZix3QkFBZ0I7QUFERDtBQUpWLEssUUFRVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLG1CQUFhO0FBRFIsSyxRQUdQQyxPLEdBQVUsRTs7Ozs7NkJBQ0QsQ0FDUjs7OztFQWhCc0MsZUFBS0MsSTs7a0JBQXpCVixXIiwiZmlsZSI6InNjaG9vbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaG9vbEludHJvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5a2m5qCh5LuL57uNJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2RkNTA0NCcsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1wcm9ncmVzcyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByb2dyZXNzL2Rpc3QvaW5kZXgnLFxuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2Nob29sSW50cm86ICfosarpn7XoibrmnK/ln7norq3mnLrmnoQtLeWkqeiJuuagoeWMuu+8jOS9jeS6juaIkOmDveW4gumrmOaWsOWMuumUpuWfjuWkp+mBkzc5MOWPtzTmpbzjgILlpKnoibrmoKHljLrkvZzkuLrosarpn7XmlZnogrLnmoTpppblrrbml5foiLDlupfvvIzku47lvIDkuJrliLDnjrDlnKjojrflvpfkuobooYzkuJrlhoXlpJbnmoTkuIDoh7Tlpb3or4TvvIzkuZ/mt7Hlj5flrabnlJ/lrrbplb/kv6HotZbjgIInXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7fVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cblxuIl19