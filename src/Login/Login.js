const openPopUp = () => {
  const html = '<div></div>';
  const popUp = window.open('','Login', 'width=200, height=100');
  popUp.document.write(html);
  
};
const test = () => {
  const html = '<div></div>';
  const popUp = window.open('','Login', 'width=200, height=100');
  popUp.document.write(html);
  
};

export {openPopUp, test};