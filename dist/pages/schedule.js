'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _subject = require('./../services/lesson/subject.js');

var services_lesson_subject = _interopRequireWildcard(_subject);

var _schedule = require('./../services/schedule/schedule.js');

var services_calendar_week = _interopRequireWildcard(_schedule);

var _detail = require('./../services/lesson/detail.js');

var services_courses_detail = _interopRequireWildcard(_detail);

var _config = require('./../config/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = require('./../utils/moment.js');

var Schedule = function (_wepy$page) {
  _inherits(Schedule, _wepy$page);

  function Schedule() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Schedule);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Schedule.__proto__ || Object.getPrototypeOf(Schedule)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '课程表',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044',
      usingComponents: {
        'wxc-icon': '../packages/@minui/wxc-icon/dist/index',
        'wxc-flex': '../packages/@minui/wxc-flex/dist/index',
        'wxc-cc': '../packages/@minui/wxc-cc/dist/index',
        'wxc-mask': '../packages/@minui/wxc-mask/dist/index',
        'wxc-abnor': '../packages/@minui/wxc-abnor/dist/index',
        'wxc-popup': '../packages/@minui/wxc-popup/dist/index',
        'wxc-loading': '../packages/@minui/wxc-loading/dist/index'
      }
    }, _this.components = {}, _this.data = {
      week: [{ week: '周日' }, { week: '周一' }, { week: '周二' }, { week: '周三' }, { week: '周四' }, { week: '周五' }, { week: '周六' }],
      currentDate: moment().format("YYYY-MM-DD"), // 获取当前日期 YYYY-MM-DD
      thisMonthDays: [], // 获取当前月一共多少天
      currentMonth: parseInt(moment().format("MM")), // 当前月份
      currentYear: moment().year(), // 当前年份
      currentDay: moment().dayOfYear(), // 当前天
      days: [], // 每个月的每天数组
      weeks_ch: [],
      empytGrids: [],
      hasEmptyGrid: false,
      maskStatus: 'hide',
      todayEntity: [],
      currentDayData: [],
      unionuser: null
    }, _this.methods = {
      // 操作'上一周','下一周'
      handleChangeWeek: function handleChangeWeek(params) {
        var self = this;
        var _self$data = self.data,
            currentDate = _self$data.currentDate,
            week = _self$data.week;

        if (params == 'next') {
          var getNextWeek = moment(currentDate).add(7, 'd').format("YYYY-MM-DD"); // 获取当前日期的下一周
          var nextWeekOfFirstDay = parseInt(moment(getNextWeek).startOf('week').format("DD")); // 获取下一周的第一天 DD
          var nextWeekFirstDayOfDate = moment(currentDate).add(7, 'd').startOf('week').format("YYYY-MM-DD"); // 获取下一周的第一天的日期 YYYY-MM-DD
          for (var i = 0; i < 7; i++) {
            week[i].day = moment().dayOfYear(nextWeekOfFirstDay + i).format("DD");
            week[i].date = moment(nextWeekFirstDayOfDate).add(i, 'd').format("YYYY-MM-DD");
          }
          self.currentDate = getNextWeek;
          self.week = week;
          // console.log('下一周7天的数据：', week)
          self.$apply();
          // self.queryWeekSchedule(week[0].date,week[week.length-1].date)
          self.querySchedule(week[0].date, week[week.length - 1].date);
        } else {
          var getPrevWeek = moment(currentDate).subtract(7, 'd').format("YYYY-MM-DD"); // 获取当前日期的上一周
          var prevWeekOfFirstDay = parseInt(moment(getPrevWeek).startOf('week').format("DD"));
          var prevWeekFirstDayOfDate = moment(currentDate).subtract(7, 'd').startOf('week').format("YYYY-MM-DD");
          for (var _i = 0; _i < 7; _i++) {
            week[_i].day = moment().dayOfYear(prevWeekOfFirstDay + _i).format("DD");
            week[_i].date = moment(prevWeekFirstDayOfDate).add(_i, 'd').format("YYYY-MM-DD");
          }
          self.currentDate = getPrevWeek;
          self.week = week;
          self.$apply();
          // self.queryWeekSchedule(week[0].date,week[week.length-1].date)
          self.querySchedule(week[0].date, week[week.length - 1].date);
        }
      },
      handleToDetail: function handleToDetail(params) {
        this.$navigate('./scheduleDetail/scheduleDetail', { id: params });
      },

      // 日历操作上月,下月
      handleCalendar: function handleCalendar(e) {
        var self = this;
        var action = e.currentTarget.dataset.action;
        var currentDate = self.data.currentDate;

        if (action == 'prev') {
          var prevMonth = self.currentMonth - 1;
          var prevYear = self.currentYear;
          console.log('prev:' + prevYear + '-' + prevMonth);
          if (prevMonth < 1) {
            prevYear = self.currentYear - 1;
            prevMonth = 12;
          }
          self.calDays(prevYear, prevMonth);
          self.calEmptyGrid(prevYear, prevMonth);

          self.currentYear = prevYear;
          self.currentDate = moment(currentDate).subtract(1, 'months').format("YYYY-MM-DD");
          self.currentMonth = prevMonth;
          self.$apply();
          console.log('\u5F53\u524D\u65E5\u671F\uFF1A' + currentDate);
        } else {
          var nextMonth = self.currentMonth + 1;
          var nextYear = self.currentYear;
          if (nextMonth > 12) {
            nextYear = self.currentYear + 1;
            nextMonth = 1;
          }
          self.calDays(nextYear, nextMonth);
          self.calEmptyGrid(nextYear, nextMonth);

          self.currentYear = nextYear;
          self.currentMonth = nextMonth;
          self.currentDate = moment(currentDate).add(1, 'months').format("YYYY-MM-DD");
          self.$apply();
          console.log('\u5F53\u524D\u65E5\u671F\uFF1A' + currentDate);
        }
        // console.log(action)
      },

      // 选中当前月
      handleDayItem: function handleDayItem(params) {
        var self = this;
        var week = self.data.week;

        var theWeekFirstDayOfDate = moment(params).startOf('week').format("YYYY-MM-DD"); // 获取该日期所在周的第一天
        var theWeekLastDayOfDate = moment(theWeekFirstDayOfDate).add(6, 'd').format("YYYY-MM-DD"); // 获取该日期所在周的最后一天

        for (var i = 0; i < 7; i++) {
          week[i].day = moment(theWeekFirstDayOfDate).add(i, 'd').format("DD"); // 初始化week数组
          week[i].date = moment(theWeekFirstDayOfDate).add(i, 'd').format("YYYY-MM-DD"); // 初始化week数组
        }
        // console.log('handleDayItem中的Week:', week)
        self.currentDate = params;
        self.maskStatus = 'hide';
        self.$apply();

        self.querySchedule(theWeekFirstDayOfDate, theWeekLastDayOfDate);
      },
      handleCalendarShow: function handleCalendarShow() {
        this.maskStatus = 'show';
        this.$apply();
      },
      closeCalendar: function closeCalendar() {
        this.maskStatus = 'hide';
        this.$apply();
      },
      handletologin: function handletologin() {
        this.$navigate('/pages/login/login');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Schedule, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self, unionuser, weeks_ch, week, thisMonthDays, theWeekFirstDay, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                unionuser = _config2.default.getUnionuser();

                if (!unionuser) {
                  _context.next = 16;
                  break;
                }

                _wepy2.default.showLoading({
                  title: '加载中...'
                });
                weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
                _context.next = 7;
                return self.calEmptyGrid(self.currentYear, self.currentMonth);

              case 7:
                _context.next = 9;
                return self.calDays(self.currentYear, self.currentMonth);

              case 9:
                week = self.week;
                thisMonthDays = new Date(moment().format("YYYY"), moment().format("MM"), 0).getDate();
                theWeekFirstDay = parseInt(moment().startOf('week').format("DD")); // 获取本周的第一天

                for (i = 0; i < 7; i++) {
                  week[i].day = moment().dayOfYear(theWeekFirstDay + i).format("DD"); // 初始化week数组
                  week[i].date = moment().dayOfYear(theWeekFirstDay + i).format("YYYY-MM-DD"); // 初始化week数组
                }
                self.weeks_ch = weeks_ch;
                self.week = week;
                self.$apply();

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      // 获取当前用户信息
      var unionuser = _config2.default.getUnionuser();
      self.unionuser = unionuser;

      if (unionuser) {
        var currentDate = self.data.currentDate;

        var theWeekFirstDay = moment(currentDate).startOf('week').format("YYYY-MM-DD"); // 获取该日期所在周的第一天
        var theWeekLastDay = moment(currentDate).endOf('week').format("YYYY-MM-DD"); // 获取该日期所在周的最后一周
        self.querySchedule(theWeekFirstDay, theWeekLastDay);
      }
    }
    // 计算每个月的轮空数

  }, {
    key: 'calEmptyGrid',
    value: function calEmptyGrid(year, month) {
      var self = this;
      var firstDayOfWeek = new Date(Date.UTC(year, month - 1, 1)).getDay();
      var empytGrids = [];
      if (firstDayOfWeek > 0) {
        for (var i = 0; i < firstDayOfWeek; i++) {
          empytGrids.push(i);
        }
        self.empytGrids = empytGrids;
        self.hasEmptyGrid = true;
        self.$apply();
      } else {
        self.empytGrids = [];
        self.hasEmptyGrid = false;
        self.$apply();
      }
      // console.log(`每个月空格数:${self.empytGrids}`)
    }
    // 获取当月的天数

  }, {
    key: 'calDays',
    value: function calDays(year, month) {
      var self = this;
      var currentDate = self.data.currentDate;

      var days = [];
      var thisMonthDays = new Date(year, month, 0).getDate(); // 获取当前月的天数(eg: 1月 31天)  
      for (var i = 1; i <= thisMonthDays; i++) {
        var choosed = currentDate == moment(year + '-' + month + '-' + i, 'YYYY-MM-D').format("YYYY-MM-DD") ? true : false;
        days.push({
          dayDate: moment(year + '-' + month + '-' + i, 'YYYY-MM-D').format("YYYY-MM-DD"), // 每天的完整日期
          day: i, // 每天的 日
          choosed: choosed // 是否是当天，如果是则为true
        });
      }
      self.days = days;
      self.$apply();
    }
    // 查询课程表

  }, {
    key: 'querySchedule',
    value: function querySchedule(startDate, endDate) {
      // console.log(`查询课表的时间：${startDate}--${endDate}`)
      var self = this;
      var _self$data2 = self.data,
          currentDate = _self$data2.currentDate,
          week = _self$data2.week,
          currentDayData = _self$data2.currentDayData;
      // console.log('week:', week)

      services_calendar_week.query({
        params: {
          studentId: 6,
          startDate: startDate,
          endDate: endDate,
          _info: 'course.teacher.classroom'
        },
        success: function success(res) {
          var list = res.list;

          var newList = list;
          // 遍历数据，筛选每天的数据存放在currentWeekData中
          for (var i = 0; i < 7; i++) {
            // 取出每一天的数据
            var aDayCourses = newList.filter(function (item) {
              var time = moment(item.startTime).format('YYYY-MM-DD');
              var theWeekfirstDay = moment(currentDate).startOf('week').add(i, 'd').format("YYYY-MM-DD");
              return time == theWeekfirstDay;
            });
            week[i].list = aDayCourses;
            for (var m in week[i].list) {
              var start = moment(week[i].list[m].startTime.toString(), 'YYYY-MM-DD hh:mm:ss').format("hh:mm");
              var end = moment(week[i].list[m].endTime.toString(), 'YYYY-MM-DD hh:mm:ss').format("hh:mm");
              week[i].list[m].startTime = start;
              week[i].list[m].endTime = end;
            }
            // 判断是否是今天，并存入数据
            if (week[i].date == currentDate) {
              self.currentDayData = week[i].list;
              self.$apply();
            }
          }
          self.week = week;
          self.$apply();
          // console.log('本周的7天数据：',week)
          // self.weekOfCoursesList = newList
        },
        complete: function complete() {
          _wepy2.default.hideLoading();
        }
      });
    }

    // 获取选中天的数据

  }, {
    key: 'handleQuerySelectedDay',
    value: function handleQuerySelectedDay(e) {
      var self = this;
      var _self$data3 = self.data,
          currentDayData = _self$data3.currentDayData,
          week = _self$data3.week,
          currentDate = _self$data3.currentDate;

      var selectedDay = e.currentTarget.dataset.index; // 获取当前Index
      var selectedDayCourse = week[selectedDay].list; // 从week取出选中天的list
      self.currentDate = week[selectedDay].date; // 改变选中的天时候的日期
      self.currentDayData = selectedDayCourse;
      self.$apply();
    }
  }]);

  return Schedule;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Schedule , 'pages/schedule'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzX2xlc3Nvbl9zdWJqZWN0Iiwic2VydmljZXNfY2FsZW5kYXJfd2VlayIsInNlcnZpY2VzX2NvdXJzZXNfZGV0YWlsIiwibW9tZW50IiwicmVxdWlyZSIsIlNjaGVkdWxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ3ZWVrIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ0aGlzTW9udGhEYXlzIiwiY3VycmVudE1vbnRoIiwicGFyc2VJbnQiLCJjdXJyZW50WWVhciIsInllYXIiLCJjdXJyZW50RGF5IiwiZGF5T2ZZZWFyIiwiZGF5cyIsIndlZWtzX2NoIiwiZW1weXRHcmlkcyIsImhhc0VtcHR5R3JpZCIsIm1hc2tTdGF0dXMiLCJ0b2RheUVudGl0eSIsImN1cnJlbnREYXlEYXRhIiwidW5pb251c2VyIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZVdlZWsiLCJwYXJhbXMiLCJzZWxmIiwiZ2V0TmV4dFdlZWsiLCJhZGQiLCJuZXh0V2Vla09mRmlyc3REYXkiLCJzdGFydE9mIiwibmV4dFdlZWtGaXJzdERheU9mRGF0ZSIsImkiLCJkYXkiLCJkYXRlIiwiJGFwcGx5IiwicXVlcnlTY2hlZHVsZSIsImxlbmd0aCIsImdldFByZXZXZWVrIiwic3VidHJhY3QiLCJwcmV2V2Vla09mRmlyc3REYXkiLCJwcmV2V2Vla0ZpcnN0RGF5T2ZEYXRlIiwiaGFuZGxlVG9EZXRhaWwiLCIkbmF2aWdhdGUiLCJpZCIsImhhbmRsZUNhbGVuZGFyIiwiZSIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicHJldk1vbnRoIiwicHJldlllYXIiLCJjb25zb2xlIiwibG9nIiwiY2FsRGF5cyIsImNhbEVtcHR5R3JpZCIsIm5leHRNb250aCIsIm5leHRZZWFyIiwiaGFuZGxlRGF5SXRlbSIsInRoZVdlZWtGaXJzdERheU9mRGF0ZSIsInRoZVdlZWtMYXN0RGF5T2ZEYXRlIiwiaGFuZGxlQ2FsZW5kYXJTaG93IiwiY2xvc2VDYWxlbmRhciIsImhhbmRsZXRvbG9naW4iLCJnZXRVbmlvbnVzZXIiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiRGF0ZSIsImdldERhdGUiLCJ0aGVXZWVrRmlyc3REYXkiLCJ0aGVXZWVrTGFzdERheSIsImVuZE9mIiwibW9udGgiLCJmaXJzdERheU9mV2VlayIsIlVUQyIsImdldERheSIsInB1c2giLCJjaG9vc2VkIiwiZGF5RGF0ZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJxdWVyeSIsInN0dWRlbnRJZCIsIl9pbmZvIiwic3VjY2VzcyIsInJlcyIsImxpc3QiLCJuZXdMaXN0IiwiYURheUNvdXJzZXMiLCJmaWx0ZXIiLCJpdGVtIiwidGltZSIsInN0YXJ0VGltZSIsInRoZVdlZWtmaXJzdERheSIsIm0iLCJzdGFydCIsInRvU3RyaW5nIiwiZW5kIiwiZW5kVGltZSIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJzZWxlY3RlZERheSIsImluZGV4Iiwic2VsZWN0ZWREYXlDb3Vyc2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7O0lBQVlBLHVCOztBQUNaOztJQUFZQyxzQjs7QUFDWjs7SUFBWUMsdUI7O0FBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxTQUFTQyxRQUFRLGlCQUFSLENBQWY7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyx1QkFBaUI7QUFDZixvQkFBWSx3Q0FERztBQUVmLG9CQUFZLHdDQUZHO0FBR2Ysa0JBQVUsc0NBSEs7QUFJZixvQkFBWSx3Q0FKRztBQUtmLHFCQUFhLHlDQUxFO0FBTWYscUJBQWEs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QU8sSUFBWDtBQUR5Qix3QkFFcUJBLEtBQUt0QixJQUYxQjtBQUFBLFVBRWpCaUIsY0FGaUIsZUFFakJBLGNBRmlCO0FBQUEsVUFFRGhCLElBRkMsZUFFREEsSUFGQztBQUFBLFVBRUtDLFdBRkwsZUFFS0EsV0FGTDs7QUFHekIsVUFBSStGLGNBQWN2RCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QnFELEtBQTFDLENBSHlCLENBR3dCO0FBQ2pELFVBQUlDLG9CQUFvQmxHLEtBQUtnRyxXQUFMLEVBQWtCZixJQUExQyxDQUp5QixDQUl3QjtBQUNqRDVELFdBQUtwQixXQUFMLEdBQW1CRCxLQUFLZ0csV0FBTCxFQUFrQm5FLElBQXJDLENBTHlCLENBS3dCO0FBQ2pEUixXQUFLTCxjQUFMLEdBQXNCa0YsaUJBQXRCO0FBQ0E3RSxXQUFLUyxNQUFMO0FBQ0Q7Ozs7RUE1UW1DLGVBQUtxRSxJOztrQkFBdEIzRyxRIiwiZmlsZSI6InNjaGVkdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgKiBhcyBzZXJ2aWNlc19sZXNzb25fc3ViamVjdCBmcm9tICcuLi9zZXJ2aWNlcy9sZXNzb24vc3ViamVjdCdcclxuICBpbXBvcnQgKiBhcyBzZXJ2aWNlc19jYWxlbmRhcl93ZWVrIGZyb20gJy4uL3NlcnZpY2VzL3NjaGVkdWxlL3NjaGVkdWxlJ1xyXG4gIGltcG9ydCAqIGFzIHNlcnZpY2VzX2NvdXJzZXNfZGV0YWlsIGZyb20gJy4uL3NlcnZpY2VzL2xlc3Nvbi9kZXRhaWwnXHJcblxyXG4gIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcclxuXHJcbiAgY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnLi4vdXRpbHMvbW9tZW50JylcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZWR1bGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K++56iL6KGoJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAnd3hjLWljb24nOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1jYyc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtbWFzayc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLW1hc2svZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1hYm5vcic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWFibm9yL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtcG9wdXAnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wb3B1cC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxvYWRpbmcnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkaW5nL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB3ZWVrOiBbe3dlZWs6ICflkajml6UnfSx7d2VlazogJ+WRqOS4gCd9LHt3ZWVrOiAn5ZGo5LqMJ30se3dlZWs6ICflkajkuIknfSx7d2VlazogJ+WRqOWbmyd9LHt3ZWVrOiAn5ZGo5LqUJ30se3dlZWs6ICflkajlha0nfV0sXHJcbiAgICAgIGN1cnJlbnREYXRlOiBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLCAgLy8g6I635Y+W5b2T5YmN5pel5pyfIFlZWVktTU0tRERcclxuICAgICAgdGhpc01vbnRoRGF5czogW10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5blvZPliY3mnIjkuIDlhbHlpJrlsJHlpKlcclxuICAgICAgY3VycmVudE1vbnRoOiBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoXCJNTVwiKSksICAgICAgICAgICAgIC8vIOW9k+WJjeaciOS7vVxyXG4gICAgICBjdXJyZW50WWVhcjogbW9tZW50KCkueWVhcigpLCAgICAgICAgICAgICAgIC8vIOW9k+WJjeW5tOS7vVxyXG4gICAgICBjdXJyZW50RGF5OiBtb21lbnQoKS5kYXlPZlllYXIoKSwgICAgICAgICAgICAgICAvLyDlvZPliY3lpKlcclxuICAgICAgZGF5czogW10sICAgICAvLyDmr4/kuKrmnIjnmoTmr4/lpKnmlbDnu4RcclxuICAgICAgd2Vla3NfY2g6IFtdLFxyXG4gICAgICBlbXB5dEdyaWRzOiBbXSxcclxuICAgICAgaGFzRW1wdHlHcmlkOiBmYWxzZSAsXHJcbiAgICAgIG1hc2tTdGF0dXM6ICdoaWRlJyxcclxuICAgICAgdG9kYXlFbnRpdHk6IFtdLFxyXG4gICAgICBjdXJyZW50RGF5RGF0YTogW10sXHJcbiAgICAgIHVuaW9udXNlcjogbnVsbFxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5pON5L2cJ+S4iuS4gOWRqCcsJ+S4i+S4gOWRqCdcclxuICAgICAgaGFuZGxlQ2hhbmdlV2VlayAocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50RGF0ZSwgd2VlayB9ID0gc2VsZi5kYXRhXHJcbiAgICAgICAgaWYocGFyYW1zID09ICduZXh0Jykge1xyXG4gICAgICAgICAgbGV0IGdldE5leHRXZWVrID0gbW9tZW50KGN1cnJlbnREYXRlKS5hZGQoNywgJ2QnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpICAvLyDojrflj5blvZPliY3ml6XmnJ/nmoTkuIvkuIDlkahcclxuICAgICAgICAgIGxldCBuZXh0V2Vla09mRmlyc3REYXkgPXBhcnNlSW50KG1vbWVudChnZXROZXh0V2Vlaykuc3RhcnRPZignd2VlaycpLmZvcm1hdChcIkREXCIpKSAvLyDojrflj5bkuIvkuIDlkajnmoTnrKzkuIDlpKkgRERcclxuICAgICAgICAgIGxldCBuZXh0V2Vla0ZpcnN0RGF5T2ZEYXRlID0gbW9tZW50KGN1cnJlbnREYXRlKS5hZGQoNywgJ2QnKS5zdGFydE9mKCd3ZWVrJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSAgLy8g6I635Y+W5LiL5LiA5ZGo55qE56ys5LiA5aSp55qE5pel5pyfIFlZWVktTU0tRERcclxuICAgICAgICAgIGZvcihsZXQgaT0wO2k8NztpKyspIHtcclxuICAgICAgICAgICAgd2Vla1tpXS5kYXkgPSBtb21lbnQoKS5kYXlPZlllYXIobmV4dFdlZWtPZkZpcnN0RGF5K2kpLmZvcm1hdChcIkREXCIpXHJcbiAgICAgICAgICAgIHdlZWtbaV0uZGF0ZSA9IG1vbWVudChuZXh0V2Vla0ZpcnN0RGF5T2ZEYXRlKS5hZGQoaSwgJ2QnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWxmLmN1cnJlbnREYXRlID0gZ2V0TmV4dFdlZWtcclxuICAgICAgICAgIHNlbGYud2VlayA9IHdlZWtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfkuIvkuIDlkag35aSp55qE5pWw5o2u77yaJywgd2VlaylcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgIC8vIHNlbGYucXVlcnlXZWVrU2NoZWR1bGUod2Vla1swXS5kYXRlLHdlZWtbd2Vlay5sZW5ndGgtMV0uZGF0ZSlcclxuICAgICAgICAgIHNlbGYucXVlcnlTY2hlZHVsZSh3ZWVrWzBdLmRhdGUsd2Vla1t3ZWVrLmxlbmd0aC0xXS5kYXRlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgZ2V0UHJldldlZWsgPSBtb21lbnQoY3VycmVudERhdGUpLnN1YnRyYWN0KDcsICdkJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSAvLyDojrflj5blvZPliY3ml6XmnJ/nmoTkuIrkuIDlkahcclxuICAgICAgICAgIGxldCBwcmV2V2Vla09mRmlyc3REYXkgPSBwYXJzZUludChtb21lbnQoZ2V0UHJldldlZWspLnN0YXJ0T2YoJ3dlZWsnKS5mb3JtYXQoXCJERFwiKSlcclxuICAgICAgICAgIGxldCBwcmV2V2Vla0ZpcnN0RGF5T2ZEYXRlID0gbW9tZW50KGN1cnJlbnREYXRlKS5zdWJ0cmFjdCg3LCAnZCcpLnN0YXJ0T2YoJ3dlZWsnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgICBmb3IobGV0IGk9MDtpPDc7aSsrKSB7XHJcbiAgICAgICAgICAgIHdlZWtbaV0uZGF5ID0gbW9tZW50KCkuZGF5T2ZZZWFyKHByZXZXZWVrT2ZGaXJzdERheStpKS5mb3JtYXQoXCJERFwiKVxyXG4gICAgICAgICAgICB3ZWVrW2ldLmRhdGUgPSBtb21lbnQocHJldldlZWtGaXJzdERheU9mRGF0ZSkuYWRkKGksICdkJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZi5jdXJyZW50RGF0ZSA9IGdldFByZXZXZWVrXHJcbiAgICAgICAgICBzZWxmLndlZWsgPSB3ZWVrXHJcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICAvLyBzZWxmLnF1ZXJ5V2Vla1NjaGVkdWxlKHdlZWtbMF0uZGF0ZSx3ZWVrW3dlZWsubGVuZ3RoLTFdLmRhdGUpXHJcbiAgICAgICAgICBzZWxmLnF1ZXJ5U2NoZWR1bGUod2Vla1swXS5kYXRlLHdlZWtbd2Vlay5sZW5ndGgtMV0uZGF0ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZVRvRGV0YWlsIChwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgLi9zY2hlZHVsZURldGFpbC9zY2hlZHVsZURldGFpbGAsIHtpZDogcGFyYW1zfSlcclxuICAgICAgfSxcclxuICAgICAgLy8g5pel5Y6G5pON5L2c5LiK5pyILOS4i+aciFxyXG4gICAgICBoYW5kbGVDYWxlbmRhciAoZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aW9uIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudERhdGUgfSA9IHNlbGYuZGF0YVxyXG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgICBsZXQgcHJldk1vbnRoID0gc2VsZi5jdXJyZW50TW9udGggLTEgXHJcbiAgICAgICAgICBsZXQgcHJldlllYXIgPSBzZWxmLmN1cnJlbnRZZWFyXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgcHJldjoke3ByZXZZZWFyfS0ke3ByZXZNb250aH1gKVxyXG4gICAgICAgICAgaWYocHJldk1vbnRoIDwgMSkge1xyXG4gICAgICAgICAgICBwcmV2WWVhciA9IHNlbGYuY3VycmVudFllYXIgLSAxXHJcblx0XHRcdFx0ICAgIHByZXZNb250aCA9IDEyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWxmLmNhbERheXMocHJldlllYXIsIHByZXZNb250aClcclxuICAgICAgICAgIHNlbGYuY2FsRW1wdHlHcmlkKHByZXZZZWFyLCBwcmV2TW9udGgpXHJcblxyXG4gICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHByZXZZZWFyXHJcbiAgICAgICAgICBzZWxmLmN1cnJlbnREYXRlID0gbW9tZW50KGN1cnJlbnREYXRlKS5zdWJ0cmFjdCgxLCAnbW9udGhzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKVxyXG4gICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBwcmV2TW9udGhcclxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDlvZPliY3ml6XmnJ/vvJoke2N1cnJlbnREYXRlfWApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBuZXh0TW9udGggPSBzZWxmLmN1cnJlbnRNb250aCArIDFcclxuICAgICAgICAgIGxldCBuZXh0WWVhciA9IHNlbGYuY3VycmVudFllYXJcclxuICAgICAgICAgIGlmIChuZXh0TW9udGggPiAxMikge1xyXG4gICAgICAgICAgICBuZXh0WWVhciA9IHNlbGYuY3VycmVudFllYXIgKyAxIFxyXG4gICAgICAgICAgICBuZXh0TW9udGggPSAxXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgc2VsZi5jYWxEYXlzKG5leHRZZWFyLCBuZXh0TW9udGgpXHJcbiAgICAgICAgICBzZWxmLmNhbEVtcHR5R3JpZChuZXh0WWVhciwgbmV4dE1vbnRoKVxyXG5cclxuICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBuZXh0WWVhclxyXG4gICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBuZXh0TW9udGhcclxuICAgICAgICAgIHNlbGYuY3VycmVudERhdGUgPSBtb21lbnQoY3VycmVudERhdGUpLmFkZCgxLCAnbW9udGhzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKVxyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYOW9k+WJjeaXpeacn++8miR7Y3VycmVudERhdGV9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpgInkuK3lvZPliY3mnIhcclxuICAgICAgaGFuZGxlRGF5SXRlbSAocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgY29uc3QgeyB3ZWVrIH0gPSBzZWxmLmRhdGFcclxuICAgICAgICBjb25zdCB0aGVXZWVrRmlyc3REYXlPZkRhdGUgPSBtb21lbnQocGFyYW1zKS5zdGFydE9mKCd3ZWVrJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSAvLyDojrflj5bor6Xml6XmnJ/miYDlnKjlkajnmoTnrKzkuIDlpKlcclxuICAgICAgICBjb25zdCB0aGVXZWVrTGFzdERheU9mRGF0ZSA9IG1vbWVudCh0aGVXZWVrRmlyc3REYXlPZkRhdGUpLmFkZCg2LCAnZCcpLmZvcm1hdChcIllZWVktTU0tRERcIikgLy8g6I635Y+W6K+l5pel5pyf5omA5Zyo5ZGo55qE5pyA5ZCO5LiA5aSpXHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NztpKyspIHtcclxuICAgICAgICAgIHdlZWtbaV0uZGF5ID0gbW9tZW50KHRoZVdlZWtGaXJzdERheU9mRGF0ZSkuYWRkKGksICdkJykuZm9ybWF0KFwiRERcIikgLy8g5Yid5aeL5YyWd2Vla+aVsOe7hFxyXG4gICAgICAgICAgd2Vla1tpXS5kYXRlID0gbW9tZW50KHRoZVdlZWtGaXJzdERheU9mRGF0ZSkuYWRkKGksICdkJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSAvLyDliJ3lp4vljJZ3ZWVr5pWw57uEXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGVEYXlJdGVt5Lit55qEV2VlazonLCB3ZWVrKVxyXG4gICAgICAgIHNlbGYuY3VycmVudERhdGUgPSBwYXJhbXNcclxuICAgICAgICBzZWxmLm1hc2tTdGF0dXMgPSAnaGlkZSdcclxuICAgICAgICBzZWxmLiRhcHBseSgpXHJcblxyXG4gICAgICAgIHNlbGYucXVlcnlTY2hlZHVsZSh0aGVXZWVrRmlyc3REYXlPZkRhdGUsIHRoZVdlZWtMYXN0RGF5T2ZEYXRlKVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVDYWxlbmRhclNob3cgKCkge1xyXG4gICAgICAgIHRoaXMubWFza1N0YXR1cyA9ICdzaG93J1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgY2xvc2VDYWxlbmRhciAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXNrU3RhdHVzID0gJ2hpZGUnXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGV0b2xvZ2luICgpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnL3BhZ2VzL2xvZ2luL2xvZ2luJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkICgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGNvbnN0IHVuaW9udXNlciA9IGNvbmZpZy5nZXRVbmlvbnVzZXIoKVxyXG4gICAgICBpZiAodW5pb251c2VyKSB7XHJcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rS4uLidcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHdlZWtzX2NoID0gWyAn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJyBdXHJcbiAgICAgICAgYXdhaXQgc2VsZi5jYWxFbXB0eUdyaWQoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgpXHJcbiAgICAgICAgYXdhaXQgc2VsZi5jYWxEYXlzKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoKVxyXG4gICAgICAgIGxldCB3ZWVrID0gc2VsZi53ZWVrXHJcbiAgICAgICAgY29uc3QgdGhpc01vbnRoRGF5cyA9IG5ldyBEYXRlKG1vbWVudCgpLmZvcm1hdChcIllZWVlcIiksIG1vbWVudCgpLmZvcm1hdChcIk1NXCIpLCAwKS5nZXREYXRlKClcclxuICAgICAgICBjb25zdCB0aGVXZWVrRmlyc3REYXkgPSBwYXJzZUludChtb21lbnQoKS5zdGFydE9mKCd3ZWVrJykuZm9ybWF0KFwiRERcIikpIC8vIOiOt+WPluacrOWRqOeahOesrOS4gOWkqVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NztpKyspIHtcclxuICAgICAgICAgIHdlZWtbaV0uZGF5ID0gbW9tZW50KCkuZGF5T2ZZZWFyKHRoZVdlZWtGaXJzdERheStpKS5mb3JtYXQoXCJERFwiKSAvLyDliJ3lp4vljJZ3ZWVr5pWw57uEXHJcbiAgICAgICAgICB3ZWVrW2ldLmRhdGUgPSBtb21lbnQoKS5kYXlPZlllYXIodGhlV2Vla0ZpcnN0RGF5K2kpLmZvcm1hdChcIllZWVktTU0tRERcIikgLy8g5Yid5aeL5YyWd2Vla+aVsOe7hFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLndlZWtzX2NoID0gd2Vla3NfY2hcclxuICAgICAgICBzZWxmLndlZWsgPSB3ZWVrIFxyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgLy8g6I635Y+W5b2T5YmN55So5oi35L+h5oGvXHJcbiAgICAgIGNvbnN0IHVuaW9udXNlciA9IGNvbmZpZy5nZXRVbmlvbnVzZXIoKVxyXG4gICAgICBzZWxmLnVuaW9udXNlciA9IHVuaW9udXNlciBcclxuICAgICAgXHJcbiAgICAgIGlmICh1bmlvbnVzZXIpIHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnREYXRlIH0gPSBzZWxmLmRhdGFcclxuICAgICAgICBjb25zdCB0aGVXZWVrRmlyc3REYXkgPSBtb21lbnQoY3VycmVudERhdGUpLnN0YXJ0T2YoJ3dlZWsnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIC8vIOiOt+WPluivpeaXpeacn+aJgOWcqOWRqOeahOesrOS4gOWkqVxyXG4gICAgICAgIGNvbnN0IHRoZVdlZWtMYXN0RGF5ID0gbW9tZW50KGN1cnJlbnREYXRlKS5lbmRPZignd2VlaycpLmZvcm1hdChcIllZWVktTU0tRERcIikgICAgIC8vIOiOt+WPluivpeaXpeacn+aJgOWcqOWRqOeahOacgOWQjuS4gOWRqFxyXG4gICAgICAgIHNlbGYucXVlcnlTY2hlZHVsZSh0aGVXZWVrRmlyc3REYXksIHRoZVdlZWtMYXN0RGF5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDorqHnrpfmr4/kuKrmnIjnmoTova7nqbrmlbBcclxuICAgIGNhbEVtcHR5R3JpZCAoeWVhciwgbW9udGgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGxldCBmaXJzdERheU9mV2VlayA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgMSkpLmdldERheSgpXHJcbiAgICAgIGxldCBlbXB5dEdyaWRzID0gW11cclxuICAgICAgICBpZiggZmlyc3REYXlPZldlZWsgPiAwICkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXJzdERheU9mV2VlazsgaSsrKSB7XHJcbiAgICAgICAgICAgIGVtcHl0R3JpZHMucHVzaChpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZi5lbXB5dEdyaWRzID0gZW1weXRHcmlkc1xyXG4gICAgICAgICAgc2VsZi5oYXNFbXB0eUdyaWQgPSB0cnVlXHJcbiAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZWxmLmVtcHl0R3JpZHMgPSBbXVxyXG4gICAgICAgICAgc2VsZi5oYXNFbXB0eUdyaWQgPSBmYWxzZVxyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGDmr4/kuKrmnIjnqbrmoLzmlbA6JHtzZWxmLmVtcHl0R3JpZHN9YClcclxuICAgIH1cclxuICAgIC8vIOiOt+WPluW9k+aciOeahOWkqeaVsFxyXG4gICAgY2FsRGF5cyAoeWVhciwgbW9udGgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzIFxyXG4gICAgICBjb25zdCB7IGN1cnJlbnREYXRlIH0gPSBzZWxmLmRhdGFcclxuICAgICAgbGV0IGRheXMgPSBbXVxyXG4gICAgICBjb25zdCB0aGlzTW9udGhEYXlzID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKSAvLyDojrflj5blvZPliY3mnIjnmoTlpKnmlbAoZWc6IDHmnIggMzHlpKkpICBcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpc01vbnRoRGF5czsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNob29zZWQgPSBjdXJyZW50RGF0ZSA9PSAgbW9tZW50KGAke3llYXJ9LSR7bW9udGh9LSR7aX1gLCAnWVlZWS1NTS1EJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSA/IHRydWUgOiBmYWxzZSBcclxuICAgICAgICBkYXlzLnB1c2goe1xyXG4gICAgICAgICAgZGF5RGF0ZTogbW9tZW50KGAke3llYXJ9LSR7bW9udGh9LSR7aX1gLCAnWVlZWS1NTS1EJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSwgIC8vIOavj+WkqeeahOWujOaVtOaXpeacn1xyXG4gICAgICAgICAgZGF5OiBpLCAgLy8g5q+P5aSp55qEIOaXpVxyXG4gICAgICAgICAgY2hvb3NlZCAgLy8g5piv5ZCm5piv5b2T5aSp77yM5aaC5p6c5piv5YiZ5Li6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgc2VsZi5kYXlzID0gZGF5c1xyXG4gICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICAvLyDmn6Xor6Lor77nqIvooahcclxuICAgIHF1ZXJ5U2NoZWR1bGUgKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhg5p+l6K+i6K++6KGo55qE5pe26Ze077yaJHtzdGFydERhdGV9LS0ke2VuZERhdGV9YClcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGNvbnN0IHsgY3VycmVudERhdGUsIHdlZWssIGN1cnJlbnREYXlEYXRhIH0gPSBzZWxmLmRhdGFcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3dlZWs6Jywgd2VlaylcclxuICAgICAgc2VydmljZXNfY2FsZW5kYXJfd2Vlay5xdWVyeSh7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzdHVkZW50SWQ6IDYsXHJcbiAgICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgICBlbmREYXRlLFxyXG4gICAgICAgICAgX2luZm86ICdjb3Vyc2UudGVhY2hlci5jbGFzc3Jvb20nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGxpc3QgfSA9IHJlc1xyXG4gICAgICAgICAgbGV0IG5ld0xpc3QgPSBsaXN0IFxyXG4gICAgICAgICAgLy8g6YGN5Y6G5pWw5o2u77yM562b6YCJ5q+P5aSp55qE5pWw5o2u5a2Y5pS+5ZyoY3VycmVudFdlZWtEYXRh5LitXHJcbiAgICAgICAgICBmb3IgKHZhciBpPTA7aTw3O2krKyl7XHJcbiAgICAgICAgICAgIC8vIOWPluWHuuavj+S4gOWkqeeahOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgYURheUNvdXJzZXMgPSBuZXdMaXN0LmZpbHRlciggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgdGltZSA9IG1vbWVudChpdGVtLnN0YXJ0VGltZSkuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgICAgICAgICAgICBsZXQgdGhlV2Vla2ZpcnN0RGF5ID0gbW9tZW50KGN1cnJlbnREYXRlKS5zdGFydE9mKCd3ZWVrJykuYWRkKGksICdkJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWUgPT0gdGhlV2Vla2ZpcnN0RGF5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHdlZWtbaV0ubGlzdCA9IGFEYXlDb3Vyc2VzXHJcbiAgICAgICAgICAgICAgZm9yICggbGV0IG0gaW4gd2Vla1tpXS5saXN0ICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gbW9tZW50KHdlZWtbaV0ubGlzdFttXS5zdGFydFRpbWUudG9TdHJpbmcoKSwgJ1lZWVktTU0tREQgaGg6bW06c3MnKS5mb3JtYXQoXCJoaDptbVwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IG1vbWVudCh3ZWVrW2ldLmxpc3RbbV0uZW5kVGltZS50b1N0cmluZygpLCAnWVlZWS1NTS1ERCBoaDptbTpzcycpLmZvcm1hdChcImhoOm1tXCIpXHJcbiAgICAgICAgICAgICAgICB3ZWVrW2ldLmxpc3RbbV0uc3RhcnRUaW1lID0gc3RhcnRcclxuICAgICAgICAgICAgICAgIHdlZWtbaV0ubGlzdFttXS5lbmRUaW1lID0gZW5kXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+S7iuWkqe+8jOW5tuWtmOWFpeaVsOaNrlxyXG4gICAgICAgICAgICAgIGlmKHdlZWtbaV0uZGF0ZSA9PSBjdXJyZW50RGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnREYXlEYXRhID0gd2Vla1tpXS5saXN0XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYud2VlayA9IHdlZWtcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5pys5ZGo55qEN+WkqeaVsOaNru+8micsd2VlaylcclxuICAgICAgICAgIC8vIHNlbGYud2Vla09mQ291cnNlc0xpc3QgPSBuZXdMaXN0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlumAieS4reWkqeeahOaVsOaNrlxyXG4gICAgaGFuZGxlUXVlcnlTZWxlY3RlZERheSAoZSkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXMgXHJcbiAgICAgIGNvbnN0IHsgY3VycmVudERheURhdGEsIHdlZWssIGN1cnJlbnREYXRlIH0gPSBzZWxmLmRhdGFcclxuICAgICAgbGV0IHNlbGVjdGVkRGF5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXggIC8vIOiOt+WPluW9k+WJjUluZGV4XHJcbiAgICAgIGxldCBzZWxlY3RlZERheUNvdXJzZSA9IHdlZWtbc2VsZWN0ZWREYXldLmxpc3QgICAvLyDku453ZWVr5Y+W5Ye66YCJ5Lit5aSp55qEbGlzdFxyXG4gICAgICBzZWxmLmN1cnJlbnREYXRlID0gd2Vla1tzZWxlY3RlZERheV0uZGF0ZSAgICAgICAgLy8g5pS55Y+Y6YCJ5Lit55qE5aSp5pe25YCZ55qE5pel5pyfXHJcbiAgICAgIHNlbGYuY3VycmVudERheURhdGEgPSBzZWxlY3RlZERheUNvdXJzZVxyXG4gICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=