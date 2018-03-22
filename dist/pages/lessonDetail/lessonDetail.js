'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _comment = require('./../../components/LessonDetails/comment.js');

var _comment2 = _interopRequireDefault(_comment);

var _recommendNav = require('./../../components/recommendNav.js');

var _recommendNav2 = _interopRequireDefault(_recommendNav);

var _config = require('./../../config/config.js');

var _detail = require('./../../services/lesson/detail.js');

var services_lesson_detail = _interopRequireWildcard(_detail);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LessonDetail = function (_wepy$page) {
  _inherits(LessonDetail, _wepy$page);

  function LessonDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LessonDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LessonDetail.__proto__ || Object.getPrototypeOf(LessonDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '课程详情',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index',
        'wxc-price': '../../packages/@minui/wxc-price/dist/index',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index'
      }
    }, _this.$repeat = {}, _this.$props = { "Comment": { "class": "comment", "xmlns:v-bind": "", "v-bind:comments.sync": "comments" }, "RecommentNav": { "v-bind:msg.once": "recommend", "v-bind:isShow.once": "isShowIcon" } }, _this.$events = {}, _this.components = {
      Comment: _comment2.default,
      RecommentNav: _recommendNav2.default
    }, _this.data = {
      recommend: { title: '教学环境' },
      isShowIcon: true,
      activeIndex: 0,
      entity: null,
      comments: [],
      tabs: [{ title: '简介' }, { title: '老师' }, { title: '评价' }]
    }, _this.methods = {
      onClick: function onClick(e) {
        this.activeIndex = e.detail.key;
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      handleAction: function handleAction(params) {
        var entity = this.data.entity;

        if (params == 'appointment') {
          this.$navigate('/pages/lessonDetail/' + params, entity);
        }
        if (params == 'order') {
          var data = {
            id: entity.id,
            school: entity.course_schools
          };
          console.log('data', data);
          this.$navigate('/pages/lessonDetail/' + params, data);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LessonDetail, [{
    key: 'onLoad',
    value: function onLoad(params) {
      var self = this;
      _wepy2.default.showLoading({
        title: '加载中...'
      });
      services_lesson_detail.query({
        params: {
          id: params.id,
          _info: 'subject.classroom.comments<student>.teachers.course_schools' },
        success: function success(res) {
          self.entity = res;
          self.comments = res.comments;
          self.$apply();
        },
        complete: function complete() {
          _wepy2.default.hideLoading();
        }
      });
    }
  }]);

  return LessonDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(LessonDetail , 'pages/lessonDetail/lessonDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3NvbkRldGFpbC5qcyJdLCJuYW1lcyI6WyJzZXJ2aWNlc19sZXNzb25fZGV0YWlsIiwiTGVzc29uRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ29tbWVudCIsIlJlY29tbWVudE5hdiIsImRhdGEiLCJyZWNvbW1lbmQiLCJ0aXRsZSIsImlzU2hvd0ljb24iLCJhY3RpdmVJbmRleCIsImVudGl0eSIsImNvbW1lbnRzIiwidGFicyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZSIsImRldGFpbCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRJZCIsImhhbmRsZUFjdGlvbiIsInBhcmFtcyIsIiRuYXZpZ2F0ZSIsImlkIiwic2Nob29sIiwiY291cnNlX3NjaG9vbHMiLCJzZWxmIiwic2hvd0xvYWRpbmciLCJxdWVyeSIsIl9pbmZvIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxzQjs7Ozs7Ozs7Ozs7O0lBRVNDLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCLFNBSHZCO0FBSVBDLHVCQUFpQjtBQUNmLHdCQUFnQiwrQ0FERDtBQUVmLHFCQUFhLDRDQUZFO0FBR2YsbUJBQVcsMENBSEk7QUFJZix5QkFBaUIsMENBSkY7QUFLZixxQkFBYTtBQUxFO0FBSlYsSyxRQVlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsU0FBUSxTQUFULEVBQW1CLGdCQUFlLEVBQWxDLEVBQXFDLHdCQUF1QixVQUE1RCxFQUFYLEVBQW1GLGdCQUFlLEVBQUMsbUJBQWtCLFdBQW5CLEVBQStCLHNCQUFxQixZQUFwRCxFQUFsRyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxnQ0FEUTtBQUVSQztBQUZRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBQUNDLE9BQU8sTUFBUixFQUROO0FBRUxDLGtCQUFZLElBRlA7QUFHTEMsbUJBQWEsQ0FIUjtBQUlMQyxjQUFRLElBSkg7QUFLTEMsZ0JBQVUsRUFMTDtBQU1MQyxZQUFNLENBQUMsRUFBQ0wsT0FBTyxJQUFSLEVBQUQsRUFBZ0IsRUFBQ0EsT0FBTyxJQUFSLEVBQWhCLEVBQStCLEVBQUNBLE9BQU8sSUFBUixFQUEvQjtBQU5ELEssUUFRUE0sTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0NDLENBREQsRUFDSTtBQUNWLGFBQUtOLFdBQUwsR0FBbUJNLEVBQUVDLE1BQUYsQ0FBU0MsR0FBNUI7QUFDQUMsZ0JBQVFDLEdBQVIsa0JBQTJCSixFQUFFQyxNQUFGLENBQVNJLFdBQXBDLHNCQUFnRUwsRUFBRUMsTUFBRixDQUFTQyxHQUF6RTtBQUNELE9BSk87QUFLUkksa0JBTFEsd0JBS01DLE1BTE4sRUFLYztBQUFBLFlBQ1paLE1BRFksR0FDRCxLQUFLTCxJQURKLENBQ1pLLE1BRFk7O0FBRXBCLFlBQUtZLFVBQVUsYUFBZixFQUErQjtBQUM3QixlQUFLQyxTQUFMLDBCQUFzQ0QsTUFBdEMsRUFBZ0RaLE1BQWhEO0FBQ0Q7QUFDRCxZQUFJWSxVQUFVLE9BQWQsRUFBd0I7QUFDdEIsY0FBSWpCLE9BQU87QUFDVG1CLGdCQUFJZCxPQUFPYyxFQURGO0FBRVRDLG9CQUFRZixPQUFPZ0I7QUFGTixXQUFYO0FBSUFSLGtCQUFRQyxHQUFSLENBQVksTUFBWixFQUFtQmQsSUFBbkI7QUFDQSxlQUFLa0IsU0FBTCwwQkFBc0NELE1BQXRDLEVBQWdEakIsSUFBaEQ7QUFDRDtBQUNGO0FBbEJPLEs7Ozs7OzJCQW9CSGlCLE0sRUFBUTtBQUNiLFVBQUlLLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZyQixlQUFPO0FBRFEsT0FBakI7QUFHQWYsNkJBQXVCcUMsS0FBdkIsQ0FBNkI7QUFDM0JQLGdCQUFRO0FBQ05FLGNBQUlGLE9BQU9FLEVBREw7QUFFTk0saUJBQU8sNkRBRkQsRUFEbUI7QUFJM0JDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJMLGVBQUtqQixNQUFMLEdBQWNzQixHQUFkO0FBQ0FMLGVBQUtoQixRQUFMLEdBQWdCcUIsSUFBSXJCLFFBQXBCO0FBQ0FnQixlQUFLTSxNQUFMO0FBQ0QsU0FSMEI7QUFTM0JDLGtCQUFVLG9CQUFNO0FBQ2QseUJBQUtDLFdBQUw7QUFDRDtBQVgwQixPQUE3QjtBQWFEOzs7O0VBbEV1QyxlQUFLQyxJOztrQkFBMUIzQyxZIiwiZmlsZSI6Imxlc3NvbkRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ29tbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xlc3NvbkRldGFpbHMvY29tbWVudCdcbiAgaW1wb3J0IFJlY29tbWVudE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlY29tbWVuZE5hdidcbiAgaW1wb3J0IHsgaW1nUm9vdFVybCB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnXG4gIGltcG9ydCAqIGFzIHNlcnZpY2VzX2xlc3Nvbl9kZXRhaWwgZnJvbSAnLi4vLi4vc2VydmljZXMvbGVzc29uL2RldGFpbCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXNzb25EZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor77nqIvor6bmg4UnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MDQ0JyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtcHJpY2UnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wcmljZS9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAnd3hjLWFibm9yJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYWJub3IvZGlzdC9pbmRleCcsXG4gICAgICB9XG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDb21tZW50XCI6e1wiY2xhc3NcIjpcImNvbW1lbnRcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29tbWVudHMuc3luY1wiOlwiY29tbWVudHNcIn0sXCJSZWNvbW1lbnROYXZcIjp7XCJ2LWJpbmQ6bXNnLm9uY2VcIjpcInJlY29tbWVuZFwiLFwidi1iaW5kOmlzU2hvdy5vbmNlXCI6XCJpc1Nob3dJY29uXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIENvbW1lbnQsXG4gICAgICBSZWNvbW1lbnROYXZcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHJlY29tbWVuZDoge3RpdGxlOiAn5pWZ5a2m546v5aKDJ30sXG4gICAgICBpc1Nob3dJY29uOiB0cnVlLFxuICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICBlbnRpdHk6IG51bGwsXG4gICAgICBjb21tZW50czogW10sXG4gICAgICB0YWJzOiBbe3RpdGxlOiAn566A5LuLJ30sIHt0aXRsZTogJ+iAgeW4iCd9LCB7dGl0bGU6ICfor4Tku7cnfV1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGUuZGV0YWlsLmtleVxuICAgICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApXG4gICAgICB9LFxuICAgICAgaGFuZGxlQWN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgeyBlbnRpdHkgfSA9IHRoaXMuZGF0YVxuICAgICAgICBpZiAoIHBhcmFtcyA9PSAnYXBwb2ludG1lbnQnICkge1xuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKGAvcGFnZXMvbGVzc29uRGV0YWlsLyR7cGFyYW1zfWAsIGVudGl0eSlcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKHBhcmFtcyA9PSAnb3JkZXInICkge1xuICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgaWQ6IGVudGl0eS5pZCxcbiAgICAgICAgICAgIHNjaG9vbDogZW50aXR5LmNvdXJzZV9zY2hvb2xzXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJyxkYXRhKVxuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKGAvcGFnZXMvbGVzc29uRGV0YWlsLyR7cGFyYW1zfWAsIGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKHBhcmFtcykge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0uLi4nLFxuICAgICAgfSlcbiAgICAgIHNlcnZpY2VzX2xlc3Nvbl9kZXRhaWwucXVlcnkoe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogcGFyYW1zLmlkLCBcbiAgICAgICAgICBfaW5mbzogJ3N1YmplY3QuY2xhc3Nyb29tLmNvbW1lbnRzPHN0dWRlbnQ+LnRlYWNoZXJzLmNvdXJzZV9zY2hvb2xzJ30sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBzZWxmLmVudGl0eSA9IHJlc1xuICAgICAgICAgIHNlbGYuY29tbWVudHMgPSByZXMuY29tbWVudHNcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiJdfQ==