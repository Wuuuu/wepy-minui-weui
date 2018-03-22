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

var TeacherList = function (_wepy$component) {
  _inherits(TeacherList, _wepy$component);

  function TeacherList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeacherList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeacherList.__proto__ || Object.getPrototypeOf(TeacherList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      teacherData: {
        type: Array,
        default: []
      }
    }, _this.data = {}, _this.methods = {
      toTeacherDetail: function toTeacherDetail(e) {
        var self = this;
        var id = e.currentTarget.dataset.id;

        wx.navigateTo({
          url: '/pages/teacher/teacherDetail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TeacherList, [{
    key: 'onLoad',
    value: function onLoad(e) {
      var self = this;
    }
  }]);

  return TeacherList;
}(_wepy2.default.component);

exports.default = TeacherList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJMaXN0LmpzIl0sIm5hbWVzIjpbIlRlYWNoZXJMaXN0IiwicHJvcHMiLCJ0ZWFjaGVyRGF0YSIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJkYXRhIiwibWV0aG9kcyIsInRvVGVhY2hlckRldGFpbCIsImUiLCJzZWxmIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBUTtBQUNOQyxtQkFBYTtBQUNYQyxjQUFNQyxLQURLO0FBRVhDLGlCQUFTO0FBRkU7QUFEUCxLLFFBTVJDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNSQyxxQkFEUSwyQkFDU0MsQ0FEVCxFQUNZO0FBQ2xCLFlBQUlDLE9BQU8sSUFBWDtBQURrQixZQUVWQyxFQUZVLEdBRUhGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BRmIsQ0FFVkYsRUFGVTs7QUFHbEJHLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxvREFBd0NMO0FBRDVCLFNBQWQ7QUFHRDtBQVBPLEs7Ozs7OzJCQVVGRixDLEVBQUc7QUFDVCxVQUFJQyxPQUFPLElBQVg7QUFDRDs7OztFQXBCc0MsZUFBS08sUzs7a0JBQXpCakIsVyIsImZpbGUiOiJ0ZWFjaGVyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlckxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHRlYWNoZXJEYXRhOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IFtdXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIHRvVGVhY2hlckRldGFpbCAoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzIFxuICAgICAgY29uc3QgeyBpZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvdGVhY2hlci90ZWFjaGVyRGV0YWlsP2lkPSR7aWR9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQgKGUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgfVxufVxuIl19