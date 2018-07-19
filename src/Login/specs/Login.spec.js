import * as Login from 'Login/Login';

let write;
describe('When login', () => {
  beforeEach(() => {
    write = jest.fn();
    spyOn(document, 'write');
    spyOn(window, 'open').and.returnValue({document: {write}});
  });

  it('should open popup when openPopUp', () => {
    Login.openPopUp();
    expect(window.open).toHaveBeenCalledWith('','Login', 'width=200, height=100');
    expect(write).toHaveBeenCalledWith('<div></div>');
  });
});