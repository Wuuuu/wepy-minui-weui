'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _unpaidOrder = require('./../../components/unpaidOrder.js');

var _unpaidOrder2 = _interopRequireDefault(_unpaidOrder);

var _payOrder = require('./../../components/payOrder.js');

var _payOrder2 = _interopRequireDefault(_payOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyOrder = function (_wepy$page) {
  _inherits(MyOrder, _wepy$page);

  function MyOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyOrder.__proto__ || Object.getPrototypeOf(MyOrder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单详情',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel'
      }
    }, _this.components = {
      UnpaidOrder: _unpaidOrder2.default,
      PayOrder: _payOrder2.default,
      AllPayOrder: _payOrder2.default
    }, _this.data = {
      activeIndex: 0,
      tabs: [{ title: '未付款' }, { title: '已付款' }, { title: '全部' }]
    }, _this.methods = {
      onClick: function onClick(e) {
        this.activeIndex = e.detail.key;
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyOrder, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return MyOrder;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyOrder , 'pages/mine/myOrder'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15T3JkZXIuanMiXSwibmFtZXMiOlsiTXlPcmRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJVbnBhaWRPcmRlciIsIlBheU9yZGVyIiwiQWxsUGF5T3JkZXIiLCJkYXRhIiwiYWN0aXZlSW5kZXgiLCJ0YWJzIiwidGl0bGUiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJkZXRhaWwiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50SWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyx1QkFBaUI7QUFDZix3QkFBZ0IsK0NBREQ7QUFFZixtQkFBVywwQ0FGSTtBQUdmLHlCQUFpQjtBQUhGO0FBSlYsSyxRQVVUQyxVLEdBQWE7QUFDWEMsd0NBRFc7QUFFWEMsa0NBRlc7QUFHWEM7QUFIVyxLLFFBS2JDLEksR0FBTztBQUNMQyxtQkFBYSxDQURSO0FBRUxDLFlBQU0sQ0FBQyxFQUFDQyxPQUFPLEtBQVIsRUFBRCxFQUFnQixFQUFDQSxPQUFPLEtBQVIsRUFBaEIsRUFBK0IsRUFBQ0EsT0FBTyxJQUFSLEVBQS9CO0FBRkQsSyxRQUlQQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQ0MsQ0FERCxFQUNJO0FBQ1YsYUFBS0wsV0FBTCxHQUFtQkssRUFBRUMsTUFBRixDQUFTQyxHQUE1QjtBQUNBQyxnQkFBUUMsR0FBUixrQkFBMkJKLEVBQUVDLE1BQUYsQ0FBU0ksV0FBcEMsc0JBQWdFTCxFQUFFQyxNQUFGLENBQVNDLEdBQXpFO0FBQ0Q7QUFKTyxLOzs7Ozs2QkFNRCxDQUNWOzs7O0VBM0JvQyxlQUFLSSxJOztrQkFBckJ0QixPIiwiZmlsZSI6Im15T3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFVucGFpZE9yZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5wYWlkT3JkZXInXG4gIGltcG9ydCBQYXlPcmRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BheU9yZGVyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15T3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXor6bmg4UnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MDQ0JyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJ1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgVW5wYWlkT3JkZXIsXG4gICAgICBQYXlPcmRlcixcbiAgICAgIEFsbFBheU9yZGVyOiBQYXlPcmRlclxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICB0YWJzOiBbe3RpdGxlOiAn5pyq5LuY5qy+J30se3RpdGxlOiAn5bey5LuY5qy+J30se3RpdGxlOiAn5YWo6YOoJ31dXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkNsaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBlLmRldGFpbC5rZXlcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gIH1cbn1cblxuIl19