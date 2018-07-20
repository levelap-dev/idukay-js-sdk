'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var popUp = void 0;

var openPopUp = function openPopUp() {
  var html = '<div>' + '<form>' + '<div>' + '<div>' + '<h2 style="color:green;">Login con Idukay</h2>' + '<div>&nbsp;</div>' + '<span> <em>&nbsp;</em> <input name="email" required="" type="email" placeholder="Correo ' + 'electr&oacute;nico" /> </span></div>' + '</div>' + '<div>' + '<div><span> <em>&nbsp;</em> <input name="password" required="" type="password"' + 'placeholder="Contrase&ntilde;a" /> </span></div>' + '</div>' + '<div>&nbsp;</div>' + '<div><button type="button" onclick={this.create_post()}>Ingresar</button></div>' + '</form></div>';

  popUp = window.open('', 'Login', 'width=400, height=400');
  popUp.document.write(html);
};

var create_post = function create_post() {
  //console.log('>>>> post here!!!');
  //popUp.close();
  alert('ddddddd');
};

var test = function test() {
  var html = '<div>Test</div>';
  var popUp = window.open('', 'Login', 'width=200, height=100');
  popUp.document.write(html);
};

exports.openPopUp = openPopUp;
exports.test = test;