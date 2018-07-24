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
  //describe('When create post', () => {
  //  fit('should post', async () => {
  //    login();
  //    const user =  await createPost();
  //    console.log('expect:::', user);
  //    //expect(user.body).toEqual({user:'user'});
  //  });
  //
  //  //fit('should post', () => {
  //  //  login();
  //  //  createPost().then((resss) => {
  //  //
  //  //    console.log('expect:::', resss);
  //  //  });
  //  //
  //  //  //expect(user.body).toEqual({user:'user'});
  //  //});
  //});
  //describe('When getting logged user', () => {
  //  it('should return logged user if exists', () => {
  //    const logged_user = await getLoggedUser();
  //    expect(logged_user._id).toBe('12345');
  //  });
  //});
});