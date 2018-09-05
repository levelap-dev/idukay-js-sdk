'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _login = require('../login');

var _login2 = _interopRequireDefault(_login);

require('jest-localstorage-mock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var write = void 0,
    close = void 0,
    getElementById = void 0,
    addEventListener = void 0,
    removeItem = void 0;

var mockEventListener = {
  addEventListener: jest.fn()
};

describe('When login', function () {
  beforeEach(function () {
    write = jest.fn();
    close = jest.fn();
    addEventListener = mockEventListener;

    removeItem = jest.fn();

    getElementById = jest.fn(function () {
      return addEventListener;
    });

    spyOn(window, 'open').and.returnValue({ document: { write: write, getElementById: getElementById }, close: close });

    fetch.resetMocks();
  });

  describe('when calling login fn', function () {
    it('should return a promise', function (done) {
      var expected_promise = _promise2.default.resolve({ user: 'user' });
      var callback = jest.fn();

      spyOn(_login2.default, 'login').and.returnValue(expected_promise);

      _login2.default.login({}, callback).then(function (user) {
        expect(user).toEqual({ user: 'user' });
        done();
      });
    });

    it('should call localStorage.removeItem', function () {
      _login2.default.login({}, jest.fn);
      expect(localStorage.removeItem).toHaveBeenLastCalledWith('idukaysdk/token');
    });

    it('should calculate the popup position by calling popupTopLeftPosition (single screen)', function () {
      window.innerWidth = 150;
      window.innerHeight = 100;
      var response = (0, _login.popupTopLeftPosition)(100, 50);
      expect(response).toEqual({ top: 25, left: 25 });
    });

    it('should calculate the popup position by calling popupTopLeftPosition (dual screen)', function () {
      window.screenLeft = 150;
      window.innerWidth = 150;
      window.innerHeight = 100;
      var response = (0, _login.popupTopLeftPosition)(100, 50);
      var totalScreenPosition = 25 + 150;
      expect(response).toEqual({ top: 25, left: totalScreenPosition });
    });
  });

  describe('when calling create post fn', function () {
    it('should get correct response on callback and call localStorage.setItem if not exists errors', function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(done) {
        var callback;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetch.mockResponseOnce((0, _stringify2.default)({ errors: [], response: { token: '123', user: { _id: 'id_user', name: 'name', email: 'email', school: 'school' } } }));

                callback = function callback(error, resp) {
                  if (error) {
                    done.fail('should not fail');
                  }

                  if (resp) {
                    expect(localStorage.setItem).toHaveBeenLastCalledWith('idukaysdk/token', '123');
                    expect(resp).toEqual({ user: { email: 'email', school: 'school', id: 'id_user' } });
                    done();
                  }
                };

                _login2.default.login({}, callback);
                _context.next = 5;
                return (0, _login.createPost)({}, callback)();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    it('should get correct response on callback if not exists errors', function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(done) {
        var callback;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetch.mockResponseOnce((0, _stringify2.default)({ errors: ['some_errors'], response: {} }));

                callback = function callback(errors, resp) {
                  if (errors) {
                    expect(errors[0]).toBe('some_errors');
                    done();
                  }

                  if (resp) {
                    done.fail('should not fail');
                  }
                };

                _login2.default.login({}, callback);
                _context2.next = 5;
                return (0, _login.createPost)({}, callback)();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    it('should catch other type of error and throw them', function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(done) {
        var callback;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fetch.mockRejectOnce('catch_errors');

                callback = function callback(errors, resp) {
                  if (errors) {
                    done.fail('should not fail');
                  }

                  if (resp) {
                    done.fail('should not fail');
                  }
                };

                _login2.default.login({}, callback);
                _context3.next = 5;
                return (0, _login.createPost)({}, callback)().catch(function (errors) {
                  expect(errors).toBe('catch_errors');
                  done();
                });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  });

  describe('when calling is user logged fn', function () {
    beforeEach(function () {
      localStorage.clear();
    });

    it('should return true if idukaysdk/token exists ', function () {
      localStorage.setItem('idukaysdk/token', 'my_token');
      expect(_login2.default.isUserLogged()).toBe(true);
    });

    it('should return false if idukaysdk/token not exists', function () {
      expect(_login2.default.isUserLogged()).toBe(false);
    });
  });
});