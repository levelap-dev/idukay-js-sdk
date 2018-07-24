"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPost = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popUp = void 0;
var email = void 0;
var password = void 0;
var promise = void 0;

var createPost = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = popUp.document.getElementById("email").value;
            password = popUp.document.getElementById("password").value;

            _context.next = 4;
            return fetch('http://localhost:3001/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: "email=" + email + "&password=" + password
            });

          case 4:
            response = _context.sent;


            console.log('JSON:::', response.json());
            promise = response.json();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function createPost() {
    return _ref.apply(this, arguments);
  };
}();

var getLoggedUser = function getLoggedUser() {
  promise.then(function (resp) {
    console.log('getLogged::', resp);
  });
};

var login = function login() {

  var html = '<div>' + '<form>' + '<div>' + '<div>' + '<h2 style="color:green;">Login con Idukay</h2>' + '<div>&nbsp;</div>' + '<span> <em>&nbsp;</em> <input id="email" name="email" required="" type="email" placeholder="Correo ' + 'electr&oacute;nico" /> </span></div>' + '</div>' + '<div>' + '<div><span> <em>&nbsp;</em> <input id="password" name="password" required="" type="password"' + 'placeholder="Contrase&ntilde;a" /> </span></div>' + '</div>' + '<div>&nbsp;</div>' + '<div><button id="iduButton" type="button"}>Ingresar</button></div>' + '</form></div>';

  popUp = window.open('', 'Login', 'width=400, height=400');
  popUp.document.write('');
  popUp.document.write(html);
  popUp.document.getElementById("iduButton").addEventListener("click", createPost);
};

exports.createPost = createPost;


var idukay = { login: login, getLoggedUser: getLoggedUser };

exports.default = login;