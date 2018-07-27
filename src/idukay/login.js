let popUp;
let email;
let password;
let user_promise;

const createPost =  (data, callback) => {
  return async () => {
    email = popUp.document.getElementById("email").value;
    password = popUp.document.getElementById("password").value;

    let response = await fetch('http://dev.idukay.net/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}`
    });

    user_promise = response.json()
    .then((resp) => {
      if (resp.errors.length) {
        popUp.close();
        callback(resp.errors);
      }

      if (Object.keys(resp.response).length) {
        localStorage.setItem('idukaysdk/token', resp.response.token);
        popUp.close();
        callback(null, {user: {email: resp.response.user.email, school: resp.response.user.school, id: resp.response.user._id}});
      }
    })
    .catch((error) => {
      popUp.close();
      throw (error);
    });
  };
};


const isUserLogged = () => {
  return localStorage.getItem('idukaysdk/token') ? true : false;
};

const login = (data, callback) => {
  localStorage.removeItem('idukaysdk/token');

  let html = `<div>
  <form>
  <div>
  <div>
  <h2 style="color:green;">Login con Idukay</h2>
  <div>&nbsp;</div>
  <span> <em>&nbsp;</em> <input id="email" name="email" required="" type="email" placeholder="Correo  electr&oacute;nico" /> </span></div>
  </div>
  <div>
  <div><span> <em>&nbsp;</em> <input id="password" name="password" required="" type="password" placeholder="Contrase&ntilde;a" /> </span></div>
  </div>
  <div>&nbsp;</div>
  <div><button id="iduButton" type="button"}>Ingresar</button></div>
  </form>
  </div>`;

  popUp = window.open('','Login', 'width=400, height=400');
  popUp.document.write('');
  popUp.document.write(html);
  popUp.document.getElementById("iduButton").addEventListener("click", createPost(data, callback));

  return user_promise;
};

export {createPost};

const idukay = {login, isUserLogged};

export default idukay;