'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  },
  user: function user(state) {
    return state.counter.user;
  }
}, {
  addNum: 'ASYNC_INCREMENT'
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        console.log(userInfo);
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test',
    usingComponents: {
      'wxc-loading': '../../packages/@minui/wxc-loading/dist/index',
      'wxc-toast': '../../packages/@minui/wxc-toast/dist/index'
    }
  };
  this.$repeat = {};
  this.$props = { "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" }, "group": { "v-bind:grouplist.once": "item", "v-bind:indexa.once": "index" } };
  this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    $loading: {
      isShow: true
    },
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },

    onGotUserInfo: function onGotUserInfo(e) {},
    showToast: function showToast() {
      var $toast = this.$wxpage.selectComponent('.J_toast');
      $toast && $toast.show();
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsInVzZXIiLCJhZGROdW0iLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsIlBhbmVsIiwiY291bnRlcjEiLCJDb3VudGVyIiwiY291bnRlcjIiLCJsaXN0IiwiTGlzdCIsImdyb3VwIiwiR3JvdXAiLCJ0b2FzdCIsIlRvYXN0IiwibWl4aW5zIiwidGVzdE1peGluIiwiZGF0YSIsIm15bnVtIiwiJGxvYWRpbmciLCJpc1Nob3ciLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwib25Hb3RVc2VySW5mbyIsImUiLCJzaG93VG9hc3QiLCIkdG9hc3QiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJkIiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFHdUM7QUFDVDtBQUNRO0FBQ1A7OztBQUwvQjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQUEsUUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDQyxpQkFBakMsRSxDQUEwQzs7SUFtQnJCQyxLLFdBakJwQix3QkFBUTtBQUNQQyxLQURPLGVBQ0hDLEtBREcsRUFDSTtBQUNULFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0YsR0FBckI7QUFDRCxHQUhNO0FBSVBHLFVBSk8sb0JBSUVGLEtBSkYsRUFJUztBQUNkLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0MsUUFBckI7QUFDRCxHQU5NO0FBT1BDLFFBUE8sa0JBT0FILEtBUEEsRUFPTztBQUNaLFdBQU9BLE1BQU1DLE9BQU4sQ0FBY0YsR0FBZCxHQUFvQkMsTUFBTUMsT0FBTixDQUFjQyxRQUF6QztBQUNELEdBVE07QUFVUEUsTUFWTyxnQkFVRkosS0FWRSxFQVVLO0FBQ1YsV0FBT0EsTUFBTUMsT0FBTixDQUFjRyxJQUFyQjtBQUNEO0FBWk0sQ0FBUixFQWNDO0FBQ0VDLFVBQVE7QUFEVixDQWRELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBeUxVO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVNDLFFBQVQsRUFBbUI7QUFDMUNkLGdCQUFRQyxHQUFSLENBQVlhLFFBQVo7QUFDQSxZQUFJQSxRQUFKLEVBQWM7QUFDWkgsZUFBS0csUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNESCxhQUFLSSxXQUFMLEdBQW1CLFFBQW5COztBQUVBSixhQUFLSyxlQUFMLEdBQXVCLFdBQXZCO0FBQ0FDLG1CQUFXLFlBQU07QUFDZk4sZUFBS0ssZUFBTCxHQUF1QixNQUF2QjtBQUNBTCxlQUFLTyxNQUFMO0FBQ0QsU0FIRCxFQUdHLElBSEg7O0FBS0FQLGFBQUtPLE1BQUw7QUFDRCxPQWREO0FBZUQ7Ozs7RUF6TGdDQyxlQUFLQyxJOzs7OztPQUN0Q0MsTSxHQUFTO0FBQ1BDLDRCQUF3QixNQURqQjtBQUVQQyxxQkFBaUI7QUFDZixxQkFBZSw4Q0FEQTtBQUVmLG1CQUFhO0FBRkU7QUFGVixHO09BT1ZDLE8sR0FBVSxFO09BQ1hDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxjQUFhLEVBQWQsRUFBWixFQUE4QixZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLE9BQXJDLEVBQXpDLEVBQXVGLFNBQVEsRUFBQyx5QkFBd0IsTUFBekIsRUFBZ0Msc0JBQXFCLE9BQXJELEVBQS9GLEU7T0FDVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLG1CQUFrQixhQUFuQixFQUFaLEU7T0FDVEMsVSxHQUFhO0FBQ1ZDLFdBQU9DLGVBREc7QUFFVkMsY0FBVUMsaUJBRkE7QUFHVkMsY0FBVUQsaUJBSEE7QUFJVkUsVUFBTUMsY0FKSTtBQUtWQyxXQUFPQyxlQUxHO0FBTVZDLFdBQU9DO0FBTkcsRztPQVNaQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDO09BRVRDLEksR0FBTztBQUNMQyxXQUFPLEVBREY7QUFFTEMsY0FBVTtBQUNSQyxjQUFRO0FBREEsS0FGTDtBQUtMOUIsY0FBVTtBQUNSK0IsZ0JBQVU7QUFERixLQUxMO0FBUUw5QixpQkFBYSxNQVJSO0FBU0xDLHFCQUFpQixXQVRaO0FBVUw4QixXQUFPLENBVkY7QUFXTEMsWUFBUSxFQVhIO0FBWUxDLGVBQVcsQ0FDVDtBQUNFQyxVQUFJLENBRE47QUFFRUMsWUFBTSxNQUZSO0FBR0VqQixZQUFNLENBQ0o7QUFDRWtCLGlCQUFTLEtBRFg7QUFFRUMsbUJBQVc7QUFGYixPQURJLEVBS0o7QUFDRUQsaUJBQVMsS0FEWDtBQUVFQyxtQkFBVztBQUZiLE9BTEksRUFTSjtBQUNFRCxpQkFBUyxLQURYO0FBRUVDLG1CQUFXO0FBRmIsT0FUSTtBQUhSLEtBRFMsRUFtQlQ7QUFDRUgsVUFBSSxDQUROO0FBRUVDLFlBQU0sTUFGUjtBQUdFakIsWUFBTSxDQUNKO0FBQ0VrQixpQkFBUyxLQURYO0FBRUVDLG1CQUFXO0FBRmIsT0FESSxFQUtKO0FBQ0VELGlCQUFTLEtBRFg7QUFFRUMsbUJBQVc7QUFGYixPQUxJLEVBU0o7QUFDRUQsaUJBQVMsS0FEWDtBQUVFQyxtQkFBVztBQUZiLE9BVEk7QUFIUixLQW5CUyxFQXFDVDtBQUNFSCxVQUFJLENBRE47QUFFRUMsWUFBTSxNQUZSO0FBR0VqQixZQUFNLENBQ0o7QUFDRWtCLGlCQUFTLEtBRFg7QUFFRUMsbUJBQVc7QUFGYixPQURJO0FBSFIsS0FyQ1M7QUFaTixHO09BOERQQyxRLEdBQVc7QUFDVEMsT0FEUyxpQkFDSDtBQUNKLGFBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEc7T0FNWEMsTyxHQUFVO0FBQ1JDLFFBRFEsa0JBQ0Q7QUFDTCxXQUFLZixLQUFMO0FBQ0QsS0FITzs7QUFJUmdCLG1CQUFlLHVCQUFTQyxDQUFULEVBQVksQ0FDMUIsQ0FMTztBQU1SQyxhQU5RLHVCQU1JO0FBQ1YsVUFBSUMsU0FBUyxLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsVUFBN0IsQ0FBYjtBQUNBRixnQkFBVUEsT0FBT0csSUFBUCxFQUFWO0FBQ0QsS0FUTztBQVVSM0IsU0FWUSxtQkFVQTtBQUNOLFVBQUk0QixVQUFVLEtBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQzFDQyxlQUFPLE9BRG1DO0FBRTFDQyxhQUNFO0FBSHdDLE9BQTlCLENBQWQ7O0FBTUFILGNBQVFJLElBQVIsQ0FBYSxhQUFLO0FBQ2hCckUsZ0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsT0FGRDtBQUdELEtBcEJPO0FBcUJScUUsT0FyQlEsaUJBcUJGO0FBQ0p0RSxjQUFRQyxHQUFSLENBQVksb0JBQW9CLEtBQUtzRSxLQUFyQztBQUNELEtBdkJPO0FBd0JSQyxlQXhCUSx5QkF3Qk07QUFDWnhFLGNBQVFDLEdBQVIsQ0FBWSxLQUFLc0UsS0FBTCxHQUFhLE1BQXpCOztBQUVBLFdBQUtMLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE9BQXpCLEVBQWtDLEVBQWxDLEVBQXNDLENBQXRDO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLFVBQWIsRUFBeUIsTUFBekIsRUFBaUMsRUFBakMsRUFBcUMsQ0FBckM7O0FBRUEsV0FBS08sVUFBTCxDQUFnQixpQkFBaEIsRUFBbUMsQ0FBbkMsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDRCxLQS9CTztBQWdDUkMsV0FoQ1EscUJBZ0NFO0FBQ1IsVUFBSS9ELE9BQU8sSUFBWDtBQUNBLFVBQUlnRSxJQUFJLEVBQVI7QUFDQSxVQUFJQyxNQUFNLENBQ1IsTUFEUSxFQUVSLE1BRlEsRUFHUixNQUhRLEVBSVIsTUFKUSxFQUtSLE1BTFEsRUFNUixNQU5RLEVBT1IsTUFQUSxFQVFSLE1BUlEsRUFTUixNQVRRLEVBVVIsTUFWUSxDQUFWO0FBWUEsYUFBT0QsR0FBUCxFQUFZO0FBQ1Z4RCx1QkFBS3VELE9BQUwsQ0FBYTtBQUNYRyxlQUNFLDREQUNBRCxJQUFJRCxDQUFKLENBREEsR0FFQSxLQUZBLEdBR0FBLENBTFM7QUFNWEcsbUJBQVMsaUJBQVNDLENBQVQsRUFBWTtBQUNuQnBFLGlCQUFLb0MsTUFBTCxJQUFlZ0MsRUFBRXRDLElBQUYsR0FBUyxHQUF4QjtBQUNBOUIsaUJBQUtPLE1BQUw7QUFDRDtBQVRVLFNBQWI7QUFXRDtBQUNGLEtBNURPO0FBNkRSOEQsZUE3RFEseUJBNkRhO0FBQUE7O0FBQ25CLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBbEYsY0FBUUMsR0FBUixDQUNLLEtBQUtzRSxLQURWLGlCQUMyQlUsT0FBTy9CLElBRGxDLGNBQytDK0IsT0FBT0UsTUFBUCxDQUFjWixLQUQ3RDtBQUdEO0FBbEVPLEc7T0FxRVZhLE0sR0FBUztBQUNQLGtCQUFjLHFCQUFhO0FBQUE7O0FBQ3pCLFVBQUlILGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBbEYsY0FBUUMsR0FBUixDQUNLLE9BQUtzRSxLQURWLGlCQUMyQlUsT0FBTy9CLElBRGxDLGNBQytDK0IsT0FBT0UsTUFBUCxDQUFjWixLQUQ3RDtBQUdEO0FBTk0sRzs7O2tCQS9KVXBFLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcbmltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInIC8vIGFsaWFzIGV4YW1wbGVcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCcgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxuaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnIC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxuaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG5jb25zb2xlLmxvZygnbW9kdWxlQSBpZ25vcmVkOiAnLCBtb2R1bGVBKSAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XG5cbkBjb25uZWN0KHtcbiAgbnVtKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtXG4gIH0sXG4gIGFzeW5jTnVtKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW1cbiAgfSxcbiAgc3VtTnVtKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtICsgc3RhdGUuY291bnRlci5hc3luY051bVxuICB9LFxuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIudXNlclxuICB9XG59LFxuICB7XG4gICAgYWRkTnVtOiAnQVNZTkNfSU5DUkVNRU5UJ1xuICB9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3d4Yy1sb2FkaW5nJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZGluZy9kaXN0L2luZGV4JyxcbiAgICAgICd3eGMtdG9hc3QnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10b2FzdC9kaXN0L2luZGV4J1xuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY291bnRlcjFcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJjb3VudGVyMlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIm15bnVtXCJ9LFwiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjpcIml0ZW1cIixcInYtYmluZDppbmRleGEub25jZVwiOlwiaW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge1wiY291bnRlcjFcIjp7XCJ2LW9uOmluZGV4LWVtaXRcIjpcImNvdW50ZXJFbWl0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgcGFuZWw6IFBhbmVsLFxuICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgIGNvdW50ZXIyOiBDb3VudGVyLFxuICAgIGxpc3Q6IExpc3QsXG4gICAgZ3JvdXA6IEdyb3VwLFxuICAgIHRvYXN0OiBUb2FzdFxuICB9XG5cbiAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICBkYXRhID0ge1xuICAgIG15bnVtOiAyMCxcbiAgICAkbG9hZGluZzoge1xuICAgICAgaXNTaG93OiB0cnVlXG4gICAgfSxcbiAgICB1c2VySW5mbzoge1xuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcbiAgICBjb3VudDogMCxcbiAgICBuZXRyc3Q6ICcnLFxuICAgIGdyb3VwTGlzdDogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICBjb21wdXRlZCA9IHtcbiAgICBub3coKSB7XG4gICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHBsdXMoKSB7XG4gICAgICB0aGlzLm15bnVtKytcbiAgICB9LFxuICAgIG9uR290VXNlckluZm86IGZ1bmN0aW9uKGUpIHtcbiAgICB9LFxuICAgIHNob3dUb2FzdCgpIHtcbiAgICAgIGxldCAkdG9hc3QgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcuSl90b2FzdCcpXG4gICAgICAkdG9hc3QgJiYgJHRvYXN0LnNob3coKVxuICAgIH0sXG4gICAgdG9hc3QoKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgICBpbWc6XG4gICAgICAgICAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgIH0pXG5cbiAgICAgIHByb21pc2UudGhlbihkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRhcCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSlcbiAgICB9LFxuICAgIGNvbW11bmljYXRlKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcblxuICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMicsICdtaW51cycsIDQ1LCA2KVxuICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG5cbiAgICAgIHRoaXMuJGJyb2FkY2FzdCgnaW5kZXgtYnJvYWRjYXN0JywgMSwgMywgNClcbiAgICB9LFxuICAgIHJlcXVlc3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpID0gMTBcbiAgICAgIGxldCBtYXAgPSBbXG4gICAgICAgICdNQT09JyxcbiAgICAgICAgJ01Rbz0nLFxuICAgICAgICAnTWc9PScsXG4gICAgICAgICdNdz09JyxcbiAgICAgICAgJ05BPT0nLFxuICAgICAgICAnTlE9PScsXG4gICAgICAgICdOZz09JyxcbiAgICAgICAgJ053PT0nLFxuICAgICAgICAnT0E9PScsXG4gICAgICAgICdPUT09J1xuICAgICAgXVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArXG4gICAgICAgICAgICBtYXBbaV0gK1xuICAgICAgICAgICAgJyZpPScgK1xuICAgICAgICAgICAgaSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBzZWxmLm5ldHJzdCArPSBkLmRhdGEgKyAnLidcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjb3VudGVyRW1pdCguLi5hcmdzKSB7XG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge1xuICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcbiAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgIH1cbiAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9LCAzMDAwKVxuXG4gICAgICBzZWxmLiRhcHBseSgpXG4gICAgfSlcbiAgfVxufVxuIl19