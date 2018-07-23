'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _login = require('../login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var write = void 0,
    getElementById = void 0,
    addEventListener = void 0;
var mockEventListener = {
  addEventListener: jest.fn()
};

describe('When login', function () {
  beforeEach(function () {
    write = jest.fn();
    addEventListener = mockEventListener;
    getElementById = jest.fn(function () {
      return addEventListener;
    });

    spyOn(window, 'open').and.returnValue({ document: { write: write, getElementById: getElementById } });

    fetch.resetMocks();
    fetch.mockResponseOnce({ user: 'user' });
  });
  describe('When create post', function () {
    it('should post', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _login2.default)();
              _context.next = 3;
              return (0, _login.createPost)();

            case 3:
              user = _context.sent;

              expect(user.body).toEqual({ user: 'user' });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });
});