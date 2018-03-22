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

var SubjectBox = function (_wepy$component) {
  _inherits(SubjectBox, _wepy$component);

  function SubjectBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SubjectBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SubjectBox.__proto__ || Object.getPrototypeOf(SubjectBox)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      subjectData: {
        type: Array,
        default: []
      }
    }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SubjectBox, [{
    key: 'onLoad',
    value: function onLoad(e) {}
  }]);

  return SubjectBox;
}(_wepy2.default.component);

exports.default = SubjectBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3RCb3guanMiXSwibmFtZXMiOlsiU3ViamVjdEJveCIsInByb3BzIiwic3ViamVjdERhdGEiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiZGF0YSIsIm1ldGhvZHMiLCJlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsSyxHQUFRO0FBQ05DLG1CQUFhO0FBQ1hDLGNBQU1DLEtBREs7QUFFWEMsaUJBQVM7QUFGRTtBQURQLEssUUFNUkMsSSxHQUFPLEUsUUFDUEMsTyxHQUFVLEU7Ozs7OzJCQUdGQyxDLEVBQUcsQ0FDVjs7OztFQVpxQyxlQUFLQyxTOztrQkFBeEJULFUiLCJmaWxlIjoic3ViamVjdEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdEJveCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgc3ViamVjdERhdGE6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogW11cbiAgICB9XG4gIH1cbiAgZGF0YSA9IHt9XG4gIG1ldGhvZHMgPSB7XG4gIH1cblxuICBvbkxvYWQgKGUpIHtcbiAgfVxufVxuIl19