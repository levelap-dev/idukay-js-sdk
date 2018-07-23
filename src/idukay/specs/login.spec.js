import login from 'idukay/login';
import {createPost} from 'idukay/login';

let write, getElementById, addEventListener;
const mockEventListener = {
  addEventListener: jest.fn()
}

describe('When login', () => {
  beforeEach(() => {
    write = jest.fn();
    addEventListener = mockEventListener;
    getElementById = jest.fn(() => {
      return addEventListener
    });

    spyOn(window, 'open').and.returnValue({document: {write, getElementById}});

    fetch.resetMocks();
    fetch.mockResponseOnce({user: 'user'});
  });
  describe('When create post', () => {
    it('should post', async () => {
      login();
      const user =  await createPost();
      expect(user.body).toEqual({user:'user'});
    });
  });
});