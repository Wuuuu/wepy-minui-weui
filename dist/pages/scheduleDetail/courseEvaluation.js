'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ratingStar = require('./../../components/ratingStar.js');

var _ratingStar2 = _interopRequireDefault(_ratingStar);

var _moment = require('./../../utils/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _config = require('./../../config/config.js');

var _config2 = _interopRequireDefault(_config);

var _schedule = require('./../../services/schedule/schedule.js');

var services_schedule_detail = _interopRequireWildcard(_schedule);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import * as services_schedule_comment from '../../services/schedule/schedule'

var CourseEvalutaion = function (_wepy$page) {
  _inherits(CourseEvalutaion, _wepy$page);

  function CourseEvalutaion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CourseEvalutaion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CourseEvalutaion.__proto__ || Object.getPrototypeOf(CourseEvalutaion)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '课程评价',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {}
    }, _this.$repeat = {}, _this.$props = { "RatingStar": { "class": "rating-com", "xmlns:v-bind": "", "v-bind:star.once": "star" } }, _this.$events = {}, _this.components = {
      RatingStar: _ratingStar2.default
    }, _this.data = {
      maxlength: 200,
      inputLen: 0,
      entity: {
        objType: '',
        objId: '', // 课程Id
        Content: '', // 评价内容
        stars: ''
      },
      courseDetail: '',
      teacherDetail: '',
      date: null,
      startTime: null,
      endTime: null,
      star: 0
    }, _this.methods = {
      handleInputLen: function handleInputLen(e) {
        var self = this;
        var entity = self.data.entity;

        var value = e.detail.value;
        self.inputLen = value.length;
        entity.Content = value;
        self.entity = entity;
        self.$apply();
      },
      handleSubmitComment: function handleSubmitComment() {
        var self = this;
        _wepy2.default.showLoading({
          title: '提交中...'
        });
        var _self$data = self.data,
            entity = _self$data.entity,
            star = _self$data.star;

        var unionuser = _config2.default.getUnionuser();
        entity.stars = self.star;
        entity.studentId = unionuser.id;
        console.log(entity);
        if (entity.Content.length > 0) {
          services_schedule_detail.addcomment({
            data: _extends({}, entity),
            success: function success(res) {
              console.log(res);
              _wepy2.default.hideLoading();
            },
            complete: function complete() {
              _wepy2.default.showToast({
                title: '提交成功',
                icon: 'success',
                duration: 1500
              });
              setTimeout(function () {
                _wepy2.default.navigateBack();
              }, 1500);
            }
          });
        } else {
          _wepy2.default.showToast({
            title: '评论不能为空',
            duration: 2000
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CourseEvalutaion, [{
    key: 'onLoad',
    value: function onLoad(params) {
      var self = this;
      self.entity.objId = params.id;
      self.entity.objType = params.objType;
      console.log('params', params);
      if (params.objType == 'teach_schedule') {
        services_schedule_detail.info({
          params: {
            id: params.id,
            _info: 'school.course.comments<student>.teacher.classroom'
          },
          success: function success(res) {
            var courseDate = res.startTime;
            var startTime = res.startTime;
            var endTime = res.endTime;
            var date = (0, _moment2.default)(courseDate).format('YYYY-MM-DD');
            var coursestartTime = (0, _moment2.default)(startTime).format('HH:mm');
            var courseendTime = (0, _moment2.default)(endTime).format('HH:mm');
            self.courseDetail = res;
            self.date = date;
            self.startTime = coursestartTime;
            self.endTime = courseendTime;
            self.comments = res.comments;
            self.$apply();
          }
        });
      }
      if (params.objType == 'teach_person') {
        self.teacherDetail = params;
        self.$apply();
      }
      self.$apply();
    }
  }]);

  return CourseEvalutaion;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(CourseEvalutaion , 'pages/scheduleDetail/courseEvaluation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZUV2YWx1YXRpb24uanMiXSwibmFtZXMiOlsic2VydmljZXNfc2NoZWR1bGVfZGV0YWlsIiwiQ291cnNlRXZhbHV0YWlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlJhdGluZ1N0YXIiLCJkYXRhIiwibWF4bGVuZ3RoIiwiaW5wdXRMZW4iLCJlbnRpdHkiLCJvYmpUeXBlIiwib2JqSWQiLCJDb250ZW50Iiwic3RhcnMiLCJjb3Vyc2VEZXRhaWwiLCJ0ZWFjaGVyRGV0YWlsIiwiZGF0ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJzdGFyIiwibWV0aG9kcyIsImhhbmRsZUlucHV0TGVuIiwiZSIsInNlbGYiLCJ2YWx1ZSIsImRldGFpbCIsImxlbmd0aCIsIiRhcHBseSIsImhhbmRsZVN1Ym1pdENvbW1lbnQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwidW5pb251c2VyIiwiZ2V0VW5pb251c2VyIiwic3R1ZGVudElkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiYWRkY29tbWVudCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsImNvbXBsZXRlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsIm5hdmlnYXRlQmFjayIsInBhcmFtcyIsImluZm8iLCJfaW5mbyIsImNvdXJzZURhdGUiLCJmb3JtYXQiLCJjb3Vyc2VzdGFydFRpbWUiLCJjb3Vyc2VlbmRUaW1lIiwiY29tbWVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsd0I7Ozs7Ozs7Ozs7OztBQUNaOztJQUVxQkMsZ0I7Ozs7Ozs7Ozs7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TDtBQUVOZSxtQkFBTztBQUZELFdBRG9CO0FBSzVCWCxtQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGdCQUFJVyxhQUFhWCxJQUFJdEIsU0FBckI7QUFDQSxnQkFBSUEsWUFBWXNCLElBQUl0QixTQUFwQjtBQUNBLGdCQUFJQyxVQUFVcUIsSUFBSXJCLE9BQWxCO0FBQ0EsZ0JBQUlGLE9BQU8sc0JBQU9rQyxVQUFQLEVBQW1CQyxNQUFuQixDQUEwQixZQUExQixDQUFYO0FBQ0EsZ0JBQUlDLGtCQUFrQixzQkFBT25DLFNBQVAsRUFBa0JrQyxNQUFsQixDQUF5QixPQUF6QixDQUF0QjtBQUNBLGdCQUFJRSxnQkFBZ0Isc0JBQU9uQyxPQUFQLEVBQWdCaUMsTUFBaEIsQ0FBdUIsT0FBdkIsQ0FBcEI7QUFDQTVCLGlCQUFLVCxZQUFMLEdBQW9CeUIsR0FBcEI7QUFDQWhCLGlCQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDQU8saUJBQUtOLFNBQUwsR0FBaUJtQyxlQUFqQjtBQUNBN0IsaUJBQUtMLE9BQUwsR0FBZW1DLGFBQWY7QUFDQTlCLGlCQUFLK0IsUUFBTCxHQUFnQmYsSUFBSWUsUUFBcEI7QUFDQS9CLGlCQUFLSSxNQUFMO0FBQ0Q7QUFsQjJCLFNBQTlCO0FBb0JEO0FBQ0QsVUFBSW9CLE9BQU9yQyxPQUFQLElBQWtCLGNBQXRCLEVBQXNDO0FBQ3BDYSxhQUFLUixhQUFMLEdBQXFCZ0MsTUFBckI7QUFDQXhCLGFBQUtJLE1BQUw7QUFDRDtBQUNESixXQUFLSSxNQUFMO0FBQ0Q7Ozs7RUE1RzJDLGVBQUs0QixJOztrQkFBOUI1RCxnQiIsImZpbGUiOiJjb3Vyc2VFdmFsdWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBSYXRpbmdTdGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmF0aW5nU3RhcidcbiAgaW1wb3J0IG1vbWVudCBmcm9tICcuLi8uLi91dGlscy9tb21lbnQnXG4gIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZydcbiAgaW1wb3J0ICogYXMgc2VydmljZXNfc2NoZWR1bGVfZGV0YWlsIGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVkdWxlL3NjaGVkdWxlJ1xuICAvLyBpbXBvcnQgKiBhcyBzZXJ2aWNlc19zY2hlZHVsZV9jb21tZW50IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NjaGVkdWxlL3NjaGVkdWxlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJzZUV2YWx1dGFpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor77nqIvor4Tku7cnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MDQ0JyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgfVxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUmF0aW5nU3RhclwiOntcImNsYXNzXCI6XCJyYXRpbmctY29tXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnN0YXIub25jZVwiOlwic3RhclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBSYXRpbmdTdGFyXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBtYXhsZW5ndGg6IDIwMCxcbiAgICAgIGlucHV0TGVuOiAwLFxuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG9ialR5cGU6ICcnLFxuICAgICAgICBvYmpJZDogJycsICAvLyDor77nqItJZFxuICAgICAgICBDb250ZW50OiAnJywgLy8g6K+E5Lu35YaF5a65XG4gICAgICAgIHN0YXJzOiAnJyxcbiAgICAgIH0sXG4gICAgICBjb3Vyc2VEZXRhaWw6ICcnLFxuICAgICAgdGVhY2hlckRldGFpbDogJycsXG4gICAgICBkYXRlOiBudWxsLFxuICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgZW5kVGltZTogbnVsbCxcbiAgICAgIHN0YXI6IDBcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUlucHV0TGVuKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHtlbnRpdHl9ID0gc2VsZi5kYXRhXG4gICAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHNlbGYuaW5wdXRMZW4gPSB2YWx1ZS5sZW5ndGhcbiAgICAgICAgZW50aXR5LkNvbnRlbnQgPSB2YWx1ZVxuICAgICAgICBzZWxmLmVudGl0eSA9IGVudGl0eVxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgaGFuZGxlU3VibWl0Q29tbWVudCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcyBcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK0uLi4nXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHtlbnRpdHksIHN0YXJ9ID0gc2VsZi5kYXRhXG4gICAgICAgIGxldCB1bmlvbnVzZXIgPSBjb25maWcuZ2V0VW5pb251c2VyKClcbiAgICAgICAgZW50aXR5LnN0YXJzID0gc2VsZi5zdGFyXG4gICAgICAgIGVudGl0eS5zdHVkZW50SWQgPSB1bmlvbnVzZXIuaWRcbiAgICAgICAgY29uc29sZS5sb2coZW50aXR5KVxuICAgICAgICBpZiggZW50aXR5LkNvbnRlbnQubGVuZ3RoID4gMCl7XG4gICAgICAgICAgc2VydmljZXNfc2NoZWR1bGVfZGV0YWlsLmFkZGNvbW1lbnQoe1xuICAgICAgICAgICAgZGF0YTogeyAuLi5lbnRpdHkgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTmiJDlip8nLFxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9LDE1MDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivhOiuuuS4jeiDveS4uuepuicsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKHBhcmFtcykge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmVudGl0eS5vYmpJZCA9IHBhcmFtcy5pZFxuICAgICAgc2VsZi5lbnRpdHkub2JqVHlwZSA9IHBhcmFtcy5vYmpUeXBlXG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zJyxwYXJhbXMpXG4gICAgICBpZiAocGFyYW1zLm9ialR5cGUgPT0gJ3RlYWNoX3NjaGVkdWxlJykge1xuICAgICAgICBzZXJ2aWNlc19zY2hlZHVsZV9kZXRhaWwuaW5mbyh7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpZDogcGFyYW1zLmlkLFxuICAgICAgICAgICAgX2luZm86ICdzY2hvb2wuY291cnNlLmNvbW1lbnRzPHN0dWRlbnQ+LnRlYWNoZXIuY2xhc3Nyb29tJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXJzZURhdGUgPSByZXMuc3RhcnRUaW1lXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gcmVzLnN0YXJ0VGltZVxuICAgICAgICAgICAgbGV0IGVuZFRpbWUgPSByZXMuZW5kVGltZVxuICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoY291cnNlRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgICAgIGxldCBjb3Vyc2VzdGFydFRpbWUgPSBtb21lbnQoc3RhcnRUaW1lKS5mb3JtYXQoJ0hIOm1tJylcbiAgICAgICAgICAgIGxldCBjb3Vyc2VlbmRUaW1lID0gbW9tZW50KGVuZFRpbWUpLmZvcm1hdCgnSEg6bW0nKVxuICAgICAgICAgICAgc2VsZi5jb3Vyc2VEZXRhaWwgPSByZXNcbiAgICAgICAgICAgIHNlbGYuZGF0ZSA9IGRhdGVcbiAgICAgICAgICAgIHNlbGYuc3RhcnRUaW1lID0gY291cnNlc3RhcnRUaW1lXG4gICAgICAgICAgICBzZWxmLmVuZFRpbWUgPSBjb3Vyc2VlbmRUaW1lXG4gICAgICAgICAgICBzZWxmLmNvbW1lbnRzID0gcmVzLmNvbW1lbnRzXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBcbiAgICAgIGlmIChwYXJhbXMub2JqVHlwZSA9PSAndGVhY2hfcGVyc29uJykge1xuICAgICAgICBzZWxmLnRlYWNoZXJEZXRhaWwgPSBwYXJhbXNcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKVxuICAgIH1cbiAgfVxuXG4iXX0=