"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPost = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popUp = void 0;
var email = void 0;
var password = void 0;
var user_promise = void 0;

var createPost = function createPost(data, callback) {
  return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = popUp.document.getElementById("email").value;
            password = popUp.document.getElementById("password").value;

            _context.next = 4;
            return fetch('https://www.idukay.net/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: "email=" + email + "&password=" + password
            });

          case 4:
            response = _context.sent;


            user_promise = response.json().then(function (resp) {
              if (resp.errors.length) {
                popUp.close();
                callback(resp.errors);
              }

              if ((0, _keys2.default)(resp.response).length) {
                localStorage.setItem('idukaysdk/token', resp.response.token);
                popUp.close();
                callback(null, { user: { email: resp.response.user.email, school: resp.response.user.school, id: resp.response.user._id } });
              }
            }).catch(function (error) {
              popUp.close();
              throw error;
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));
};

var isUserLogged = function isUserLogged() {
  return localStorage.getItem('idukaysdk/token') ? true : false;
};

var login = function login(data, callback) {
  localStorage.removeItem('idukaysdk/token');

  var html = "<div>\n  <form>\n  <div>\n  <div>\n  <h2 style=\"color:green;\">Login con Idukay</h2>\n  <div>&nbsp;</div>\n  <span> <em>&nbsp;</em> <input id=\"email\" name=\"email\" required=\"\" type=\"email\" placeholder=\"Correo  electr&oacute;nico\" /> </span></div>\n  </div>\n  <div>\n  <div><span> <em>&nbsp;</em> <input id=\"password\" name=\"password\" required=\"\" type=\"password\" placeholder=\"Contrase&ntilde;a\" /> </span></div>\n  </div>\n  <div>&nbsp;</div>\n  <div><button id=\"iduButton\" type=\"button\"}>Ingresar</button></div>\n  </form>\n  </div>";

  popUp = window.open('', 'Login', 'width=400, height=400');
  popUp.document.write('');
  popUp.document.write(html);
  popUp.document.getElementById("iduButton").addEventListener("click", createPost(data, callback));

  return user_promise;
};

exports.createPost = createPost;


var idukay = { login: login, isUserLogged: isUserLogged };

exports.default = idukay;