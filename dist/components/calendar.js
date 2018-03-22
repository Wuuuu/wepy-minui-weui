'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../utils/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_wepy$component) {
  _inherits(Calendar, _wepy$component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      currentDate: (0, _moment2.default)().format("YYYY-MM-DD"), // 获取当前日期 YYYY-MM-DD
      currentMonth: (0, _moment2.default)().month() + 1, // 当前月份
      currentYear: (0, _moment2.default)().year(), // 当前年份
      currentDay: (0, _moment2.default)().dayOfYear(), // 当前天
      startOfMonth: (0, _moment2.default)().startOf('week').format("DD"),
      endOfMonth: (0, _moment2.default)().add(20, 'd').format("YYYY-MM-DD"),
      // getFirstDayOfTheWeek: moment([2018, 0, 28]).add(7, 'd').format("YYYY-MM-DD"),
      days: [], // 每个月的天数
      weeks_ch: [],
      empytGrids: [],
      hasEmptyGrid: false
    }, _this.methods = {
      handleCalendar: function handleCalendar(e) {
        var self = this;
        var action = e.currentTarget.dataset.action;

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
          self.currentMonth = prevMonth;
          self.$apply();
          console.log('\u5F53\u524D\u5E74\u6708' + self.currentYear + '-' + self.currentMonth);
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
          self.$apply();
          console.log('\u5F53\u524D\u5E74\u6708' + self.currentYear + '-' + self.currentMonth);
        }
        console.log(action);
      },
      handleDayItem: function handleDayItem(e) {
        var self = this;
        var idx = e.currentTarget.dataset.idx;

        var days = self.days;
        days[idx].choosed = !days[idx].choosed;
        self.days = days;
        self.$apply();
        console.log(idx + 1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      console.log('\u672C\u5468\u8D77\u59CB\u65E5\uFF1A' + self.currentYear + '-' + self.currentMonth + '-' + self.startOfMonth);
      var weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
      self.weeks_ch = weeks_ch;
      self.$apply();
      self.calEmptyGrid(self.currentYear, self.currentMonth);
      self.calDays(self.currentYear, self.currentMonth);
    }
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
      console.log('\u6BCF\u4E2A\u6708\u7A7A\u683C\u6570:' + self.empytGrids);
    }
  }, {
    key: 'calDays',
    value: function calDays(year, month) {
      var self = this;
      var days = [];
      // const thisMonthDays = new Date(year, month, 0).getDate() // 获取当前月的天数(eg: 1月 31天)  
      var thisMonthDays = params;
      for (var i = 1; i <= thisMonthDays; i++) {
        days.push({
          day: i,
          choosed: false
        });
      }
      self.days = days;
      self.$apply();
    }
  }]);

  return Calendar;
}(_wepy2.default.component);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJkYXRhIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJjdXJyZW50TW9udGgiLCJtb250aCIsImN1cnJlbnRZZWFyIiwieWVhciIsImN1cnJlbnREYXkiLCJkYXlPZlllYXIiLCJzdGFydE9mTW9udGgiLCJzdGFydE9mIiwiZW5kT2ZNb250aCIsImFkZCIsImRheXMiLCJ3ZWVrc19jaCIsImVtcHl0R3JpZHMiLCJoYXNFbXB0eUdyaWQiLCJtZXRob2RzIiwiaGFuZGxlQ2FsZW5kYXIiLCJlIiwic2VsZiIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicHJldk1vbnRoIiwicHJldlllYXIiLCJjb25zb2xlIiwibG9nIiwiY2FsRGF5cyIsImNhbEVtcHR5R3JpZCIsIiRhcHBseSIsIm5leHRNb250aCIsIm5leHRZZWFyIiwiaGFuZGxlRGF5SXRlbSIsImlkeCIsImNob29zZWQiLCJmaXJzdERheU9mV2VlayIsIkRhdGUiLCJVVEMiLCJnZXREYXkiLCJpIiwicHVzaCIsInRoaXNNb250aERheXMiLCJwYXJhbXMiLCJkYXkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUSxFLFFBRVJDLEksR0FBTztBQUNMQyxtQkFBYSx3QkFBU0MsTUFBVCxDQUFnQixZQUFoQixDQURSLEVBQ3VDO0FBQzVDQyxvQkFBYyx3QkFBU0MsS0FBVCxLQUFpQixDQUYxQixFQUV5QztBQUM5Q0MsbUJBQWEsd0JBQVNDLElBQVQsRUFIUixFQUd1QztBQUM1Q0Msa0JBQVksd0JBQVNDLFNBQVQsRUFKUCxFQUkyQztBQUNoREMsb0JBQWMsd0JBQVNDLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUJSLE1BQXpCLENBQWdDLElBQWhDLENBTFQ7QUFNTFMsa0JBQVksd0JBQVNDLEdBQVQs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b3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IG1vbWVudCBmcm9tICcuLi91dGlscy9tb21lbnQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7IFxuICAgICAgY3VycmVudERhdGU6IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIiksIC8vIOiOt+WPluW9k+WJjeaXpeacnyBZWVlZLU1NLUREXG4gICAgICBjdXJyZW50TW9udGg6IG1vbWVudCgpLm1vbnRoKCkrMSwgICAgICAgICAgICAgLy8g5b2T5YmN5pyI5Lu9XG4gICAgICBjdXJyZW50WWVhcjogbW9tZW50KCkueWVhcigpLCAgICAgICAgICAgICAgIC8vIOW9k+WJjeW5tOS7vVxuICAgICAgY3VycmVudERheTogbW9tZW50KCkuZGF5T2ZZZWFyKCksICAgICAgICAgICAgICAgLy8g5b2T5YmN5aSpXG4gICAgICBzdGFydE9mTW9udGg6IG1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKS5mb3JtYXQoXCJERFwiKSxcbiAgICAgIGVuZE9mTW9udGg6IG1vbWVudCgpLmFkZCgyMCwgJ2QnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgLy8gZ2V0Rmlyc3REYXlPZlRoZVdlZWs6IG1vbWVudChbMjAxOCwgMCwgMjhdKS5hZGQoNywgJ2QnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgZGF5czogW10sICAvLyDmr4/kuKrmnIjnmoTlpKnmlbBcbiAgICAgIHdlZWtzX2NoOiBbXSxcbiAgICAgIGVtcHl0R3JpZHM6IFtdLFxuICAgICAgaGFzRW1wdHlHcmlkOiBmYWxzZVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlQ2FsZW5kYXIgKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgYWN0aW9uIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgICBpZiAoYWN0aW9uID09ICdwcmV2Jykge1xuICAgICAgICAgIGxldCBwcmV2TW9udGggPSBzZWxmLmN1cnJlbnRNb250aCAtMSBcbiAgICAgICAgICBsZXQgcHJldlllYXIgPSBzZWxmLmN1cnJlbnRZZWFyXG4gICAgICAgICAgY29uc29sZS5sb2coYHByZXY6JHtwcmV2WWVhcn0tJHtwcmV2TW9udGh9YClcbiAgICAgICAgICBpZihwcmV2TW9udGggPCAxKSB7XG4gICAgICAgICAgICBwcmV2WWVhciA9IHNlbGYuY3VycmVudFllYXIgLSAxXG5cdFx0XHRcdCAgICBwcmV2TW9udGggPSAxMlxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLmNhbERheXMocHJldlllYXIsIHByZXZNb250aClcbiAgICAgICAgICBzZWxmLmNhbEVtcHR5R3JpZChwcmV2WWVhciwgcHJldk1vbnRoKVxuXG4gICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHByZXZZZWFyXG4gICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBwcmV2TW9udGhcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgY29uc29sZS5sb2coYOW9k+WJjeW5tOaciCR7c2VsZi5jdXJyZW50WWVhcn0tJHtzZWxmLmN1cnJlbnRNb250aH1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZXh0TW9udGggPSBzZWxmLmN1cnJlbnRNb250aCArIDFcbiAgICAgICAgICBsZXQgbmV4dFllYXIgPSBzZWxmLmN1cnJlbnRZZWFyXG4gICAgICAgICAgaWYgKG5leHRNb250aCA+IDEyKSB7XG4gICAgICAgICAgICBuZXh0WWVhciA9IHNlbGYuY3VycmVudFllYXIgKyAxIFxuICAgICAgICAgICAgbmV4dE1vbnRoID0gMVxuICAgICAgICAgIH0gXG4gICAgICAgICAgc2VsZi5jYWxEYXlzKG5leHRZZWFyLCBuZXh0TW9udGgpXG4gICAgICAgICAgc2VsZi5jYWxFbXB0eUdyaWQobmV4dFllYXIsIG5leHRNb250aClcblxuICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBuZXh0WWVhclxuICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gbmV4dE1vbnRoXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGDlvZPliY3lubTmnIgke3NlbGYuY3VycmVudFllYXJ9LSR7c2VsZi5jdXJyZW50TW9udGh9YClcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgICB9LFxuICAgICAgaGFuZGxlRGF5SXRlbSAoZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBpZHggfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XG5cdFx0ICAgIGNvbnN0IGRheXMgPSBzZWxmLmRheXNcblx0ICAgIFx0ZGF5c1sgaWR4IF0uY2hvb3NlZCA9ICFkYXlzWyBpZHggXS5jaG9vc2VkXG4gICAgICAgIHNlbGYuZGF5cyA9IGRheXNcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICBjb25zb2xlLmxvZyhpZHgrMSlcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhg5pys5ZGo6LW35aeL5pel77yaJHtzZWxmLmN1cnJlbnRZZWFyfS0ke3NlbGYuY3VycmVudE1vbnRofS0ke3NlbGYuc3RhcnRPZk1vbnRofWApXG4gICAgICBjb25zdCB3ZWVrc19jaCA9IFsgJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScgXVxuICAgICAgc2VsZi53ZWVrc19jaCA9IHdlZWtzX2NoXG4gICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgc2VsZi5jYWxFbXB0eUdyaWQoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgpXG4gICAgICBzZWxmLmNhbERheXMoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgpXG4gICAgfVxuICAgIGNhbEVtcHR5R3JpZCAoeWVhciwgbW9udGgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGZpcnN0RGF5T2ZXZWVrID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggLSAxLCAxKSkuZ2V0RGF5KClcbiAgICAgIGxldCBlbXB5dEdyaWRzID0gW11cbiAgICAgICAgaWYoIGZpcnN0RGF5T2ZXZWVrID4gMCApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpcnN0RGF5T2ZXZWVrOyBpKyspIHtcbiAgICAgICAgICAgIGVtcHl0R3JpZHMucHVzaChpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLmVtcHl0R3JpZHMgPSBlbXB5dEdyaWRzXG4gICAgICAgICAgc2VsZi5oYXNFbXB0eUdyaWQgPSB0cnVlXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmVtcHl0R3JpZHMgPSBbXVxuICAgICAgICAgIHNlbGYuaGFzRW1wdHlHcmlkID0gZmFsc2VcbiAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhg5q+P5Liq5pyI56m65qC85pWwOiR7c2VsZi5lbXB5dEdyaWRzfWApXG4gICAgfVxuICAgIGNhbERheXMgKHllYXIsIG1vbnRoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXMgXG4gICAgICBsZXQgZGF5cyA9IFtdXG4gICAgICAvLyBjb25zdCB0aGlzTW9udGhEYXlzID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKSAvLyDojrflj5blvZPliY3mnIjnmoTlpKnmlbAoZWc6IDHmnIggMzHlpKkpICBcbiAgICAgIGxldCB0aGlzTW9udGhEYXlzID0gcGFyYW1zXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzTW9udGhEYXlzOyBpKyspIHtcbiAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICBkYXk6IGksXG4gICAgICAgICAgY2hvb3NlZDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHNlbGYuZGF5cyA9IGRheXNcbiAgICAgIHNlbGYuJGFwcGx5KClcbiAgICB9XG59XG5cbiJdfQ==