let popUp;
let email;
let password;
let promise;

const createPost = async () => {
  email = popUp.document.getElementById("email").value;
  password = popUp.document.getElementById("password").value;

  let response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `email=${email}&password=${password}`
  });

  console.log('JSON:::',response.json());
  promise = response.json();
};


const getLoggedUser = () => {
  promise.then((resp) => {
    console.log('getLogged::',resp);
  });
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

const idukay = {login, getLoggedUser};

export default login;