# idukay-js-sdk
Used to integrate apps with Idukay

# for Init
`npm install idukay-js-sdk`
## Set on js file.
### ES6

`import idukay from 'idukay-js-sdk';`

### ES5
`var idukay = require('idukay-js-sdk');`

# for login
`idukay.login({}, callback) //render pop up; callback is an implemented function`

# get user logged
`idukay.isUserLogged(); //return true if logged in.`

### example on es6
``` 
 loginIdukay = () => {
     idukay.login({}, function(error, response) {
       if (error) {
        console.log(error);
       }

       if (response) {
        console.log(user);
       }
     });
 };
``

### If you don't have require (es5 or es6)
```
<script src="path_idukay_sdk/lib/idukay.js"></script>
<script>
    window.idukay.login({}, callback);
</script>
```

