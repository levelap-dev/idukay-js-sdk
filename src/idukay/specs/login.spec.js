import login from 'idukay/login';
import {createPost} from 'idukay/login';


describe('When login', () => {
  beforeEach(() => {
    spyOn(window, 'open');
    spyOn(document, 'write');
    fetch.resetMocks();
    fetch.mockResponseOnce({user: 'user'});
  });
  describe('When create post', () => {
    it('should post', async () => {
      const user =  await createPost();
      expect(user.body).toEqual({user:'user'});
    });
  });
});