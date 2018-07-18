import * as Login from '../Login';
import fs from 'fs';

let write;
describe('When login', () => {
  beforeEach(() => {
    write = jest.fn();
    spyOn(document, 'write');
    spyOn(window, 'open').and.returnValue({document: {write}});
    spyOn(fs, 'readFileSync').and.returnValue('<div></div>');
  });

  it('should call readFileSync with path ', () => {
    Login.openPopUp();
    const arg = fs.readFileSync.calls.mostRecent().args[0].split('/');
    expect(arg[arg.length-1]).toBe('login.html');
    expect(arg[arg.length-2]).toBe('views');
  });

  it('should open popup when openPopUp', () => {
    Login.openPopUp();
    expect(window.open).toHaveBeenCalledWith('','Login', 'width=200, height=100');
    expect(write).toHaveBeenCalledWith('<div></div>');
  });
});