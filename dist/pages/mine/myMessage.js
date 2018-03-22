'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _notice = require('./../../services/mine/notice.js');

var services_mine_notice = _interopRequireWildcard(_notice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyMessage = function (_wepy$page) {
  _inherits(MyMessage, _wepy$page);

  function MyMessage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyMessage.__proto__ || Object.getPrototypeOf(MyMessage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的消息',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#dd5044'
    }, _this.data = {
      noticeList: [],
      avatar: '../../assets/icon/notice.png'
    }, _this.methods = {
      toDetail: function toDetail(item) {
        this.$navigate('./myMessageDetail', item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyMessage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return services_mine_notice.query({
                  parmas: {
                    current: 1,
                    pageSize: 6,
                    status: 1
                  },
                  success: function success(res) {
                    self.noticeList = res.list;
                    self.$apply();
                  }
                });

              case 3:
                console.log('myMessage');

              case 4:
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
  }]);

  return MyMessage;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyMessage , 'pages/mine/myMessage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15TWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJzZXJ2aWNlc19taW5lX25vdGljZSIsIk15TWVzc2FnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJub3RpY2VMaXN0IiwiYXZhdGFyIiwibWV0aG9kcyIsInRvRGV0YWlsIiwiaXRlbSIsIiRuYXZpZ2F0ZSIsInNlbGYiLCJxdWVyeSIsInBhcm1hcyIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInN0YXR1cyIsInN1Y2Nlc3MiLCJyZXMiLCJsaXN0IiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7SUFBWUEsb0I7Ozs7Ozs7Ozs7Ozs7O0lBRVNDLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsb0NBQThCO0FBSHZCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLEVBRFA7QUFFTEMsY0FBUTtBQUZILEssUUFJUEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0VDLElBREYsRUFDUTtBQUNkLGFBQUtDLFNBQUwsQ0FBZSxtQkFBZixFQUFvQ0QsSUFBcEM7QUFDRDtBQUhPLEs7Ozs7Ozs7Ozs7OztBQU1KRSxvQixHQUFPLEk7O3VCQUNMYixxQkFBcUJjLEtBQXJCLENBQTJCO0FBQy9CQywwQkFBUTtBQUNOQyw2QkFBUyxDQURIO0FBRU5DLDhCQUFVLENBRko7QUFHTkMsNEJBQVE7QUFIRixtQkFEdUI7QUFNL0JDLDJCQUFTLGlCQUFDQyxHQUFELEVBQVE7QUFDZlAseUJBQUtOLFVBQUwsR0FBa0JhLElBQUlDLElBQXRCO0FBQ0FSLHlCQUFLUyxNQUFMO0FBQ0Q7QUFUOEIsaUJBQTNCLEM7OztBQVdOQyx3QkFBUUMsR0FBUixDQUFZLFdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1Qm1DLGVBQUtDLEk7O2tCQUF2QnhCLFMiLCJmaWxlIjoibXlNZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAqIGFzIHNlcnZpY2VzX21pbmVfbm90aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL21pbmUvbm90aWNlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15TWVzc2FnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOa2iOaBrycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNkZDUwNDQnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBub3RpY2VMaXN0OiBbXSxcbiAgICAgIGF2YXRhcjogJy4uLy4uL2Fzc2V0cy9pY29uL25vdGljZS5wbmcnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0RldGFpbCAoaXRlbSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9teU1lc3NhZ2VEZXRhaWwnLCBpdGVtKVxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGF3YWl0IHNlcnZpY2VzX21pbmVfbm90aWNlLnF1ZXJ5KHtcbiAgICAgICAgcGFybWFzOiB7XG4gICAgICAgICAgY3VycmVudDogMSxcbiAgICAgICAgICBwYWdlU2l6ZTogNixcbiAgICAgICAgICBzdGF0dXM6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKHJlcyk9PiB7XG4gICAgICAgICAgc2VsZi5ub3RpY2VMaXN0ID0gcmVzLmxpc3QgXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ215TWVzc2FnZScpXG4gICAgfVxuICB9XG5cbiJdfQ==