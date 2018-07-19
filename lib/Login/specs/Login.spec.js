'use strict';

var _Login = require('../Login');

var Login = _interopRequireWildcard(_Login);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var write = void 0;
describe('When login', function () {
  beforeEach(function () {
    write = jest.fn();
    spyOn(document, 'write');
    spyOn(window, 'open').and.returnValue({ document: { write: write } });
  });

  it('should open popup when openPopUp', function () {
    Login.openPopUp();
    expect(window.open).toHaveBeenCalledWith('', 'Login', 'width=200, height=100');
    expect(write).toHaveBeenCalledWith('<div></div>');
  });
});