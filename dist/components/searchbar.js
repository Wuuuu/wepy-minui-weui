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

var SearchBar = function (_wepy$component) {
  _inherits(SearchBar, _wepy$component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      back: {},
      inputVal: {
        twoWay: true
      },
      placeholder: {
        default: '搜索'
      }
    }, _this.data = {
      isBack: false,
      hideText: '取消',
      inputShowed: false
    }, _this.computed = {
      isBack: function isBack() {
        return this.back == 'true';
      }
    }, _this.methods = {
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        if (this.isBack) {
          this.$emit('back');
        } else {
          this.inputVal = '';
          this.inputShowed = false;
          this.$emit('input', null);
        }
      },
      clearInput: function clearInput() {
        this.inputVal = '';
        this.$emit('input', null);
      },
      inputTyping: function inputTyping(e) {
        var input = e.detail.value;
        this.inputVal = input;
        this.$emit('input', input);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'onLoad',
    value: function onLoad() {
      if (this.isBack) {
        this.inputShowed = true;
        this.hideText = '返回';
      }
    }
  }]);

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsImJhY2siLCJpbnB1dFZhbCIsInR3b1dheSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdCIsImRhdGEiLCJpc0JhY2siLCJoaWRlVGV4dCIsImlucHV0U2hvd2VkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2hvd0lucHV0IiwiaGlkZUlucHV0IiwiJGVtaXQiLCJjbGVhcklucHV0IiwiaW5wdXRUeXBpbmciLCJlIiwiaW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNLEVBREE7QUFFTkMsZ0JBQVU7QUFDUkMsZ0JBQVE7QUFEQSxPQUZKO0FBS05DLG1CQUFhO0FBQ1hDLGlCQUFTO0FBREU7QUFMUCxLLFFBU1JDLEksR0FBTztBQUNMQyxjQUFRLEtBREg7QUFFTEMsZ0JBQVUsSUFGTDtBQUdMQyxtQkFBYTtBQUhSLEssUUFXUEMsUSxHQUFXO0FBQ1RILFlBRFMsb0JBQ0E7QUFDUCxlQUFPLEtBQUtOLElBQUwsSUFBYSxNQUFwQjtBQUNEO0FBSFEsSyxRQUtYVSxPLEdBQVU7QUFDUkMsaUJBQVcscUJBQVk7QUFDckIsYUFBS0gsV0FBTCxHQUFtQixJQUFuQjtBQUNELE9BSE87QUFJUkksaUJBQVcscUJBQVk7QUFDckIsWUFBSSxLQUFLTixNQUFULEVBQWlCO0FBQ2YsZUFBS08sS0FBTCxDQUFXLE1BQVg7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLWixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsZUFBS08sV0FBTCxHQUFtQixLQUFuQjtBQUNBLGVBQUtLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO0FBQ0Q7QUFDRixPQVpPO0FBYVJDLGtCQUFZLHNCQUFZO0FBQ3RCLGFBQUtiLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLWSxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtBQUNELE9BaEJPO0FBaUJSRSxtQkFBYSxxQkFBVUMsQ0FBVixFQUFhO0FBQ3hCLFlBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0MsS0FBdkI7QUFDQSxhQUFLbEIsUUFBTCxHQUFnQmdCLEtBQWhCO0FBQ0EsYUFBS0osS0FBTCxDQUFXLE9BQVgsRUFBb0JJLEtBQXBCO0FBQ0Q7QUFyQk8sSyxRQXVCVkcsTSxHQUFTLEU7Ozs7OzZCQWxDQTtBQUNQLFVBQUksS0FBS2QsTUFBVCxFQUFpQjtBQUNmLGFBQUtFLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxhQUFLRCxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUFDRjs7OztFQXBCb0MsZUFBS2MsUzs7a0JBQXZCdkIsUyIsImZpbGUiOiJzZWFyY2hiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgYmFjazoge30sXG4gICAgICBpbnB1dFZhbDoge1xuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICBkZWZhdWx0OiAn5pCc57SiJ1xuICAgICAgfVxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIGlzQmFjazogZmFsc2UsXG4gICAgICBoaWRlVGV4dDogJ+WPlua2iCcsXG4gICAgICBpbnB1dFNob3dlZDogZmFsc2VcbiAgICB9O1xuICAgIG9uTG9hZCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQmFjaykge1xuICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oaWRlVGV4dCA9ICfov5Tlm54nO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlzQmFjaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFjayA9PSAndHJ1ZSc7XG4gICAgICB9XG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd0lucHV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIGhpZGVJbnB1dDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0JhY2spIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdiYWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnO1xuICAgICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2xlYXJJbnB1dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0VmFsID0gJyc7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgbnVsbCk7XG4gICAgICB9LFxuICAgICAgaW5wdXRUeXBpbmc6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgIHRoaXMuaW5wdXRWYWwgPSBpbnB1dDtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBpbnB1dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBldmVudHMgPSB7fVxuICB9XG4iXX0=