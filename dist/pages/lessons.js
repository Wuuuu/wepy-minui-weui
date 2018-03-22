'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _subject = require('./../services/lesson/subject.js');

var services_lesson_subject = _interopRequireWildcard(_subject);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lessons = function (_wepy$page) {
  _inherits(Lessons, _wepy$page);

  function Lessons() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Lessons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lessons.__proto__ || Object.getPrototypeOf(Lessons)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '课程',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      enablePullDownRefresh: true,
      usingComponents: {
        'wxc-loadmore': '../packages/@minui/wxc-loadmore/dist/index'
      }
    }, _this.$repeat = {}, _this.$props = { "SearchBar": { "class": "lessons-search" } }, _this.$events = {}, _this.components = {
      SearchBar: _searchbar2.default
    }, _this.data = {
      activeIndex: 0, // tab当前索引
      toIndex: null,
      sliderOffset: 0,
      sliderLeft: 0,
      tabWidth: '', // tab的宽度
      tabLists: null, //tab内容列表
      total: null, // tab下的课程总数
      initCourse: null,
      courseLists: null,
      subjectId: null,
      defaultQuery: {
        current: 1,
        pagesize: 3,
        status: 0
      },
      refreshing: false,
      loading: false
    }, _this.methods = {
      // 点击查询当前tab下的课程列表
      tabClick: function tabClick(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var self, id;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  self = _this2;
                  id = e.currentTarget.dataset.id;
                  _context.next = 4;
                  return self.queryLesson(id);

                case 4:
                  self.sliderOffset = e.currentTarget.offsetLeft;
                  self.activeIndex = e.currentTarget.id;
                  self.subjectId = id;
                  self.$apply();

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      toLessonDetail: function toLessonDetail(id) {
        this.$navigate('./lessonDetail/lessonDetail', { id: id });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lessons, [{
    key: 'onLoad',
    value: function onLoad(params, data) {
      var self = this;
      if (data.preload) {
        self.activeIndex = data.preload.activeIndex;
        self.$apply();
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _data = this.data,
          refreshing = _data.refreshing,
          loading = _data.loading,
          initCourse = _data.initCourse,
          tabLists = _data.tabLists;

      if (!refreshing && !loading && initCourse == null && tabLists == null) {
        _wepy2.default.showLoading({
          title: '加载中'
        });
        this.query();
      }
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var subjectId = this.data.subjectId; // 获取当前tab的id

      this.refresh(subjectId);
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var self = this;
      var sliderWidth = 0; // 需要设置slider的宽度，用于计算中间位置
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.tabWidth = 2 * (res.windowWidth / self.tabLists.length);
          self.sliderOffset = res.windowWidth / self.tabLists.length * self.activeIndex;
          self.$apply();
        }
      });
    }
    // 查询科目

  }, {
    key: 'query',
    value: function query(queryParams, refresh) {
      var self = this;
      if (refresh) {
        self.refreshing = true;
        self.queryLesson(queryParams);
        _wepy2.default.showNavigationBarLoading();
        self.$apply();
      } else {
        self.loading = true;
        services_lesson_subject.query({
          success: function success(res) {
            var list = res.list;

            var subjectId = list[0].id;
            self.tabLists = list;
            self.subjectId = subjectId;
            self.queryLesson(subjectId, queryParams);
            self.$apply();
          },
          complete: function complete(res) {
            self.getWidth();
            if (refresh) {
              self.refreshing = false;
              self.$apply();
            } else {
              self.loading = false;
            }
            _wepy2.default.hideNavigationBarLoading();
            _wepy2.default.stopPullDownRefresh();
          }
        });
        self.$apply();
      }
    }
    // 查询科目对应的课程列表

  }, {
    key: 'queryLesson',
    value: function queryLesson(subjectId, pagesize) {
      var self = this;
      var _self$data = self.data,
          defaultQuery = _self$data.defaultQuery,
          initCourse = _self$data.initCourse;

      var params = _extends({}, defaultQuery, {
        subjectId: subjectId
      });
      services_lesson_subject.queryCourse({
        params: params,
        success: function success(res) {
          self.initCourse = res.list;
          self.total = res.total;
          self.$apply();
        },
        complete: function complete() {
          _wepy2.default.hideLoading();
          _wepy2.default.stopPullDownRefresh();
          _wepy2.default.hideNavigationBarLoading();
        }
      });
    }
    // 刷新页面

  }, {
    key: 'refresh',
    value: function refresh(subjectId) {
      this.query(subjectId, true);
    }
    // 页面上拉触底事件的处理函数

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var self = this;
      var _self$data2 = self.data,
          loading = _self$data2.loading,
          subjectId = _self$data2.subjectId,
          total = _self$data2.total,
          defaultQuery = _self$data2.defaultQuery,
          initCourse = _self$data2.initCourse;
      var pagesize = defaultQuery.pagesize;

      var hasMore = total > initCourse.length;
      if (!loading && hasMore) {
        _wepy2.default.showLoading({
          title: '加载更多中~'
        });
        var page = pagesize + 4;
        this.queryCourse(subjectId, page);
      }
    }
    // 上拉触底加载更多

  }, {
    key: 'queryCourse',
    value: function queryCourse(subjectId, pagesize) {
      var self = this;
      var _self$data3 = self.data,
          defaultQuery = _self$data3.defaultQuery,
          initCourse = _self$data3.initCourse;

      var params = _extends({}, defaultQuery, {
        subjectId: subjectId,
        pagesize: pagesize
      });
      services_lesson_subject.queryCourse({
        params: params,
        success: function success(res) {
          self.initCourse = res.list;
          // self.total = res.total
          self.$apply();
          _wepy2.default.hideLoading();
        },
        complete: function complete() {}
      });
    }
  }]);

  return Lessons;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Lessons , 'pages/lessons'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3NvbnMuanMiXSwibmFtZXMiOlsic2VydmljZXNfbGVzc29uX3N1YmplY3QiLCJMZXNzb25zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2VhcmNoQmFyIiwiZGF0YSIsImFjdGl2ZUluZGV4IiwidG9JbmRleCIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJ0YWJXaWR0aCIsInRhYkxpc3RzIiwidG90YWwiLCJpbml0Q291cnNlIiwiY291cnNlTGlzdHMiLCJzdWJqZWN0SWQiLCJkZWZhdWx0UXVlcnkiLCJjdXJyZW50IiwicGFnZXNpemUiLCJzdGF0dXMiLCJyZWZyZXNoaW5nIiwibG9hZGluZyIsIm1ldGhvZHMiLCJ0YWJDbGljayIsImUiLCJzZWxmIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInF1ZXJ5TGVzc29uIiwib2Zmc2V0TGVmdCIsIiRhcHBseSIsInRvTGVzc29uRGV0YWlsIiwiJG5hdmlnYXRlIiwicGFyYW1zIiwicHJlbG9hZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJxdWVyeSIsInJlZnJlc2giLCJzbGlkZXJXaWR0aCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93V2lkdGgiLCJsZW5ndGgiLCJxdWVyeVBhcmFtcyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImxpc3QiLCJjb21wbGV0ZSIsImdldFdpZHRoIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInF1ZXJ5Q291cnNlIiwiaGlkZUxvYWRpbmciLCJoYXNNb3JlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7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Q2ZDLGlCQUFPO0FBRFEsU0FBakI7QUFHQSxZQUFJbUIsT0FBT3RDLFdBQVcsQ0FBdEI7QUFDQSxhQUFLbUMsV0FBTCxDQUFrQnRDLFNBQWxCLEVBQTZCeUMsSUFBN0I7QUFDRDtBQUNGO0FBQ0Q7Ozs7Z0NBQ2F6QyxTLEVBQVdHLFEsRUFBVTtBQUNoQyxVQUFJTyxPQUFPLElBQVg7QUFEZ0Msd0JBRUtBLEtBQUtwQixJQUZWO0FBQUEsVUFFeEJXLFlBRndCLGVBRXhCQSxZQUZ3QjtBQUFBLFVBRVZILFVBRlUsZUFFVkEsVUFGVTs7QUFHaEMsVUFBSXFCLHNCQUNDbEIsWUFERDtBQUVGRCw0QkFGRTtBQUdGRztBQUhFLFFBQUo7QUFLQTFCLDhCQUF3QjZELFdBQXhCLENBQW9DO0FBQ2xDbkIsc0JBRGtDO0FBRWxDUSxpQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCbEIsZUFBS1osVUFBTCxHQUFrQjhCLElBQUlLLElBQXRCO0FBQ0E7QUFDQXZCLGVBQUtNLE1BQUw7QUFDQSx5QkFBS3VCLFdBQUw7QUFDRCxTQVBpQztBQVFsQ0wsa0JBQVUsb0JBQU0sQ0FDZjtBQVRpQyxPQUFwQztBQVdEOzs7O0VBakxrQyxlQUFLTyxJOztrQkFBckIvRCxPIiwiZmlsZSI6Imxlc3NvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXHJcbiAgaW1wb3J0ICogYXMgc2VydmljZXNfbGVzc29uX3N1YmplY3QgZnJvbSAnLi4vc2VydmljZXMvbGVzc29uL3N1YmplY3QnXHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXNzb25zIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivvueoiycsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MDQ0JyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAnd3hjLWxvYWRtb3JlJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZG1vcmUvZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNlYXJjaEJhclwiOntcImNsYXNzXCI6XCJsZXNzb25zLXNlYXJjaFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIFNlYXJjaEJhclxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgYWN0aXZlSW5kZXg6IDAsICAvLyB0YWLlvZPliY3ntKLlvJVcclxuICAgICAgdG9JbmRleDogbnVsbCxcclxuICAgICAgc2xpZGVyT2Zmc2V0OiAwLCAgXHJcbiAgICAgIHNsaWRlckxlZnQ6IDAsXHJcbiAgICAgIHRhYldpZHRoOiAnJywgICAvLyB0YWLnmoTlrr3luqZcclxuICAgICAgdGFiTGlzdHM6IG51bGwsIC8vdGFi5YaF5a655YiX6KGoXHJcbiAgICAgIHRvdGFsOiBudWxsLCAgLy8gdGFi5LiL55qE6K++56iL5oC75pWwXHJcbiAgICAgIGluaXRDb3Vyc2U6IG51bGwsIFxyXG4gICAgICBjb3Vyc2VMaXN0czogbnVsbCxcclxuICAgICAgc3ViamVjdElkOiBudWxsLFxyXG4gICAgICBkZWZhdWx0UXVlcnk6IHtcclxuICAgICAgICBjdXJyZW50OiAxLFxyXG4gICAgICAgIHBhZ2VzaXplOiAzLFxyXG4gICAgICAgIHN0YXR1czogMFxyXG4gICAgICB9LFxyXG4gICAgICByZWZyZXNoaW5nOiBmYWxzZSxcclxuICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOeCueWHu+afpeivouW9k+WJjXRhYuS4i+eahOivvueoi+WIl+ihqFxyXG4gICAgICBhc3luYyB0YWJDbGljayAoZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICAgICAgYXdhaXQgc2VsZi5xdWVyeUxlc3NvbihpZClcclxuICAgICAgICBzZWxmLnNsaWRlck9mZnNldCA9IGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0XHJcbiAgICAgICAgc2VsZi5hY3RpdmVJbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxyXG4gICAgICAgIHNlbGYuc3ViamVjdElkID0gaWRcclxuICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvTGVzc29uRGV0YWlsIChpZCkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKGAuL2xlc3NvbkRldGFpbC9sZXNzb25EZXRhaWxgLHtpZH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCAocGFyYW1zLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgaWYoZGF0YS5wcmVsb2FkKXtcclxuICAgICAgICAgIHNlbGYuYWN0aXZlSW5kZXggPSBkYXRhLnByZWxvYWQuYWN0aXZlSW5kZXhcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNob3cgKCkge1xyXG4gICAgICBjb25zdCB7IHJlZnJlc2hpbmcsIGxvYWRpbmcsIGluaXRDb3Vyc2UsIHRhYkxpc3RzIH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgIGlmICghcmVmcmVzaGluZyAmJiAhbG9hZGluZyAmJiBpbml0Q291cnNlPT0gbnVsbCAmJiB0YWJMaXN0cyA9PSBudWxsKSB7XHJcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucXVlcnkoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCAoKSB7XHJcbiAgICAgIGNvbnN0IHsgc3ViamVjdElkIH0gPSB0aGlzLmRhdGEgIC8vIOiOt+WPluW9k+WJjXRhYueahGlkXHJcbiAgICAgIHRoaXMucmVmcmVzaChzdWJqZWN0SWQpXHJcbiAgICB9XHJcbiAgICBnZXRXaWR0aCAoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICB2YXIgc2xpZGVyV2lkdGggPSAwIC8vIOmcgOimgeiuvue9rnNsaWRlcueahOWuveW6pu+8jOeUqOS6juiuoeeul+S4remXtOS9jee9rlxyXG4gICAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIHNlbGYudGFiV2lkdGggPSAyICogKHJlcy53aW5kb3dXaWR0aCAvIHNlbGYudGFiTGlzdHMubGVuZ3RoIClcclxuICAgICAgICAgIHNlbGYuc2xpZGVyT2Zmc2V0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHNlbGYudGFiTGlzdHMubGVuZ3RoICogc2VsZi5hY3RpdmVJbmRleCkgXHJcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8g5p+l6K+i56eR55uuXHJcbiAgICBxdWVyeSAocXVlcnlQYXJhbXMsIHJlZnJlc2gpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGlmIChyZWZyZXNoKSB7XHJcbiAgICAgICAgc2VsZi5yZWZyZXNoaW5nID0gdHJ1ZVxyXG4gICAgICAgIHNlbGYucXVlcnlMZXNzb24ocXVlcnlQYXJhbXMpXHJcbiAgICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgc2VydmljZXNfbGVzc29uX3N1YmplY3QucXVlcnkoe1xyXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGxpc3QgfSA9IHJlc1xyXG4gICAgICAgICAgICBsZXQgc3ViamVjdElkID0gbGlzdFswXS5pZFxyXG4gICAgICAgICAgICBzZWxmLnRhYkxpc3RzID0gbGlzdFxyXG4gICAgICAgICAgICBzZWxmLnN1YmplY3RJZCA9IHN1YmplY3RJZFxyXG4gICAgICAgICAgICBzZWxmLnF1ZXJ5TGVzc29uKHN1YmplY3RJZCxxdWVyeVBhcmFtcylcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbXBsZXRlOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuZ2V0V2lkdGgoKVxyXG4gICAgICAgICAgICBpZiAocmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgIHNlbGYucmVmcmVzaGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBcclxuICAgICAgICAgICAgICBzZWxmLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcclxuICAgICAgICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOafpeivouenkeebruWvueW6lOeahOivvueoi+WIl+ihqFxyXG4gICAgcXVlcnlMZXNzb24gKHN1YmplY3RJZCwgcGFnZXNpemUpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFF1ZXJ5LCBpbml0Q291cnNlIH0gPSBzZWxmLmRhdGFcclxuICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAuLi5kZWZhdWx0UXVlcnksXHJcbiAgICAgICAgc3ViamVjdElkXHJcbiAgICAgIH1cclxuICAgICAgc2VydmljZXNfbGVzc29uX3N1YmplY3QucXVlcnlDb3Vyc2Uoe1xyXG4gICAgICAgIHBhcmFtcyxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBzZWxmLmluaXRDb3Vyc2UgPSByZXMubGlzdFxyXG4gICAgICAgICAgc2VsZi50b3RhbCA9IHJlcy50b3RhbFxyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyDliLfmlrDpobXpnaJcclxuICAgIHJlZnJlc2ggKHN1YmplY3RJZCkge1xyXG4gICAgICB0aGlzLnF1ZXJ5KHN1YmplY3RJZCwgdHJ1ZSlcclxuICAgIH1cclxuICAgIC8vIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAgb25SZWFjaEJvdHRvbSAoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBjb25zdCB7IGxvYWRpbmcsIHN1YmplY3RJZCwgdG90YWwsIGRlZmF1bHRRdWVyeSwgaW5pdENvdXJzZSB9ID0gc2VsZi5kYXRhXHJcbiAgICAgIGNvbnN0IHsgcGFnZXNpemUgfSA9IGRlZmF1bHRRdWVyeVxyXG4gICAgICBsZXQgaGFzTW9yZSA9ICh0b3RhbCA+IGluaXRDb3Vyc2UubGVuZ3RoKVxyXG4gICAgICBpZiAoIWxvYWRpbmcgJiYgaGFzTW9yZSkge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3mm7TlpJrkuK1+J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHBhZ2UgPSBwYWdlc2l6ZSArIDRcclxuICAgICAgICB0aGlzLnF1ZXJ5Q291cnNlKCBzdWJqZWN0SWQsIHBhZ2UgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDkuIrmi4nop6blupXliqDovb3mm7TlpJpcclxuICAgIHF1ZXJ5Q291cnNlIChzdWJqZWN0SWQsIHBhZ2VzaXplKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBjb25zdCB7IGRlZmF1bHRRdWVyeSwgaW5pdENvdXJzZSB9ID0gc2VsZi5kYXRhXHJcbiAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgLi4uZGVmYXVsdFF1ZXJ5LFxyXG4gICAgICAgIHN1YmplY3RJZCxcclxuICAgICAgICBwYWdlc2l6ZVxyXG4gICAgICB9XHJcbiAgICAgIHNlcnZpY2VzX2xlc3Nvbl9zdWJqZWN0LnF1ZXJ5Q291cnNlKHtcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2VsZi5pbml0Q291cnNlID0gcmVzLmxpc3RcclxuICAgICAgICAgIC8vIHNlbGYudG90YWwgPSByZXMudG90YWxcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=