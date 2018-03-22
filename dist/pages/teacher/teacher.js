'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _recommendNav = require('./../../components/recommendNav.js');

var _recommendNav2 = _interopRequireDefault(_recommendNav);

var _teacherList = require('./../../components/teacherList.js');

var _teacherList2 = _interopRequireDefault(_teacherList);

var _teacher = require('./../../services/teacher/teacher.js');

var services_teacher = _interopRequireWildcard(_teacher);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Teacher = function (_wepy$page) {
  _inherits(Teacher, _wepy$page);

  function Teacher() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Teacher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '老师介绍',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
        'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index'
      }
    }, _this.$repeat = {}, _this.$props = { "NavigationBar": { "xmlns:v-bind": "", "v-bind:msg.once": "msg", "v-bind:isShow.sync": "isShow" }, "TeacherList": { "v-bind:teacherData.sync": "teacherList" } }, _this.$events = {}, _this.components = {
      NavigationBar: _recommendNav2.default,
      TeacherList: _teacherList2.default
    }, _this.data = {
      swiperCurrentPage: 0,
      msg: { title: '全部老师' },
      isShow: true,
      teacherList: [],
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg']
    }, _this.methods = {
      changeSwiper: function changeSwiper(e) {
        var self = this;
        self.swiperCurrentPage = e.detail.current;
        self.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Teacher, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      services_teacher.query({
        params: {
          current: 1,
          pageSize: 6,
          isTeacher: 1
        },
        success: function success(res) {
          var list = res.list;

          self.teacherList = list;
          self.$apply();
        },
        complete: function complete() {}
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('到达底部');
    }
  }, {
    key: 'loadMore',
    value: function loadMore() {}
  }]);

  return Teacher;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Teacher , 'pages/teacher/teacher'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXIuanMiXSwibmFtZXMiOlsic2VydmljZXNfdGVhY2hlciIsIlRlYWNoZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJ1c2luZ0NvbXBvbmVudHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJOYXZpZ2F0aW9uQmFyIiwiVGVhY2hlckxpc3QiLCJkYXRhIiwic3dpcGVyQ3VycmVudFBhZ2UiLCJtc2ciLCJ0aXRsZSIsImlzU2hvdyIsInRlYWNoZXJMaXN0IiwiaW1nVXJscyIsIm1ldGhvZHMiLCJjaGFuZ2VTd2lwZXIiLCJlIiwic2VsZiIsImRldGFpbCIsImN1cnJlbnQiLCIkYXBwbHkiLCJxdWVyeSIsInBhcmFtcyIsInBhZ2VTaXplIiwiaXNUZWFjaGVyIiwic3VjY2VzcyIsInJlcyIsImxpc3QiLCJjb21wbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztJQUFZQSxnQjs7Ozs7Ozs7Ozs7O0lBRVNDLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCLFNBSHZCO0FBSVBDLHVCQUFpQjtBQUNmLGtCQUFVLHlDQURLO0FBRWYsd0JBQWdCO0FBRkQ7QUFKVixLLFFBU1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixLQUFyQyxFQUEyQyxzQkFBcUIsUUFBaEUsRUFBakIsRUFBMkYsZUFBYyxFQUFDLDJCQUEwQixhQUEzQixFQUF6RyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQywyQ0FEUTtBQUVSQztBQUZRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLHlCQUFtQixDQURkO0FBRUxDLFdBQUssRUFBQ0MsT0FBTyxNQUFSLEVBRkE7QUFHTEMsY0FBUSxJQUhIO0FBSUxDLG1CQUFZLEVBSlA7QUFLTEMsZUFBUyxDQUNULHNFQURTLEVBRVQsc0VBRlMsRUFHVCxzRUFIUztBQUxKLEssUUFXUEMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNLQyxDQURMLEVBQ1E7QUFDZCxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1QsaUJBQUwsR0FBeUJRLEVBQUVFLE1BQUYsQ0FBU0MsT0FBbEM7QUFDQUYsYUFBS0csTUFBTDtBQUNEO0FBTE8sSzs7Ozs7NkJBT0Q7QUFDUCxVQUFJSCxPQUFPLElBQVg7QUFDQXZCLHVCQUFpQjJCLEtBQWpCLENBQXVCO0FBQ3JCQyxnQkFBUTtBQUNOSCxtQkFBUyxDQURIO0FBRU5JLG9CQUFVLENBRko7QUFHTkMscUJBQVc7QUFITCxTQURhO0FBTXJCQyxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQUEsY0FDUkMsSUFEUSxHQUNDRCxHQURELENBQ1JDLElBRFE7O0FBRWhCVixlQUFLTCxXQUFMLEdBQW1CZSxJQUFuQjtBQUNBVixlQUFLRyxNQUFMO0FBRUQsU0FYb0I7QUFZckJRLGtCQUFVLG9CQUFNLENBQ2Y7QUFib0IsT0FBdkI7QUFlRDs7O29DQUNlO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7OzsrQkFDVSxDQUVWOzs7O0VBMURrQyxlQUFLQyxJOztrQkFBckJwQyxPIiwiZmlsZSI6InRlYWNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZWNvbW1lbmROYXYnXG4gIGltcG9ydCBUZWFjaGVyTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RlYWNoZXJMaXN0J1xuXG4gIGltcG9ydCAqIGFzIHNlcnZpY2VzX3RlYWNoZXIgZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhY2hlci90ZWFjaGVyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYWNoZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogIHluIjku4vnu40nLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MDQ0JyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtbG9hZG1vcmUnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkbW9yZS9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiTmF2aWdhdGlvbkJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bXNnLm9uY2VcIjpcIm1zZ1wiLFwidi1iaW5kOmlzU2hvdy5zeW5jXCI6XCJpc1Nob3dcIn0sXCJUZWFjaGVyTGlzdFwiOntcInYtYmluZDp0ZWFjaGVyRGF0YS5zeW5jXCI6XCJ0ZWFjaGVyTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBOYXZpZ2F0aW9uQmFyLFxuICAgICAgVGVhY2hlckxpc3RcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHN3aXBlckN1cnJlbnRQYWdlOiAwLFxuICAgICAgbXNnOiB7dGl0bGU6ICflhajpg6jogIHluIgnfSxcbiAgICAgIGlzU2hvdzogdHJ1ZSxcbiAgICAgIHRlYWNoZXJMaXN0OltdLFxuICAgICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZycsXG4gICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGcnXG4gICAgICBdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjaGFuZ2VTd2lwZXIoZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zd2lwZXJDdXJyZW50UGFnZSA9IGUuZGV0YWlsLmN1cnJlbnRcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlcnZpY2VzX3RlYWNoZXIucXVlcnkoe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICAgIHBhZ2VTaXplOiA2LFxuICAgICAgICAgIGlzVGVhY2hlcjogMVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBsaXN0IH0gPSByZXNcbiAgICAgICAgICBzZWxmLnRlYWNoZXJMaXN0ID0gbGlzdFxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcblxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgY29uc29sZS5sb2coJ+WIsOi+vuW6lemDqCcpXG4gICAgfVxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgXG4gICAgfVxuICB9XG4gIFxuXG4iXX0=