'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _comment = require('./../../components/LessonDetails/comment.js');

var _comment2 = _interopRequireDefault(_comment);

var _moment = require('./../../utils/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _schedule = require('./../../services/schedule/schedule.js');

var services_schedule_detail = _interopRequireWildcard(_schedule);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScheduleDetail = function (_wepy$page) {
  _inherits(ScheduleDetail, _wepy$page);

  function ScheduleDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScheduleDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScheduleDetail.__proto__ || Object.getPrototypeOf(ScheduleDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '课表详情',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044'
    }, _this.$repeat = {}, _this.$props = { "Comment": { "class": "comment", "xmlns:v-bind": "", "v-bind:comments.sync": "comments" } }, _this.$events = {}, _this.components = {
      Comment: _comment2.default
    }, _this.data = {
      id: '',
      entity: null,
      date: null,
      startTime: null,
      endTime: null,
      comments: []
    }, _this.methods = {
      handleToCourseEvalution: function handleToCourseEvalution() {
        var entity = this.data.entity;

        entity.objType = 'teach_schedule';
        console.log('entity', entity);
        this.$navigate('./courseEvaluation', _extends({}, entity));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScheduleDetail, [{
    key: 'onLoad',
    value: function onLoad(params) {
      var self = this;
      var time = (0, _moment2.default)().format('YYYY-MM-DD');
      self.id = params.id;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      services_schedule_detail.info({
        params: {
          id: self.id,
          _info: 'school.course.comments<student>.teacher.classroom'
        },
        success: function success(res) {
          var courseDate = res.startTime;
          var startTime = res.startTime;
          var endTime = res.endTime;
          var date = (0, _moment2.default)(courseDate).format('YYYY-MM-DD');
          var coursestartTime = (0, _moment2.default)(startTime).format('HH:mm');
          var courseendTime = (0, _moment2.default)(endTime).format('HH:mm');
          self.entity = res;
          self.date = date;
          self.startTime = coursestartTime;
          self.endTime = courseendTime;
          self.comments = res.comments;
          self.$apply();
        }
      });
    }
  }]);

  return ScheduleDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ScheduleDetail , 'pages/scheduleDetail/scheduleDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlRGV0YWlsLmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzX3NjaGVkdWxlX2RldGFpbCIsIlNjaGVkdWxlRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ29tbWVudCIsImRhdGEiLCJpZCIsImVudGl0eSIsImRhdGUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiY29tbWVudHMiLCJtZXRob2RzIiwiaGFuZGxlVG9Db3Vyc2VFdmFsdXRpb24iLCJvYmpUeXBlIiwiY29uc29sZSIsImxvZyIsIiRuYXZpZ2F0ZSIsInBhcmFtcyIsInNlbGYiLCJ0aW1lIiwiZm9ybWF0IiwiaW5mbyIsIl9pbmZvIiwic3VjY2VzcyIsInJlcyIsImNvdXJzZURhdGUiLCJjb3Vyc2VzdGFydFRpbWUiLCJjb3Vyc2VlbmRUaW1lIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSx3Qjs7Ozs7Ozs7Ozs7O0lBRVNDLGM7Ozs7Ozs7Ozs7Ozs7O3NNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCO0FBSHZCLEssUUFLVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLFNBQVEsU0FBVCxFQUFtQixnQkFBZSxFQUFsQyxFQUFxQyx3QkFBdUIsVUFBNUQsRUFBWCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsSSxHQUFPO0FBQ0xDLFVBQUksRUFEQztBQUVMQyxjQUFRLElBRkg7QUFHTEMsWUFBTSxJQUhEO0FBSUxDLGlCQUFXLElBSk47QUFLTEMsZUFBUyxJQUxKO0FBTUxDLGdCQUFVO0FBTkwsSyxRQVFQQyxPLEdBQVU7QUFDUkMsNkJBRFEscUNBQ21CO0FBQUEsWUFDakJOLE1BRGlCLEdBQ04sS0FBS0YsSUFEQyxDQUNqQkUsTUFEaUI7O0FBRXpCQSxlQUFPTyxPQUFQLEdBQWlCLGdCQUFqQjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBcUJULE1BQXJCO0FBQ0EsYUFBS1UsU0FBTCxvQ0FBeUNWLE1BQXpDO0FBQ0Q7QUFOTyxLOzs7OzsyQkFRSFcsTSxFQUFRO0FBQ2IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsT0FBTyx3QkFBU0MsTUFBVCxDQUFnQixZQUFoQixDQUFYO0FBQ0FGLFdBQUtiLEVBQUwsR0FBVVksT0FBT1osRUFBakI7QUFDRDs7OzZCQUNTO0FBQ1IsVUFBSWEsT0FBTyxJQUFYO0FBQ0F6QiwrQkFBeUI0QixJQUF6QixDQUE4QjtBQUM1QkosZ0JBQVE7QUFDTlosY0FBSWEsS0FBS2IsRUFESDtBQUVOaUIsaUJBQU87QUFGRCxTQURvQjtBQUs1QkMsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixjQUFJQyxhQUFhRCxJQUFJaEIsU0FBckI7QUFDQSxjQUFJQSxZQUFZZ0IsSUFBSWhCLFNBQXBCO0FBQ0EsY0FBSUMsVUFBVWUsSUFBSWYsT0FBbEI7QUFDQSxjQUFJRixPQUFPLHNCQUFPa0IsVUFBUCxFQUFtQkwsTUFBbkIsQ0FBMEIsWUFBMUIsQ0FBWDtBQUNBLGNBQUlNLGtCQUFrQixzQkFBT2xCLFNBQVAsRUFBa0JZLE1BQWxCLENBQXlCLE9BQXpCLENBQXRCO0FBQ0EsY0FBSU8sZ0JBQWdCLHNCQUFPbEIsT0FBUCxFQUFnQlcsTUFBaEIsQ0FBdUIsT0FBdkIsQ0FBcEI7QUFDQUYsZUFBS1osTUFBTCxHQUFja0IsR0FBZDtBQUNBTixlQUFLWCxJQUFMLEdBQVlBLElBQVo7QUFDQVcsZUFBS1YsU0FBTCxHQUFpQmtCLGVBQWpCO0FBQ0FSLGVBQUtULE9BQUwsR0FBZWtCLGFBQWY7QUFDQVQsZUFBS1IsUUFBTCxHQUFnQmMsSUFBSWQsUUFBcEI7QUFDQVEsZUFBS1UsTUFBTDtBQUNEO0FBbEIyQixPQUE5QjtBQW9CRDs7OztFQXZEeUMsZUFBS0MsSTs7a0JBQTVCbkMsYyIsImZpbGUiOiJzY2hlZHVsZURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ29tbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xlc3NvbkRldGFpbHMvY29tbWVudCdcbiAgaW1wb3J0IG1vbWVudCBmcm9tICcuLi8uLi91dGlscy9tb21lbnQnXG4gIGltcG9ydCAqIGFzIHNlcnZpY2VzX3NjaGVkdWxlX2RldGFpbCBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY2hlZHVsZS9zY2hlZHVsZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTY2hlZHVsZURldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivvuihqOivpuaDhScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDb21tZW50XCI6e1wiY2xhc3NcIjpcImNvbW1lbnRcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29tbWVudHMuc3luY1wiOlwiY29tbWVudHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ29tbWVudFxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgZW50aXR5OiBudWxsLFxuICAgICAgZGF0ZTogbnVsbCxcbiAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgIGVuZFRpbWU6IG51bGwsXG4gICAgICBjb21tZW50czogW11cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVRvQ291cnNlRXZhbHV0aW9uICgpIHtcbiAgICAgICAgY29uc3QgeyBlbnRpdHkgfSA9IHRoaXMuZGF0YVxuICAgICAgICBlbnRpdHkub2JqVHlwZSA9ICd0ZWFjaF9zY2hlZHVsZSdcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGl0eScsZW50aXR5KVxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgLi9jb3Vyc2VFdmFsdWF0aW9uYCwgey4uLmVudGl0eX0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZChwYXJhbXMpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHRpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgc2VsZi5pZCA9IHBhcmFtcy5pZFxuICAgIH1cbiAgICBvblNob3cgKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzIFxuICAgICAgc2VydmljZXNfc2NoZWR1bGVfZGV0YWlsLmluZm8oe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogc2VsZi5pZCxcbiAgICAgICAgICBfaW5mbzogJ3NjaG9vbC5jb3Vyc2UuY29tbWVudHM8c3R1ZGVudD4udGVhY2hlci5jbGFzc3Jvb20nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBsZXQgY291cnNlRGF0ZSA9IHJlcy5zdGFydFRpbWVcbiAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gcmVzLnN0YXJ0VGltZVxuICAgICAgICAgIGxldCBlbmRUaW1lID0gcmVzLmVuZFRpbWVcbiAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChjb3Vyc2VEYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICAgIGxldCBjb3Vyc2VzdGFydFRpbWUgPSBtb21lbnQoc3RhcnRUaW1lKS5mb3JtYXQoJ0hIOm1tJylcbiAgICAgICAgICBsZXQgY291cnNlZW5kVGltZSA9IG1vbWVudChlbmRUaW1lKS5mb3JtYXQoJ0hIOm1tJylcbiAgICAgICAgICBzZWxmLmVudGl0eSA9IHJlc1xuICAgICAgICAgIHNlbGYuZGF0ZSA9IGRhdGVcbiAgICAgICAgICBzZWxmLnN0YXJ0VGltZSA9IGNvdXJzZXN0YXJ0VGltZVxuICAgICAgICAgIHNlbGYuZW5kVGltZSA9IGNvdXJzZWVuZFRpbWVcbiAgICAgICAgICBzZWxmLmNvbW1lbnRzID0gcmVzLmNvbW1lbnRzXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4iXX0=