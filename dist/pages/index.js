'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _swiper = require('./../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _recommendNav = require('./../components/recommendNav.js');

var _recommendNav2 = _interopRequireDefault(_recommendNav);

var _teacherList = require('./../components/teacherList.js');

var _teacherList2 = _interopRequireDefault(_teacherList);

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _index = require('./../services/index/index.js');

var services_index = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '教立方首页',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-dialog': '../packages/@minui/wxc-dialog/dist/index',
        'wxc-icon': '../packages/@minui/wxc-icon/dist/index',
        'wxc-loading': '../../packages/@minui/wxc-loading/dist/index'
      }
    }, _this.$repeat = {}, _this.$props = { "TeacherList": { "v-bind:teacherData.sync": "teacherList" }, "RecommendNav": { "xmlns:v-bind": "", "v-bind:msg.once": "recommendation", "v-bind:isShow.once": "recommendbol" }, "RecommendNavSchool": { "v-bind:msg.once": "campusEnvironment", "v-bind:isShow.once": "recommendbol" }, "RecommendNavTeacher": { "v-bind:msg.once": "teacherrecommend" } }, _this.$events = {}, _this.components = {
      Swiper: _swiper2.default,
      TeacherList: _teacherList2.default,
      RecommendNav: _recommendNav2.default,
      RecommendNavSchool: _recommendNav2.default,
      RecommendNavTeacher: _recommendNav2.default
    }, _this.data = {
      recommendation: { title: '精品推荐', page: 'recommend' },
      campusEnvironment: { title: '校区环境', page: 'school' },
      teacherrecommend: { title: '老师推荐', page: 'teacher' },
      list: [],
      teacherList: [],
      loadingStatus: true,
      recommendbol: true
    }, _this.methods = {
      handleViewMore: function handleViewMore() {
        console.log('123');
      },
      handleToSubject: function handleToSubject(index) {
        this.$preload('activeIndex', index);
        this.$switch('./lessons');
      },
      toListsDetails: function toListsDetails(e) {
        var page = e.currentTarget.dataset.page;

        var id = e.currentTarget.dataset.id;
        this.$navigate('./' + page + '/' + page, { id: id });
      }
      // toCourseDetails(e) {
      //   const { id, page } = e.currentTarget.dataset
      //   this.$navigate(`./${page}/${page}`, id)
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      var getUnionuser = _util2.default.getUnionuser();
      console.log(getUnionuser);
      services_index.query({
        success: function success(res) {
          var list = res.data;
          console.log(list);
          self.teacherList = list.recommendTeacher;
          self.list = list;
          self.$apply();
        },
        complete: function complete() {
          self.loadingStatus = false;
          self.$apply();
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzX2luZGV4IiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJ1c2luZ0NvbXBvbmVudHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTd2lwZXIiLCJUZWFjaGVyTGlzdCIsIlJlY29tbWVuZE5hdiIsIlJlY29tbWVuZE5hdlNjaG9vbCIsIlJlY29tbWVuZE5hdlRlYWNoZXIiLCJkYXRhIiwicmVjb21tZW5kYXRpb24iLCJ0aXRsZSIsInBhZ2UiLCJjYW1wdXNFbnZpcm9ubWVudCIsInRlYWNoZXJyZWNvbW1lbmQiLCJsaXN0IiwidGVhY2hlckxpc3QiLCJsb2FkaW5nU3RhdHVzIiwicmVjb21tZW5kYm9sIiwibWV0aG9kcyIsImhhbmRsZVZpZXdNb3JlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRvU3ViamVjdCIsImluZGV4IiwiJHByZWxvYWQiLCIkc3dpdGNoIiwidG9MaXN0c0RldGFpbHMiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsIiRuYXZpZ2F0ZSIsInNlbGYiLCJnZXRVbmlvbnVzZXIiLCJxdWVyeSIsInN1Y2Nlc3MiLCJyZXMiLCJyZWNvbW1lbmRUZWFjaGVyIiwiJGFwcGx5IiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztJQUFZQSxjOzs7Ozs7Ozs7Ozs7SUFFU0MsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyxvQ0FBOEIsU0FIdkI7QUFJUEMsdUJBQWlCO0FBQ2Ysc0JBQWMsMENBREM7QUFFZixvQkFBWSx3Q0FGRztBQUdmLHVCQUFlO0FBSEE7QUFKVixLLFFBVVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQywyQkFBMEIsYUFBM0IsRUFBZixFQUF5RCxnQkFBZSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixnQkFBckMsRUFBc0Qsc0JBQXFCLGNBQTNFLEVBQXhFLEVBQW1LLHNCQUFxQixFQUFDLG1CQUFrQixtQkFBbkIsRUFBdUMsc0JBQXFCLGNBQTVELEVBQXhMLEVBQW9RLHVCQUFzQixFQUFDLG1CQUFrQixrQkFBbkIsRUFBMVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsOEJBRFE7QUFFUkMsd0NBRlE7QUFHUkMsMENBSFE7QUFJUkMsZ0RBSlE7QUFLUkM7QUFMUSxLLFFBT1ZDLEksR0FBTztBQUNMQyxzQkFBZ0IsRUFBQ0MsT0FBTyxNQUFSLEVBQWdCQyxNQUFNLFdBQXRCLEVBRFg7QUFFTEMseUJBQW1CLEVBQUNGLE9BQU8sTUFBUixFQUFnQkMsTUFBTSxRQUF0QixFQUZkO0FBR0xFLHdCQUFrQixFQUFDSCxPQUFPLE1BQVIsRUFBZ0JDLE1BQU0sU0FBdEIsRUFIYjtBQUlMRyxZQUFNLEVBSkQ7QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxxQkFBZSxJQU5WO0FBT0xDLG9CQUFjO0FBUFQsSyxRQVNQQyxPLEdBQVU7QUFDUkMsb0JBRFEsNEJBQ1U7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVksS0FBWjtBQUNELE9BSE87QUFJUkMscUJBSlEsMkJBSVNDLEtBSlQsRUFJZ0I7QUFDdEIsYUFBS0MsUUFBTCxDQUFjLGFBQWQsRUFBNkJELEtBQTdCO0FBQ0EsYUFBS0UsT0FBTDtBQUNELE9BUE87QUFRUkMsb0JBUlEsMEJBUU9DLENBUlAsRUFRVTtBQUFBLFlBQ1JoQixJQURRLEdBQ0NnQixFQUFFQyxhQUFGLENBQWdCQyxPQURqQixDQUNSbEIsSUFEUTs7QUFFaEIsWUFBTW1CLEtBQUtILEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxFQUFuQztBQUNBLGFBQUtDLFNBQUwsUUFBb0JwQixJQUFwQixTQUE0QkEsSUFBNUIsRUFBb0MsRUFBQ21CLE1BQUQsRUFBcEM7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQWhCUSxLOzs7Ozs2QkFrQkQ7QUFDUCxVQUFJRSxPQUFPLElBQVg7QUFDQSxVQUFNQyxlQUFjLGVBQUtBLFlBQUwsRUFBcEI7QUFDQWIsY0FBUUMsR0FBUixDQUFZWSxZQUFaO0FBQ0F6QyxxQkFBZTBDLEtBQWYsQ0FBcUI7QUFDbkJDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEIsY0FBTXRCLE9BQU9zQixJQUFJNUIsSUFBakI7QUFDQVksa0JBQVFDLEdBQVIsQ0FBWVAsSUFBWjtBQUNBa0IsZUFBS2pCLFdBQUwsR0FBbUJELEtBQUt1QixnQkFBeEI7QUFDQUwsZUFBS2xCLElBQUwsR0FBWUEsSUFBWjtBQUNBa0IsZUFBS00sTUFBTDtBQUNELFNBUGtCO0FBUW5CQyxrQkFBVSxvQkFBTTtBQUNkUCxlQUFLaEIsYUFBTCxHQUFxQixLQUFyQjtBQUNBZ0IsZUFBS00sTUFBTDtBQUNEO0FBWGtCLE9BQXJCO0FBYUQ7Ozs7RUFqRWdDLGVBQUszQixJOztrQkFBbkJsQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgU3dpcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc3dpcGVyJ1xyXG4gIGltcG9ydCBSZWNvbW1lbmROYXYgZnJvbSAnLi4vY29tcG9uZW50cy9yZWNvbW1lbmROYXYnXHJcbiAgaW1wb3J0IFRlYWNoZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVhY2hlckxpc3QnXHJcblxyXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwuanMnXHJcbiAgaW1wb3J0ICogYXMgc2VydmljZXNfaW5kZXggZnJvbSAnLi4vc2VydmljZXMvaW5kZXgvaW5kZXgnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aVmeeri+aWuemmlumhtScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MDQ0JyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1kaWFsb2cnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1kaWFsb2cvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxvYWRpbmcnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkaW5nL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJUZWFjaGVyTGlzdFwiOntcInYtYmluZDp0ZWFjaGVyRGF0YS5zeW5jXCI6XCJ0ZWFjaGVyTGlzdFwifSxcIlJlY29tbWVuZE5hdlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bXNnLm9uY2VcIjpcInJlY29tbWVuZGF0aW9uXCIsXCJ2LWJpbmQ6aXNTaG93Lm9uY2VcIjpcInJlY29tbWVuZGJvbFwifSxcIlJlY29tbWVuZE5hdlNjaG9vbFwiOntcInYtYmluZDptc2cub25jZVwiOlwiY2FtcHVzRW52aXJvbm1lbnRcIixcInYtYmluZDppc1Nob3cub25jZVwiOlwicmVjb21tZW5kYm9sXCJ9LFwiUmVjb21tZW5kTmF2VGVhY2hlclwiOntcInYtYmluZDptc2cub25jZVwiOlwidGVhY2hlcnJlY29tbWVuZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIFN3aXBlcixcclxuICAgICAgVGVhY2hlckxpc3QsXHJcbiAgICAgIFJlY29tbWVuZE5hdixcclxuICAgICAgUmVjb21tZW5kTmF2U2Nob29sOiBSZWNvbW1lbmROYXYsXHJcbiAgICAgIFJlY29tbWVuZE5hdlRlYWNoZXI6IFJlY29tbWVuZE5hdlxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcmVjb21tZW5kYXRpb246IHt0aXRsZTogJ+eyvuWTgeaOqOiNkCcsIHBhZ2U6ICdyZWNvbW1lbmQnfSxcclxuICAgICAgY2FtcHVzRW52aXJvbm1lbnQ6IHt0aXRsZTogJ+agoeWMuueOr+WigycsIHBhZ2U6ICdzY2hvb2wnfSxcclxuICAgICAgdGVhY2hlcnJlY29tbWVuZDoge3RpdGxlOiAn6ICB5biI5o6o6I2QJywgcGFnZTogJ3RlYWNoZXInfSxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIHRlYWNoZXJMaXN0OiBbXSxcclxuICAgICAgbG9hZGluZ1N0YXR1czogdHJ1ZSxcclxuICAgICAgcmVjb21tZW5kYm9sOiB0cnVlXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBoYW5kbGVWaWV3TW9yZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzEyMycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZVRvU3ViamVjdCAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLiRwcmVsb2FkKCdhY3RpdmVJbmRleCcsIGluZGV4KVxyXG4gICAgICAgIHRoaXMuJHN3aXRjaChgLi9sZXNzb25zYClcclxuICAgICAgfSxcclxuICAgICAgdG9MaXN0c0RldGFpbHMoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoYC4vJHtwYWdlfS8ke3BhZ2V9YCwge2lkfSlcclxuICAgICAgfVxyXG4gICAgICAvLyB0b0NvdXJzZURldGFpbHMoZSkge1xyXG4gICAgICAvLyAgIGNvbnN0IHsgaWQsIHBhZ2UgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIC8vICAgdGhpcy4kbmF2aWdhdGUoYC4vJHtwYWdlfS8ke3BhZ2V9YCwgaWQpXHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGNvbnN0IGdldFVuaW9udXNlciA9dXRpbC5nZXRVbmlvbnVzZXIoKVxyXG4gICAgICBjb25zb2xlLmxvZyhnZXRVbmlvbnVzZXIpXHJcbiAgICAgIHNlcnZpY2VzX2luZGV4LnF1ZXJ5KHtcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsaXN0ID0gcmVzLmRhdGFcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICAgICAgICBzZWxmLnRlYWNoZXJMaXN0ID0gbGlzdC5yZWNvbW1lbmRUZWFjaGVyXHJcbiAgICAgICAgICBzZWxmLmxpc3QgPSBsaXN0XHJcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgc2VsZi5sb2FkaW5nU3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4iXX0=