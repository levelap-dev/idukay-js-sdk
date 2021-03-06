let popUp;
let email;
let password;
let user_promise;

const createPost =  (data, callback) => {
  return async () => {
    email = popUp.document.getElementById("email").value;
    password = popUp.document.getElementById("password").value;

    let response = await fetch('https://www.idukay.net/login', {
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

const popupTopLeftPosition = (popupWidth, popupHeigth) => {
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  const screenWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const screenHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  
  const left = ((screenWidth/2) - (popupWidth/2)) + dualScreenLeft;
  const top = ((screenHeight/2) - (popupHeigth/2)) + dualScreenTop;

  return {top, left}
}

const login = (data, callback) => {
  localStorage.removeItem('idukaysdk/token');

  let html = `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bienvenido a Idukay</title>
    <style>
      html {
        font-family: sans-serif;
        -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
      }

      body {
        margin: 0;
      }
      
      h2   {
        color: #478fca;
        text-align: center;
      }

      .well {
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
        background-color: #f5f5f5;
        border-radius: 4px;
        border: 1px solid #e3e3e3;
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
        margin-bottom: 20px;
        margin: 5px;
        min-height: 20px;
        padding: 19px;
      }
      
      .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
            touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
      }
      
      .btn-primary {
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
      }
      .btn-primary:focus,
      .btn-primary.focus {
        color: #fff;
        background-color: #286090;
        border-color: #122b40;
      }
      .btn-primary:hover {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
      }
      .btn-lg {
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
      }

      .form-control {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
             -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
                transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      }
      .form-control:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
      }

      .form-group {
        margin-bottom: 15px;
      }

      .center-image {
        display: block;
        margin-bottom: -15px;
        margin-left: auto;
        margin-right: auto;
      }

      .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .idukay-bar {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin: 5px 0 -20px -20px;
        width: 510px;
      }
    </style>
  </head>
  <body>
      <div class="well">
        <img class="center-image" src="data:image/png;base64,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"></img>
        <h2>Ingresa con tu usuario</h2>
        <form>
          <div class="form-group">
            <input id="email" class="form-control" name="email" required type="email" placeholder="Correo  electr&oacute;nico" />
          </div>
          <div class="form-group">
            <input id="password" class="form-control" name="password" required type="password" placeholder="Contrase&ntilde;a" />
          </div>
          <div class="form-group">
            <button id="iduButton" type="button" class="btn btn-primary btn-lg center">
              <span>Ingresar</span>
            </button>
          </div>
        </form>
        <img class="idukay-bar" src="data:image/png;base64,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">
        </img>
      </div>
  </body>
  </html>`;

  const popupWidth = 520;
  const popupHeigth = 360;
  const {top, left} = popupTopLeftPosition(popupWidth, popupHeigth);

  popUp = window.open('','Login', 'toolbar=no, menubar=no, scrollbars=no, resizable=0, width=' + popupWidth +', height=' + popupHeigth +', top=' + top +', left=' + left);
  popUp.document.write('');
  popUp.document.write(html);
  popUp.document.getElementById("iduButton").addEventListener("click", createPost(data, callback));

  return user_promise;
};

export {createPost, popupTopLeftPosition};

const idukay = {login, isUserLogged};

export default idukay;