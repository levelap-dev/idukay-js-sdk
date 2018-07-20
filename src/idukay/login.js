let popUp;
let email;
let password;
const createPost = async () => {
  email = popUp.document.getElementById("email").value;
  password = popUp.document.getElementById("password").value;
  const user = await fetch('http://dev.idukay.net/login', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'ClientVersion': '0.9.19'
    },
    credentials: 'same-origin',
    body: JSON.stringify({email, password})
  });

  return user;
  
};

const login = () => {
  
  const html = '<div>'+
  '<form>'+
  '<div>'+
  '<div>'+
  '<h2 style="color:green;">Login con Idukay</h2>'+
  '<div>&nbsp;</div>'+
  '<span> <em>&nbsp;</em> <input id="email" name="email" required="" type="email" placeholder="Correo '+ 'electr&oacute;nico" /> </span></div>'+
  '</div>'+
  '<div>'+
  '<div><span> <em>&nbsp;</em> <input id="password" name="password" required="" type="password"'+ 'placeholder="Contrase&ntilde;a" /> </span></div>'+
  '</div>'+
  '<div>&nbsp;</div>'+
  '<div><button id="iduButton" type="button"}>Ingresar</button></div>'+
  '</form></div>';

  popUp = window.open('','Login', 'width=400, height=400');
  popUp.document.write('');
  popUp.document.write(html);
  popUp.document.getElementById("iduButton").addEventListener("click", createPost);

};

export {createPost};

export default login;