import idukay from 'idukay/login';

const isBrowser = typeof window !== 'undefined'

if (isBrowser) {
  window.idukay = idukay;
}

export default idukay;