'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Dan\\Documents\\GitHub\\kickstart-local\\components\\RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      loading2: false
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //have to import new instance of Campaign
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loading: true });

              _context.prev = 2;
              _context.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _context.next = 12;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](2);

            case 12:

              _this.setState({ loading: false });
              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 10]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //asynchronous arrow function, NOTICE how I have to import campaign again for new function
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loading2: true });

              _context2.prev = 2;
              _context2.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _context2.next = 12;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](2);

            case 12:

              _this.setState({ loading2: false });
              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell; //sanction off the props of Table we exactly want, so we can shorthand later on

      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount; // also called destructuring, pulling off the props object from index.js you need

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', loading: this.state.loading, basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', loading: this.state.loading2, basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdFJvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwibG9hZGluZyIsImxvYWRpbmcyIiwib25BcHByb3ZlIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsImFjY291bnRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsInQwIiwicHVzaFJvdXRlIiwic3RvcCIsIm9uRmluYWxpemUiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImZpbmFsaXplUmVxdWVzdCIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiUm93IiwiQ2VsbCIsIl9wcm9wcyIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjcmVhdGVFbGVtZW50IiwiZGlzYWJsZWQiLCJjb21wbGV0ZSIsInBvc2l0aXZlIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInJlY2lwaWVudCIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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QUFGSjtBQURaLE9BRkYsRUFRRVYsUUFBUU0sUUFBUixHQUFtQixJQUFuQixHQUEwQixnQkFBTUYsYUFBTiwwQkFFeEIsRUFBRVcsT0FBTyxNQUFULEVBQWlCcEQsU0FBUyxLQUFLRCxLQUFMLENBQVdFLFFBQXJDLEVBQStDb0QsT0FBTyxJQUF0RCxFQUE0REMsU0FBUyxLQUFLNUIsVUFBMUUsRUFBc0ZtQixVQUFVO0FBQzVGQyxvQkFBVWpFLFlBRGtGO0FBRTVGa0Usc0JBQVk7QUFGZ0Y7QUFBaEcsT0FGd0IsRUFPeEIsVUFQd0IsQ0FSNUIsQ0E3RUssQ0FBUDtBQWdHRDtBQTdHdUIsR0FBRCxDQUF6Qjs7QUFnSEEsU0FBT2pFLFVBQVA7QUFDRCxDQTFOZ0Isa0JBQWpCOztrQkE0TmVBLFUiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICdDOlxcXFxVc2Vyc1xcXFxEYW5cXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxraWNrc3RhcnQtbG9jYWxcXFxcY29tcG9uZW50c1xcXFxSZXF1ZXN0Um93LmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uLCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJztcblxudmFyIFJlcXVlc3RSb3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVxdWVzdFJvdywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVxdWVzdFJvdygpIHtcbiAgICB2YXIgX3JlZixcbiAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdFJvdyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVxdWVzdFJvdy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihSZXF1ZXN0Um93KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGxvYWRpbmcyOiBmYWxzZVxuICAgIH0sIF90aGlzLm9uQXBwcm92ZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICB2YXIgY2FtcGFpZ24sIGFjY291bnRzO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgLy9oYXZlIHRvIGltcG9ydCBuZXcgaW5zdGFuY2Ugb2YgQ2FtcGFpZ25cbiAgICAgICAgICAgICAgY2FtcGFpZ24gPSBDYW1wYWlnbihfdGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuXG4gICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMjtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGFjY291bnRzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XG4gICAgICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KF90aGlzLnByb3BzLmlkKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTA7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbJ2NhdGNoJ10oMik7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG5cbiAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnL2NhbXBhaWducy8nICsgX3RoaXMucHJvcHMuYWRkcmVzcyArICcvcmVxdWVzdHMnKTtcblxuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlLCBfdGhpczIsIFtbMiwgMTBdXSk7XG4gICAgfSkpLCBfdGhpcy5vbkZpbmFsaXplID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICB2YXIgY2FtcGFpZ24sIGFjY291bnRzO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIC8vYXN5bmNocm9ub3VzIGFycm93IGZ1bmN0aW9uLCBOT1RJQ0UgaG93IEkgaGF2ZSB0byBpbXBvcnQgY2FtcGFpZ24gYWdhaW4gZm9yIG5ldyBmdW5jdGlvblxuICAgICAgICAgICAgICBjYW1wYWlnbiA9IENhbXBhaWduKF90aGlzLnByb3BzLmFkZHJlc3MpO1xuXG5cbiAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nMjogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDI7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA4O1xuICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QoX3RoaXMucHJvcHMuaWQpLnNlbmQoe1xuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDEwO1xuICAgICAgICAgICAgICBfY29udGV4dDIudDAgPSBfY29udGV4dDJbJ2NhdGNoJ10oMik7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG5cbiAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nMjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoJy9jYW1wYWlnbnMvJyArIF90aGlzLnByb3BzLmFkZHJlc3MgKyAnL3JlcXVlc3RzJyk7XG5cbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUyLCBfdGhpczIsIFtbMiwgMTBdXSk7XG4gICAgfSkpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXF1ZXN0Um93LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBSb3cgPSBUYWJsZS5Sb3csXG4gICAgICAgICAgQ2VsbCA9IFRhYmxlLkNlbGw7IC8vc2FuY3Rpb24gb2ZmIHRoZSBwcm9wcyBvZiBUYWJsZSB3ZSBleGFjdGx5IHdhbnQsIHNvIHdlIGNhbiBzaG9ydGhhbmQgbGF0ZXIgb25cblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWQgPSBfcHJvcHMuaWQsXG4gICAgICAgICAgcmVxdWVzdCA9IF9wcm9wcy5yZXF1ZXN0LFxuICAgICAgICAgIGFwcHJvdmVyc0NvdW50ID0gX3Byb3BzLmFwcHJvdmVyc0NvdW50OyAvLyBhbHNvIGNhbGxlZCBkZXN0cnVjdHVyaW5nLCBwdWxsaW5nIG9mZiB0aGUgcHJvcHMgb2JqZWN0IGZyb20gaW5kZXguanMgeW91IG5lZWRcblxuICAgICAgdmFyIHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFJvdyxcbiAgICAgICAgeyBkaXNhYmxlZDogcmVxdWVzdC5jb21wbGV0ZSwgcG9zaXRpdmU6IHJlYWR5VG9GaW5hbGl6ZSAmJiAhcmVxdWVzdC5jb21wbGV0ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA2MlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDYzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZFxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNjRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3QuZGVzY3JpcHRpb25cbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY1XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgJ2V0aGVyJylcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0LnJlY2lwaWVudFxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNjdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3QuYXBwcm92YWxDb3VudCxcbiAgICAgICAgICAnLycsXG4gICAgICAgICAgYXBwcm92ZXJzQ291bnRcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICB7IGNvbG9yOiAnZ3JlZW4nLCBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsIGJhc2ljOiB0cnVlLCBvbkNsaWNrOiB0aGlzLm9uQXBwcm92ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDcwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQXBwcm92ZSdcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ2VsbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3NVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgeyBjb2xvcjogJ3RlYWwnLCBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcyLCBiYXNpYzogdHJ1ZSwgb25DbGljazogdGhpcy5vbkZpbmFsaXplLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdGaW5hbGl6ZSdcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlcXVlc3RSb3c7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdFJvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwibG9hZGluZyIsImxvYWRpbmcyIiwib25BcHByb3ZlIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsImFjY291bnRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsInQwIiwicHVzaFJvdXRlIiwic3RvcCIsIm9uRmluYWxpemUiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImZpbmFsaXplUmVxdWVzdCIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiUm93IiwiQ2VsbCIsIl9wcm9wcyIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjcmVhdGVFbGVtZW50IiwiZGlzYWJsZWQiLCJjb21wbGV0ZSIsInBvc2l0aXZlIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInJlY2lwaWVudCIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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