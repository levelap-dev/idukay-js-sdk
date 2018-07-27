import idukay from 'idukay/login';
import {createPost} from 'idukay/login';
import 'jest-localstorage-mock';

let write, close, getElementById, addEventListener, removeItem;

const mockEventListener = {
  addEventListener: jest.fn()
};

describe('When login', () => {
  beforeEach(() => {
    write = jest.fn();
    close = jest.fn();
    addEventListener = mockEventListener;

    removeItem = jest.fn();

    getElementById = jest.fn(() => {
      return addEventListener
    });

    spyOn(window, 'open').and.returnValue({document: {write, getElementById}, close});

    fetch.resetMocks();
  });

  describe('when calling login fn', () => {
    it('should return a promise', (done) => {
      let expected_promise = Promise.resolve({user: 'user'});
      let callback = jest.fn();

      spyOn(idukay, 'login').and.returnValue(expected_promise);

      idukay.login({}, callback).then((user) => {
        expect(user).toEqual({user: 'user'});
        done();
      });
    });

    it('should call localStorage.removeItem', () => {
      idukay.login({}, jest.fn);
      expect(localStorage.removeItem).toHaveBeenLastCalledWith('idukaysdk/token');
    });
  });

  describe('when calling create post fn', () => {
    it('should get correct response on callback and call localStorage.setItem if not exists errors', async (done) => {
      fetch.mockResponseOnce(JSON.stringify({errors: [], response: {token:'123', user: {_id: 'id_user', name: 'name', email: 'email', school: 'school'}}}));

      let callback = function (error, resp) {
        if (error) {
          done.fail('should not fail');
        }

        if(resp) {
          expect(localStorage.setItem).toHaveBeenLastCalledWith('idukaysdk/token', '123');
          expect(resp).toEqual({user: {email: 'email', school: 'school', id: 'id_user'}});
          done();
        }
      };

      idukay.login({}, callback);
      await createPost({}, callback)();
    });

    it('should get correct response on callback if not exists errors', async (done) => {
      fetch.mockResponseOnce(JSON.stringify({errors: ['some_errors'], response: {}}));

      let callback = function (errors, resp) {
        if (errors) {
          expect(errors[0]).toBe('some_errors');
          done();
        }

        if(resp) {
          done.fail('should not fail');
        }
      };

      idukay.login({}, callback);
      await createPost({}, callback)();
    });

    it('should catch other type of error and throw them', async (done) => {
      fetch.mockRejectOnce('catch_errors');

      let callback = function (errors, resp) {
        if (errors) {
          done.fail('should not fail');
        }

        if(resp) {
          done.fail('should not fail');
        }
      };

      idukay.login({}, callback);
      await createPost({}, callback)()
      .catch((errors) => {
        expect(errors).toBe('catch_errors');
        done();
      });
    });
  });

  describe('when calling is user logged fn', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should return true if idukaysdk/token exists ', () => {
      localStorage.setItem('idukaysdk/token', 'my_token');
      expect(idukay.isUserLogged()).toBe(true);
    });

    it('should return false if idukaysdk/token not exists', () => {
      expect(idukay.isUserLogged()).toBe(false);
    });
  });
});
