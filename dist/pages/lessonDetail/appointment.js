'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _underscore = require('./../../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

var _detail = require('./../../services/lesson/detail.js');

var services_lesson_appointment = _interopRequireWildcard(_detail);

var _config = require('./../../config/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Appointment = function (_wepy$page) {
  _inherits(Appointment, _wepy$page);

  function Appointment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Appointment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Appointment.__proto__ || Object.getPrototypeOf(Appointment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '预约试课',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044'
    }, _this.data = {
      selecteCourse: null,
      entity: {
        name: '',
        tel: '',
        courseId: '',
        schoolId: '',
        bookDate: '',
        bookTime: ''
      },
      confirmLoading: false,
      school: [],
      schoolIndex: 0
    }, _this.methods = {
      bindChange: function bindChange(e) {
        var self = this;
        var field = e.currentTarget.dataset.field;
        var value = e.detail.value;
        var _self$data = self.data,
            entity = _self$data.entity,
            school = _self$data.school;

        entity[field] = value;

        if (field == 'schoolId') {
          self.schoolIndex = value;
          console.log(value);
          entity[field] = school[self.schoolIndex].id;
          self.$apply();
        }
        self.entity = entity;
        console.log(entity);
        self.$apply();
      },
      submitForm: function submitForm() {
        var self = this;
        var _self$data2 = self.data,
            entity = _self$data2.entity,
            confirmLoading = _self$data2.confirmLoading;

        if (confirmLoading) return;

        self.confirmLoading = true;
        _wepy2.default.showLoading({
          title: '提交中'
        });
        // 获取当前用户信息
        var unionuser = _config2.default.getUnionuser();
        var studentId = unionuser.id || '';

        var data = _extends({}, entity, {
          studentId: studentId
          // services_lesson_appointment.submit({
          //   data,
          //   success: (res) => {
          //     wepy.hideLoading()
          //     wepy.showToast({
          //       title: "提交成功!"
          //     })
          //   }
          // })
        });self.$apply();
        self.checkEntity(entity, null, function (errors) {
          if (!_underscore2.default.isEmpty(errors)) {
            var errs = [];
            for (var index in errors) {
              errs.push(errors[index]);
            }
            wx.showToast({ title: errs[0], duration: 1500 });
            self.confirmLoading = false;

            self.$apply();
            wx.hideLoading();
            return;
          }
          // 获取当前用户信息
          var unionuser = _config2.default.getUnionuser();
          var studentId = unionuser.id || '';

          services_lesson_appointment.submit({
            data: data,
            success: function success(res) {
              _wepy2.default.hideLoading();
              _wepy2.default.showToast({
                title: "提交成功!"
              });
            }
          });
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Appointment, [{
    key: 'onLoad',
    value: function onLoad(params) {
      var self = this;
      var entity = self.data.entity;

      entity.courseId = params.id;
      self.selecteCourse = params.name;
      self.entity = entity;
      self.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      var courseId = self.data.entity.courseId;

      services_lesson_appointment.query({
        params: {
          id: courseId,
          _info: 'course_schools<school>'
        },
        success: function success(res) {
          var school = [];
          for (var i in res.course_schools) {
            school.push(res.course_schools[i].school);
          }
          self.school = school;
          console.log(school);
          self.$apply();
        }
      });
    }
  }, {
    key: 'checkEntity',
    value: function checkEntity(entity, field, callback) {
      var errors = {};
      if (_underscore2.default.isEmpty(entity.tel)) {
        errors.tel = '手机号不能为空';
      }
      if (_underscore2.default.isEmpty(entity.name)) {
        errors.name = '姓名不能为空';
      }
      if (_underscore2.default.isEmpty(entity.schoolId)) {
        errors.schoolId = '校区不能为空';
      }
      if (_underscore2.default.isEmpty(entity.bookDate)) {
        errors.bookDate = '预约日期不能为空';
      }
      if (_underscore2.default.isEmpty(entity.bookTime)) {
        errors.bookTime = '预约时间不能为空';
      }
      callback(errors);
    }
  }]);

  return Appointment;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Appointment , 'pages/lessonDetail/appointment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzX2xlc3Nvbl9hcHBvaW50bWVudCIsIkFwcG9pbnRtZW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNlbGVjdGVDb3Vyc2UiLCJlbnRpdHkiLCJuYW1lIiwidGVsIiwiY291cnNlSWQiLCJzY2hvb2xJZCIsImJvb2tEYXRlIiwiYm9va1RpbWUiLCJjb25maXJtTG9hZGluZyIsInNjaG9vbCIsInNjaG9vbEluZGV4IiwibWV0aG9kcyIsImJpbmRDaGFuZ2UiLCJlIiwic2VsZiIsImZpZWxkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsImRldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIiRhcHBseSIsInN1Ym1pdEZvcm0iLCJzaG93TG9hZGluZyIsInRpdGxlIiwidW5pb251c2VyIiwiZ2V0VW5pb251c2VyIiwic3R1ZGVudElkIiwiY2hlY2tFbnRpdHkiLCJlcnJvcnMiLCJpc0VtcHR5IiwiZXJycyIsImluZGV4IiwicHVzaCIsInd4Iiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJoaWRlTG9hZGluZyIsInN1Ym1pdCIsInN1Y2Nlc3MiLCJyZXMiLCJwYXJhbXMiLCJxdWVyeSIsIl9pbmZvIiwiaSIsImNvdXJzZV9zY2hvb2xzIiwiY2FsbGJhY2siLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOztJQUFZQSwyQjs7QUFDWjs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCO0FBSHZCLEssUUFNVEMsSSxHQUFPO0FBQ0xDLHFCQUFlLElBRFY7QUFFTEMsY0FBUTtB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LHFCQUFFMkIsT0FBRixDQUFVL0IsT0FBT0ssUUFBakIsQ0FBSixFQUFnQztBQUM5QnlCLGVBQU96QixRQUFQLEdBQWtCLFVBQWxCO0FBQ0Q7QUFDRCxVQUFJLHFCQUFFMEIsT0FBRixDQUFVL0IsT0FBT00sUUFBakIsQ0FBSixFQUFnQztBQUM5QndCLGVBQU94QixRQUFQLEdBQWtCLFVBQWxCO0FBQ0Q7QUFDRHlDLGVBQVNqQixNQUFUO0FBQ0Q7Ozs7RUE1SXNDLGVBQUtrQixJOztrQkFBekJ2RCxXIiwiZmlsZSI6ImFwcG9pbnRtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcbiAgaW1wb3J0ICogYXMgc2VydmljZXNfbGVzc29uX2FwcG9pbnRtZW50IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xlc3Nvbi9kZXRhaWwnXG4gIGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBvaW50bWVudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihOe6puivleivvicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHNlbGVjdGVDb3Vyc2U6IG51bGwsXG4gICAgICBlbnRpdHk6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHRlbDogJycsXG4gICAgICAgIGNvdXJzZUlkOiAnJyxcbiAgICAgICAgc2Nob29sSWQ6ICcnLFxuICAgICAgICBib29rRGF0ZTogJycsXG4gICAgICAgIGJvb2tUaW1lOiAnJyxcbiAgICAgIH0sXG4gICAgICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gICAgICBzY2hvb2w6IFtdLFxuICAgICAgc2Nob29sSW5kZXg6IDBcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRDaGFuZ2UgKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHtmaWVsZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgICBjb25zdCB7dmFsdWV9ID0gZS5kZXRhaWxcbiAgICAgICAgY29uc3Qge2VudGl0eSwgc2Nob29sfSA9IHNlbGYuZGF0YVxuICAgICAgICBlbnRpdHlbZmllbGRdID0gdmFsdWVcbiAgICAgICBcbiAgICAgICBpZihmaWVsZCA9PSAnc2Nob29sSWQnKXtcbiAgICAgICAgICBzZWxmLnNjaG9vbEluZGV4ID0gdmFsdWVcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICBlbnRpdHlbZmllbGRdID0gc2Nob29sW3NlbGYuc2Nob29sSW5kZXhdLmlkXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuZW50aXR5ID0gZW50aXR5XG4gICAgICAgIGNvbnNvbGUubG9nKGVudGl0eSlcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHN1Ym1pdEZvcm0gKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qge2VudGl0eSwgY29uZmlybUxvYWRpbmd9ID0gc2VsZi5kYXRhXG4gICAgICAgIGlmIChjb25maXJtTG9hZGluZykgcmV0dXJuXG5cbiAgICAgICAgc2VsZi5jb25maXJtTG9hZGluZyA9IHRydWVcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK0nXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOiOt+WPluW9k+WJjeeUqOaIt+S/oeaBr1xuICAgICAgICBjb25zdCB1bmlvbnVzZXIgPSBjb25maWcuZ2V0VW5pb251c2VyKClcbiAgICAgICAgbGV0IHN0dWRlbnRJZCA9IHVuaW9udXNlci5pZCB8fCAnJ1xuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgIC4uLmVudGl0eSxcbiAgICAgICAgICBzdHVkZW50SWRcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXJ2aWNlc19sZXNzb25fYXBwb2ludG1lbnQuc3VibWl0KHtcbiAgICAgICAgLy8gICBkYXRhLFxuICAgICAgICAvLyAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAvLyAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAvLyAgICAgICB0aXRsZTogXCLmj5DkuqTmiJDlip8hXCJcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIHNlbGYuY2hlY2tFbnRpdHkoZW50aXR5LCBudWxsLCAoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgaWYgKCFfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgICAgICAgbGV0IGVycnMgPSBbXVxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZXJyb3JzKSB7XG4gICAgICAgICAgICAgIGVycnMucHVzaChlcnJvcnNbaW5kZXhdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6IGVycnNbMF0sIGR1cmF0aW9uOiAxNTAwIH0pXG4gICAgICAgICAgICBzZWxmLmNvbmZpcm1Mb2FkaW5nID0gZmFsc2UgXG5cbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g6I635Y+W5b2T5YmN55So5oi35L+h5oGvXG4gICAgICAgICAgY29uc3QgdW5pb251c2VyID0gY29uZmlnLmdldFVuaW9udXNlcigpXG4gICAgICAgICAgbGV0IHN0dWRlbnRJZCA9IHVuaW9udXNlci5pZCB8fCAnJ1xuICAgICAgICAgIFxuICAgICAgICAgIHNlcnZpY2VzX2xlc3Nvbl9hcHBvaW50bWVudC5zdWJtaXQoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DkuqTmiJDlip8hXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQocGFyYW1zKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IHtlbnRpdHl9ID0gc2VsZi5kYXRhXG4gICAgICBlbnRpdHkuY291cnNlSWQgPSBwYXJhbXMuaWRcbiAgICAgIHNlbGYuc2VsZWN0ZUNvdXJzZSA9IHBhcmFtcy5uYW1lXG4gICAgICBzZWxmLmVudGl0eSA9IGVudGl0eVxuICAgICAgc2VsZi4kYXBwbHkoKVxuICAgIH1cbiAgICBvblNob3cgKCkge1xuICAgICAgbGV0IHNlbGYgPXRoaXNcbiAgICAgIGNvbnN0IHtjb3Vyc2VJZH0gPXNlbGYuZGF0YS5lbnRpdHlcbiAgICAgIHNlcnZpY2VzX2xlc3Nvbl9hcHBvaW50bWVudC5xdWVyeSh7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlkOiBjb3Vyc2VJZCxcbiAgICAgICAgICBfaW5mbzogJ2NvdXJzZV9zY2hvb2xzPHNjaG9vbD4nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBsZXQgc2Nob29sID0gW11cbiAgICAgICAgICBmb3IgKGxldCBpIGluIHJlcy5jb3Vyc2Vfc2Nob29scykge1xuICAgICAgICAgICBzY2hvb2wucHVzaChyZXMuY291cnNlX3NjaG9vbHNbaV0uc2Nob29sKSBcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zY2hvb2wgPSBzY2hvb2xcbiAgICAgICAgICBjb25zb2xlLmxvZyhzY2hvb2wpXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBjaGVja0VudGl0eSAoZW50aXR5LCBmaWVsZCwgY2FsbGJhY2spIHtcbiAgICAgIGxldCBlcnJvcnMgPSB7fVxuICAgICAgaWYgKF8uaXNFbXB0eShlbnRpdHkudGVsKSkge1xuICAgICAgICBlcnJvcnMudGVsID0gJ+aJi+acuuWPt+S4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICAgIGlmIChfLmlzRW1wdHkoZW50aXR5Lm5hbWUpKSB7XG4gICAgICAgIGVycm9ycy5uYW1lID0gJ+Wnk+WQjeS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICAgIGlmIChfLmlzRW1wdHkoZW50aXR5LnNjaG9vbElkKSkge1xuICAgICAgICBlcnJvcnMuc2Nob29sSWQgPSAn5qCh5Yy65LiN6IO95Li656m6J1xuICAgICAgfVxuICAgICAgaWYgKF8uaXNFbXB0eShlbnRpdHkuYm9va0RhdGUpKSB7XG4gICAgICAgIGVycm9ycy5ib29rRGF0ZSA9ICfpooTnuqbml6XmnJ/kuI3og73kuLrnqbonXG4gICAgICB9XG4gICAgICBpZiAoXy5pc0VtcHR5KGVudGl0eS5ib29rVGltZSkpIHtcbiAgICAgICAgZXJyb3JzLmJvb2tUaW1lID0gJ+mihOe6puaXtumXtOS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKGVycm9ycylcbiAgICB9XG4gIH1cblxuIl19