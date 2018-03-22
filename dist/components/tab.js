'use strict';

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

var Tabs = function (_wepy$component) {
  _inherits(Tabs, _wepy$component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.props = {
      tabsData: {},
      test: {}
    }, _this.data = {
      tabs: ["选项一", "选项二", "选项三"],
      activeIndex: 1,
      sliderOffset: 0,
      sliderLeft: 0
    }, _this.methods = {
      tabClick: function tabClick(e) {
        var that = this;
        that.sliderOffset = e.currentTarget.offsetLeft;
        that.activeIndex = e.currentTarget.id;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
      console.log('test:', that.test);
      wx.getSystemInfo({
        success: function success(res) {
          that.sliderLeft = (res.windowWidth / that.data.tabs.length - sliderWidth) / 2;
          that.sliderOffset = res.windowWidth / that.data.tabs.length * that.data.activeIndex;
        }
      });
    }
  }]);

  return Tabs;
}(_wepy2.default.component);

exports.default = Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWJzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInByb3BzIiwidGFic0RhdGEiLCJ0ZXN0IiwiZGF0YSIsInRhYnMiLCJhY3RpdmVJbmRleCIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJtZXRob2RzIiwidGFiQ2xpY2siLCJlIiwidGhhdCIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwiaWQiLCJzbGlkZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93V2lkdGgiLCJsZW5ndGgiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSyxHQUFRO0FBQ05DLGdCQUFVLEVBREo7QUFFTkMsWUFBTTtBQUZBLEssUUFJUkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FERDtBQUVMQyxtQkFBYSxDQUZSO0FBR0xDLG9CQUFjLENBSFQ7QUFJTEMsa0JBQVk7QUFKUCxLLFFBTVBDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxDQURGLEVBQ0s7QUFDWCxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS0wsWUFBTCxHQUFvQkksRUFBRUUsYUFBRixDQUFnQkMsVUFBcEM7QUFDQUYsYUFBS04sV0FBTCxHQUFtQkssRUFBRUUsYUFBRixDQUFnQkUsRUFBbkM7QUFDRDtBQUxPLEs7Ozs7OzZCQU9BO0FBQ1IsVUFBSUgsT0FBTyxJQUFYO0FBQ0EsVUFBSUksY0FBYyxFQUFsQixDQUZRLENBRWE7QUFDckJDLGNBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CTixLQUFLVCxJQUF6QjtBQUNFZ0IsU0FBR0MsYUFBSCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCVixlQUFLSixVQUFMLEdBQWtCLENBQUNjLElBQUlDLFdBQUosR0FBa0JYLEtBQUtSLElBQUwsQ0FBVUMsSUFBVixDQUFlbUIsTUFBakMsR0FBMENSLFdBQTNDLElBQTBELENBQTVFO0FBQ0FKLGVBQUtMLFlBQUwsR0FBb0JlLElBQUlDLFdBQUosR0FBa0JYLEtBQUtSLElBQUwsQ0FBVUMsSUFBVixDQUFlbUIsTUFBakMsR0FBMENaLEtBQUtSLElBQUwsQ0FBVUUsV0FBeEU7QUFDRDtBQUpjLE9BQWpCO0FBTUg7Ozs7RUEvQitCLGVBQUttQixTOztrQkFBbEIzQixJIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcclxuICAgIH1cclxuICAgIHByb3BzID0ge1xyXG4gICAgICB0YWJzRGF0YToge30sXHJcbiAgICAgIHRlc3Q6IHt9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB0YWJzOiBbXCLpgInpobnkuIBcIiwgXCLpgInpobnkuoxcIiwgXCLpgInpobnkuIlcIl0sXHJcbiAgICAgIGFjdGl2ZUluZGV4OiAxLFxyXG4gICAgICBzbGlkZXJPZmZzZXQ6IDAsXHJcbiAgICAgIHNsaWRlckxlZnQ6IDBcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRhYkNsaWNrIChlKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgdGhhdC5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdFxyXG4gICAgICAgIHRoYXQuYWN0aXZlSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIHZhciBzbGlkZXJXaWR0aCA9IDk2IC8vIOmcgOimgeiuvue9rnNsaWRlcueahOWuveW6pu+8jOeUqOS6juiuoeeul+S4remXtOS9jee9rlxyXG4gICAgICBjb25zb2xlLmxvZygndGVzdDonLHRoYXQudGVzdClcclxuICAgICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhhdC5zbGlkZXJMZWZ0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHRoYXQuZGF0YS50YWJzLmxlbmd0aCAtIHNsaWRlcldpZHRoKSAvIDJcclxuICAgICAgICAgICAgdGhhdC5zbGlkZXJPZmZzZXQgPSByZXMud2luZG93V2lkdGggLyB0aGF0LmRhdGEudGFicy5sZW5ndGggKiB0aGF0LmRhdGEuYWN0aXZlSW5kZXhcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0=