'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rating = function (_wepy$component) {
  _inherits(rating, _wepy$component);

  function rating() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, rating);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = rating.__proto__ || Object.getPrototypeOf(rating)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      star: {
        type: Number,
        default: 0,
        twoWay: true
      }
    }, _this.data = {
      starArr: [1, 2, 3, 4, 5]
      // star: 0
    }, _this.methods = {
      chooseStar: function chooseStar(e) {
        var star = parseInt(e.target.dataset.star) || 0;
        this.star = star;
        console.log('\u6700\u540E\u5F97\u5206\uFF1A' + star + '\u5206');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return rating;
}(_wepy2.default.component);

exports.default = rating;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZ1N0YXIuanMiXSwibmFtZXMiOlsicmF0aW5nIiwicHJvcHMiLCJzdGFyIiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJ0d29XYXkiLCJkYXRhIiwic3RhckFyciIsIm1ldGhvZHMiLCJjaG9vc2VTdGFyIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxDQUZMO0FBR0pDLGdCQUFRO0FBSEo7QUFEQSxLLFFBT1JDLEksR0FBTztBQUNMQyxlQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWI7QUFDVDtBQUZLLEssUUFJUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNJQyxDQURKLEVBQ087QUFDYixZQUFJVCxPQUFPVSxTQUFTRCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJaLElBQTFCLEtBQW1DLENBQTlDO0FBQ0EsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0FhLGdCQUFRQyxHQUFSLG9DQUFvQmQsSUFBcEI7QUFDRDtBQUxPLEs7Ozs7RUFad0IsZUFBS2UsUzs7a0JBQXBCakIsTSIsImZpbGUiOiJyYXRpbmdTdGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmF0aW5nIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgc3Rhcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc3RhckFycjogWzEsIDIsIDMsIDQsIDVdLFxuICAgICAgLy8gc3RhcjogMFxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hvb3NlU3RhciAoZSkge1xuICAgICAgICBsZXQgc3RhciA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuc3RhcikgfHwgMFxuICAgICAgICB0aGlzLnN0YXIgPSBzdGFyXG4gICAgICAgIGNvbnNvbGUubG9nKGDmnIDlkI7lvpfliIbvvJoke3N0YXJ95YiGYClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==