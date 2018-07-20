let popUp;

const openPopUp = () => {
  const html = '<div>'+
  '<form>'+
  '<div>'+
  '<div>'+
  '<h2 style="color:green;">Login con Idukay</h2>'+
  '<div>&nbsp;</div>'+
  '<span> <em>&nbsp;</em> <input name="email" required="" type="email" placeholder="Correo '+ 'electr&oacute;nico" /> </span></div>'+
  '</div>'+
  '<div>'+
  '<div><span> <em>&nbsp;</em> <input name="password" required="" type="password"'+ 'placeholder="Contrase&ntilde;a" /> </span></div>'+
  '</div>'+
  '<div>&nbsp;</div>'+
  '<div><button type="button" onclick={this.create_post()}>Ingresar</button></div>'+
  '</form></div>';

  popUp = window.open('','Login', 'width=400, height=400');
  popUp.document.write(html);
  
};

const create_post = () => {
  //console.log('>>>> post here!!!');
  //popUp.close();
  alert('ddddddd');
};

const test = () => {
  const html = '<div>Test</div>';
  const popUp = window.open('','Login', 'width=200, height=100');
  popUp.document.write(html);
  
};

export {openPopUp, test};