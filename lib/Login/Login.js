'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var openPopUp = function openPopUp() {
  var html = '<div></div>';
  var popUp = window.open('', 'Login', 'width=200, height=100');
  popUp.document.write(html);
};

exports.openPopUp = openPopUp;