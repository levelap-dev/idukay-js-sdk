import {readFileSync} from 'fs';

const openPopUp = () => {
  const html = readFileSync(`${__dirname}/views/login.html`);
  const popUp = window.open('','Login', 'width=200, height=100');
  popUp.document.write(html.toString());
  
};

export {openPopUp};