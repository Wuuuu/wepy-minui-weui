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

var _subjectBox = require('./../../components/subjectBox.js');

var _subjectBox2 = _interopRequireDefault(_subjectBox);

var _teacher = require('./../../services/teacher/teacher.js');

var services_teacher_detail = _interopRequireWildcard(_teacher);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeacherDetail = function (_wepy$page) {
  _inherits(TeacherDetail, _wepy$page);

  function TeacherDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeacherDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeacherDetail.__proto__ || Object.getPrototypeOf(TeacherDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '老师详情',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel'
      }
    }, _this.$repeat = {}, _this.$props = { "Comment": { "v-bind:comments.sync": "comments" }, "SubjectBox": { "xmlns:v-bind": "", "v-bind:subjectData.sync": "subjects" } }, _this.$events = {}, _this.components = {
      Comment: _comment2.default,
      SubjectBox: _subjectBox2.default
    }, _this.data = {
      entity: null,
      tabs: [{ title: '简介' }, { title: '课程' }, { title: '评价' }],
      activeIndex: 0,
      comments: [],
      subjects: [],
      id: null
    }, _this.methods = {
      onClick: function onClick(e) {
        this.activeIndex = e.detail.key;
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      handleToCourseEvalution: function handleToCourseEvalution() {
        var entity = this.data.entity;

        var data = {
          name: entity.name,
          // photo: entity.photo,
          id: entity.id,
          objType: 'teach_person',
          photo: entity.photo
        };
        this.$navigate('/pages/scheduleDetail/courseEvaluation', _extends({}, data));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TeacherDetail, [{
    key: 'onLoad',
    value: function onLoad(params) {

      var self = this;
      self.id = params.id;
      self.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      services_teacher_detail.info({
        params: {
          id: self.id,
          _info: 'teacher_subjects.comment<student>.subjects<course>'
        },
        success: function success(res) {
          self.entity = res;
          console.log(res);
          self.comments = res.comments;
          self.subjects = res.subjects;
          self.$apply();
        }
      });
    }
  }]);

  return TeacherDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(TeacherDetail , 'pages/teacher/teacherDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJEZXRhaWwuanMiXSwibmFtZXMiOlsic2VydmljZXNfdGVhY2hlcl9kZXRhaWwiLCJUZWFjaGVyRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ29tbWVudCIsIlN1YmplY3RCb3giLCJkYXRhIiwiZW50aXR5IiwidGFicyIsInRpdGxlIiwiYWN0aXZlSW5kZXgiLCJjb21tZW50cyIsInN1YmplY3RzIiwiaWQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJkZXRhaWwiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50SWQiLCJoYW5kbGVUb0NvdXJzZUV2YWx1dGlvbiIsIm5hbWUiLCJvYmpUeXBlIiwicGhvdG8iLCIkbmF2aWdhdGUiLCJwYXJhbXMiLCJzZWxmIiwiJGFwcGx5IiwiaW5mbyIsIl9pbmZvIiwic3VjY2VzcyIsInJlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7SUFBWUEsdUI7Ozs7Ozs7Ozs7OztJQUVTQyxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyx1QkFBaUI7QUFDZix3QkFBZ0IsK0NBREQ7QUFFZixtQkFBVywwQ0FGSTtBQUdmLHlCQUFpQjtBQUhGO0FBSlYsSyxRQVVWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsd0JBQXVCLFVBQXhCLEVBQVgsRUFBK0MsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixVQUE3QyxFQUE1RCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnQ0FEUTtBQUVSQztBQUZRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxZQUFNLENBQUMsRUFBQ0MsT0FBTyxJQUFSLEVBQUQsRUFDSixFQUFFQSxPQUFPLElBQVQsRUFESSxFQUVKLEVBQUVBLE9BQU8sSUFBVCxFQUZJLENBRkQ7QUFLTEMsbUJBQWEsQ0FMUjtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLGdCQUFVLEVBUEw7QUFRTEMsVUFBSTtBQVJDLEssUUFVUEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0NDLENBREQsRUFDSTtBQUNWLGFBQUtOLFdBQUwsR0FBbUJNLEVBQUVDLE1BQUYsQ0FBU0MsR0FBNUI7QUFDQUMsZ0JBQVFDLEdBQVIsa0JBQTJCSixFQUFFQyxNQUFGLENBQVNJLFdBQXBDLHNCQUFnRUwsRUFBRUMsTUFBRixDQUFTQyxHQUF6RTtBQUNELE9BSk87QUFLUkksNkJBTFEscUNBS21CO0FBQUEsWUFDbEJmLE1BRGtCLEdBQ1IsS0FBS0QsSUFERyxDQUNsQkMsTUFEa0I7O0FBRXpCLFlBQU1ELE9BQU87QUFDWGlCLGdCQUFNaEIsT0FBT2dCLElBREY7QUFFWDtBQUNBVixjQUFJTixPQUFPTSxFQUhBO0FBSVhXLG1CQUFTLGNBSkU7QUFLWEMsaUJBQU9sQixPQUFPa0I7QUFMSCxTQUFiO0FBT0EsYUFBS0MsU0FBTCx3REFBNkRwQixJQUE3RDtBQUNEO0FBZk8sSzs7Ozs7MkJBaUJIcUIsTSxFQUFROztBQUViLFVBQUlDLE9BQU8sSUFBWDtBQUNBQSxXQUFLZixFQUFMLEdBQVVjLE9BQU9kLEVBQWpCO0FBQ0FlLFdBQUtDLE1BQUw7QUFDRDs7OzZCQUNTO0FBQ1IsVUFBSUQsT0FBTyxJQUFYO0FBQ0FuQyw4QkFBd0JxQyxJQUF4QixDQUE2QjtBQUMzQkgsZ0JBQVE7QUFDTmQsY0FBSWUsS0FBS2YsRUFESDtBQUVMa0IsaUJBQU87QUFGRixTQURtQjtBQUszQkMsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkwsZUFBS3JCLE1BQUwsR0FBYzBCLEdBQWQ7QUFDQWQsa0JBQVFDLEdBQVIsQ0FBWWEsR0FBWjtBQUNBTCxlQUFLakIsUUFBTCxHQUFnQnNCLElBQUl0QixRQUFwQjtBQUNBaUIsZUFBS2hCLFFBQUwsR0FBZ0JxQixJQUFJckIsUUFBcEI7QUFDQWdCLGVBQUtDLE1BQUw7QUFDRDtBQVgwQixPQUE3QjtBQWFEOzs7O0VBbEV3QyxlQUFLSyxJOztrQkFBM0J4QyxhIiwiZmlsZSI6InRlYWNoZXJEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MZXNzb25EZXRhaWxzL2NvbW1lbnQnXG4gIGltcG9ydCBTdWJqZWN0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3ViamVjdEJveCdcblxuICBpbXBvcnQgKiBhcyBzZXJ2aWNlc190ZWFjaGVyX2RldGFpbCBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZWFjaGVyL3RlYWNoZXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlckRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iAgeW4iOivpuaDhScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtbG9hZG1vcmUnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkbW9yZS9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnXG4gICAgICB9XG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDb21tZW50XCI6e1widi1iaW5kOmNvbW1lbnRzLnN5bmNcIjpcImNvbW1lbnRzXCJ9LFwiU3ViamVjdEJveFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3ViamVjdERhdGEuc3luY1wiOlwic3ViamVjdHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ29tbWVudCxcbiAgICAgIFN1YmplY3RCb3hcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGVudGl0eTogbnVsbCxcbiAgICAgIHRhYnM6IFt7dGl0bGU6ICfnroDku4snfSxcbiAgICAgICAgeyB0aXRsZTogJ+ivvueoiyd9LFxuICAgICAgICB7IHRpdGxlOiAn6K+E5Lu3J31dLFxuICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICBjb21tZW50czogW10sXG4gICAgICBzdWJqZWN0czogW10sXG4gICAgICBpZDogbnVsbCxcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGUuZGV0YWlsLmtleVxuICAgICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApXG4gICAgICB9LFxuICAgICAgaGFuZGxlVG9Db3Vyc2VFdmFsdXRpb24gKCkge1xuICAgICAgICBjb25zdCB7ZW50aXR5fSA9IHRoaXMuZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIG5hbWU6IGVudGl0eS5uYW1lLFxuICAgICAgICAgIC8vIHBob3RvOiBlbnRpdHkucGhvdG8sXG4gICAgICAgICAgaWQ6IGVudGl0eS5pZCxcbiAgICAgICAgICBvYmpUeXBlOiAndGVhY2hfcGVyc29uJyxcbiAgICAgICAgICBwaG90bzogZW50aXR5LnBob3RvXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoYC9wYWdlcy9zY2hlZHVsZURldGFpbC9jb3Vyc2VFdmFsdWF0aW9uYCwgey4uLmRhdGF9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQocGFyYW1zKSB7XG5cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pZCA9IHBhcmFtcy5pZFxuICAgICAgc2VsZi4kYXBwbHkoKVxuICAgIH1cbiAgICBvblNob3cgKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZXJ2aWNlc190ZWFjaGVyX2RldGFpbC5pbmZvKHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuaWQsXG4gICAgICAgICAgIF9pbmZvOiAndGVhY2hlcl9zdWJqZWN0cy5jb21tZW50PHN0dWRlbnQ+LnN1YmplY3RzPGNvdXJzZT4nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBzZWxmLmVudGl0eSA9IHJlc1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICBzZWxmLmNvbW1lbnRzID0gcmVzLmNvbW1lbnRzXG4gICAgICAgICAgc2VsZi5zdWJqZWN0cyA9IHJlcy5zdWJqZWN0c1xuICAgICAgICAgIHNlbGYuJGFwcGx5KCkgXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIFxuXG4iXX0=