'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _detail = require('./../../services/lesson/detail.js');

var services_lesson_order = _interopRequireWildcard(_detail);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = function (_wepy$page) {
  _inherits(Order, _wepy$page);

  function Order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '立即订购',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
        'wxc-price': '../../packages/@minui/wxc-price/dist/index'
      }
    }, _this.data = {
      id: null,
      entity: null
    }, _this.methods = {
      handlePay: function handlePay() {
        _wepy2.default.showLoading({
          title: '支付中~~~',
          mask: true
        });
        setTimeout(function () {
          _wepy2.default.hideLoading();
        }, 2000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: 'onLoad',
    value: function onLoad(params) {
      var self = this;
      console.log('params', params);
      self.id = params.id;
      self.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      var id = self.data.id;

      services_lesson_order.query({
        params: {
          id: id,
          _info: 'schools'
        },
        success: function success(res) {
          self.entity = res;
          self.$apply();
          console.log(res);
        }
      });
    }
  }]);

  return Order;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/lessonDetail/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzX2xlc3Nvbl9vcmRlciIsIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImlkIiwiZW50aXR5IiwibWV0aG9kcyIsImhhbmRsZVBheSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwicGFyYW1zIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJxdWVyeSIsIl9pbmZvIiwic3VjY2VzcyIsInJlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7SUFBWUEscUI7Ozs7Ozs7Ozs7OztJQUVTQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyx1QkFBaUI7QUFDZixrQkFBVSx5Q0FESztBQUVmLHFCQUFhO0FBRkU7QUFKVixLLFFBVVRDLEksR0FBTztBQUNMQyxVQUFJLElBREM7QUFFTEMsY0FBUTtBQUZILEssUUFJUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0s7QUFDWCx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxRQURRO0FBRWZDLGdCQUFNO0FBRlMsU0FBakI7QUFJQUMsbUJBQVcsWUFBVTtBQUNuQix5QkFBS0MsV0FBTDtBQUNELFNBRkQsRUFFRSxJQUZGO0FBR0Q7QUFUTyxLOzs7OzsyQkFXSEMsTSxFQUFRO0FBQ2IsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXFCSCxNQUFyQjtBQUNBQyxXQUFLVixFQUFMLEdBQVVTLE9BQU9ULEVBQWpCO0FBQ0FVLFdBQUtHLE1BQUw7QUFDRDs7OzZCQUNTO0FBQ1IsVUFBSUgsT0FBTyxJQUFYO0FBRFEsVUFFQVYsRUFGQSxHQUVPVSxLQUFLWCxJQUZaLENBRUFDLEVBRkE7O0FBR1JSLDRCQUFzQnNCLEtBQXRCLENBQTRCO0FBQzFCTCxnQkFBUTtBQUNOVCxnQkFETTtBQUVOZSxpQkFBTztBQUZELFNBRGtCO0FBSzFCQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCUCxlQUFLVCxNQUFMLEdBQWNnQixHQUFkO0FBQ0FQLGVBQUtHLE1BQUw7QUFDQUYsa0JBQVFDLEdBQVIsQ0FBWUssR0FBWjtBQUNEO0FBVHlCLE9BQTVCO0FBV0Q7Ozs7RUE5Q2dDLGVBQUtDLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICogYXMgc2VydmljZXNfbGVzc29uX29yZGVyIGZyb20gJy4uLy4uL3NlcnZpY2VzL2xlc3Nvbi9kZXRhaWwnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnq4vljbPorqLotK0nLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MDQ0JyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtcHJpY2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGVudGl0eTogbnVsbFxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlUGF5ICgpIHtcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICfmlK/ku5jkuK1+fn4nLFxuICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB9LDIwMDApXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZChwYXJhbXMpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcycscGFyYW1zKVxuICAgICAgc2VsZi5pZCA9IHBhcmFtcy5pZFxuICAgICAgc2VsZi4kYXBwbHkoKVxuICAgIH1cbiAgICBvblNob3cgKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCB7IGlkIH0gPSBzZWxmLmRhdGFcbiAgICAgIHNlcnZpY2VzX2xlc3Nvbl9vcmRlci5xdWVyeSh7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIF9pbmZvOiAnc2Nob29scydcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIHNlbGYuZW50aXR5ID0gcmVzXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuIl19