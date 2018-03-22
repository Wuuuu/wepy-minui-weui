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

var RecommendNav = function (_wepy$component) {
  _inherits(RecommendNav, _wepy$component);

  function RecommendNav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RecommendNav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RecommendNav.__proto__ || Object.getPrototypeOf(RecommendNav)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RecommendNav, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
    }
  }]);

  return RecommendNav;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    msg: {},
    isShow: {
      type: Boolean,
      default: false
    }
  };
  this.data = {};
  this.methods = {
    toView: function toView() {
      wx.navigateTo({
        url: './' + this.msg.page + '/' + this.msg.page
      });
    }
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};

exports.default = RecommendNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZE5hdi5qcyJdLCJuYW1lcyI6WyJSZWNvbW1lbmROYXYiLCJ0aGF0IiwiY29tcG9uZW50IiwicHJvcHMiLCJtc2ciLCJpc1Nob3ciLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJkYXRhIiwibWV0aG9kcyIsInRvVmlldyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBc0JUO0FBQ1IsVUFBSUMsT0FBTyxJQUFYO0FBQ0Q7Ozs7RUF4QnVDLGVBQUtDLFM7Ozs7O09BQzdDQyxLLEdBQVE7QUFDTkMsU0FBSyxFQURDO0FBRU5DLFlBQVE7QUFDTkMsWUFBTUMsT0FEQTtBQUVOQyxlQUFTO0FBRkg7QUFGRixHO09BT1JDLEksR0FBTyxFO09BQ1BDLE8sR0FBVTtBQUNSQyxVQURRLG9CQUNFO0FBQ1JDLFNBQUdDLFVBQUgsQ0FBYztBQUNaQyxvQkFBVSxLQUFLVixHQUFMLENBQVNXLElBQW5CLFNBQTJCLEtBQUtYLEdBQUwsQ0FBU1c7QUFEeEIsT0FBZDtBQUdEO0FBTE8sRztPQU9WQyxNLEdBQVM7QUFDUCx1QkFBbUIsMEJBQWE7QUFBQTs7QUFDOUIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBZSxPQUFLQyxLQUFwQixpQkFBcUNKLE9BQU9LLElBQTVDLGNBQXlETCxPQUFPTSxNQUFQLENBQWNGLEtBQXZFO0FBQ0Q7QUFKTSxHOzs7a0JBaEJVckIsWSIsImZpbGUiOiJyZWNvbW1lbmROYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29tbWVuZE5hdiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbXNnOiB7fSxcbiAgICBpc1Nob3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfVxuICBkYXRhID0ge31cbiAgbWV0aG9kcyA9IHtcbiAgICB0b1ZpZXcgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vJHt0aGlzLm1zZy5wYWdlfS8ke3RoaXMubXNnLnBhZ2V9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge1xuICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgIH1cbiAgfVxuICBvbkxvYWQgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICB9XG59XG4iXX0=