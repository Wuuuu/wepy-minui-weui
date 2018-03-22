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

var Comment = function (_wepy$component) {
  _inherits(Comment, _wepy$component);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      comments: {
        type: Array,
        default: []
      }
    }, _this.data = {}, _this.method = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }]);

  return Comment;
}(_wepy2.default.component);

exports.default = Comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsInByb3BzIiwiY29tbWVudHMiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiZGF0YSIsIm1ldGhvZCIsInNlbGYiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsZ0JBQVU7QUFDUkMsY0FBS0MsS0FERztBQUVSQyxpQkFBUztBQUZEO0FBREosSyxRQU9SQyxJLEdBQU8sRSxRQUdQQyxNLEdBQVMsRTs7Ozs7NkJBR0M7QUFDUixVQUFJQyxPQUFPLElBQVg7QUFDRDs7OztFQWhCa0MsZUFBS0MsUzs7a0JBQXJCVCxPIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICB0eXBlOkFycmF5LFxuICAgICAgZGVmYXVsdDogW11cbiAgICB9XG4gIH1cblxuICBkYXRhID0ge1xuICB9XG5cbiAgbWV0aG9kID0ge1xuXG4gIH1cbiAgb25Mb2FkICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXMgXG4gIH1cblxufVxuIl19