(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popupTopLeftPosition = exports.createPost = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popUp = void 0;
var email = void 0;
var password = void 0;
var user_promise = void 0;

var createPost = function createPost(data, callback) {
  return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = popUp.document.getElementById("email").value;
            password = popUp.document.getElementById("password").value;

            _context.next = 4;
            return fetch('https://www.idukay.net/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: "email=" + email + "&password=" + password
            });

          case 4:
            response = _context.sent;


            user_promise = response.json().then(function (resp) {
              if (resp.errors.length) {
                popUp.close();
                callback(resp.errors);
              }

              if ((0, _keys2.default)(resp.response).length) {
                localStorage.setItem('idukaysdk/token', resp.response.token);
                popUp.close();
                callback(null, { user: { email: resp.response.user.email, school: resp.response.user.school, id: resp.response.user._id } });
              }
            }).catch(function (error) {
              popUp.close();
              throw error;
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));
};

var isUserLogged = function isUserLogged() {
  return localStorage.getItem('idukaysdk/token') ? true : false;
};

var popupTopLeftPosition = function popupTopLeftPosition(popupWidth, popupHeigth) {
  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  var screenWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var screenHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = screenWidth / 2 - popupWidth / 2 + dualScreenLeft;
  var top = screenHeight / 2 - popupHeigth / 2 + dualScreenTop;

  return { top: top, left: left };
};

var login = function login(data, callback) {
  localStorage.removeItem('idukaysdk/token');

  var html = "\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Bienvenido a Idukay</title>\n    <style>\n      html {\n        font-family: sans-serif;\n        -webkit-text-size-adjust: 100%;\n            -ms-text-size-adjust: 100%;\n      }\n\n      body {\n        margin: 0;\n      }\n      \n      h2   {\n        color: #478fca;\n        text-align: center;\n      }\n\n      .well {\n        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);\n        background-color: #f5f5f5;\n        border-radius: 4px;\n        border: 1px solid #e3e3e3;\n        box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);\n        margin-bottom: 20px;\n        margin: 5px;\n        min-height: 20px;\n        padding: 19px;\n      }\n      \n      .btn {\n        display: inline-block;\n        padding: 6px 12px;\n        margin-bottom: 0;\n        font-size: 14px;\n        font-weight: normal;\n        line-height: 1.42857143;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: middle;\n        -ms-touch-action: manipulation;\n            touch-action: manipulation;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        background-image: none;\n        border: 1px solid transparent;\n        border-radius: 4px;\n      }\n      \n      .btn-primary {\n        color: #fff;\n        background-color: #337ab7;\n        border-color: #2e6da4;\n      }\n      .btn-primary:focus,\n      .btn-primary.focus {\n        color: #fff;\n        background-color: #286090;\n        border-color: #122b40;\n      }\n      .btn-primary:hover {\n        color: #fff;\n        background-color: #286090;\n        border-color: #204d74;\n      }\n      .btn-lg {\n        padding: 10px 16px;\n        font-size: 18px;\n        line-height: 1.3333333;\n        border-radius: 6px;\n      }\n\n      .form-control {\n        display: block;\n        width: 100%;\n        height: 34px;\n        padding: 6px 12px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        color: #555;\n        background-color: #fff;\n        background-image: none;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n             -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n                transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n      }\n      .form-control:focus {\n        border-color: #66afe9;\n        outline: 0;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n                box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n      }\n\n      .form-group {\n        margin-bottom: 15px;\n      }\n\n      .center-image {\n        display: block;\n        margin-bottom: -15px;\n        margin-left: auto;\n        margin-right: auto;\n      }\n\n      .center {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n\n      .idukay-bar {\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n        margin: 5px 0 -20px -20px;\n        width: 510px;\n      }\n    </style>\n  </head>\n  <body>\n      <div class=\"well\">\n        <img class=\"center-image\" src=\"data:image/png;base64,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\"></img>\n        <h2>Ingresa con tu usuario</h2>\n        <form>\n          <div class=\"form-group\">\n            <input id=\"email\" class=\"form-control\" name=\"email\" required type=\"email\" placeholder=\"Correo  electr&oacute;nico\" />\n          </div>\n          <div class=\"form-group\">\n            <input id=\"password\" class=\"form-control\" name=\"password\" required type=\"password\" placeholder=\"Contrase&ntilde;a\" />\n          </div>\n          <div class=\"form-group\">\n            <button id=\"iduButton\" type=\"button\" class=\"btn btn-primary btn-lg center\">\n              <span>Ingresar</span>\n            </button>\n          </div>\n        </form>\n        <img class=\"idukay-bar\" src=\"data:image/png;base64,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\">\n        </img>\n      </div>\n  </body>\n  </html>";

  var popupWidth = 520;
  var popupHeigth = 360;

  var _popupTopLeftPosition = popupTopLeftPosition(popupWidth, popupHeigth),
      top = _popupTopLeftPosition.top,
      left = _popupTopLeftPosition.left;

  popUp = window.open('', 'Login', 'toolbar=no, menubar=no, scrollbars=no, resizable=0, width=' + popupWidth + ', height=' + popupHeigth + ', top=' + top + ', left=' + left);
  popUp.document.write('');
  popUp.document.write(html);
  popUp.document.getElementById("iduButton").addEventListener("click", createPost(data, callback));

  return user_promise;
};

exports.createPost = createPost;
exports.popupTopLeftPosition = popupTopLeftPosition;


var idukay = { login: login, isUserLogged: isUserLogged };

exports.default = idukay;
},{"babel-runtime/core-js/object/keys":3,"babel-runtime/helpers/asyncToGenerator":5,"babel-runtime/regenerator":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('./idukay/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  window.idukay = _login2.default;
}

exports.default = _login2.default;
},{"./idukay/login":1}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":9}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":10}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":4}],6:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":7}],7:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}],8:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":6}],9:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":18,"../../modules/es6.object.keys":75}],10:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":18,"../modules/es6.object.to-string":76,"../modules/es6.promise":77,"../modules/es6.string.iterator":78,"../modules/es7.promise.finally":79,"../modules/es7.promise.try":80,"../modules/web.dom.iterable":81}],11:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],12:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],13:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],14:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":35}],15:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":64,"./_to-iobject":66,"./_to-length":67}],16:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":17,"./_wks":72}],17:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],18:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],19:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":11}],20:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],21:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":25}],22:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":27,"./_is-object":35}],23:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],24:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":18,"./_ctx":19,"./_global":27,"./_has":28,"./_hide":29}],25:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],26:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":14,"./_ctx":19,"./_is-array-iter":34,"./_iter-call":36,"./_to-length":67,"./core.get-iterator-method":73}],27:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],28:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],29:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":21,"./_object-dp":46,"./_property-desc":54}],30:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":27}],31:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],32:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],33:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":17}],34:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":41,"./_wks":72}],35:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],36:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":14}],37:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":29,"./_object-create":45,"./_property-desc":54,"./_set-to-string-tag":58,"./_wks":72}],38:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":24,"./_hide":29,"./_iter-create":37,"./_iterators":41,"./_library":42,"./_object-gpo":48,"./_redefine":56,"./_set-to-string-tag":58,"./_wks":72}],39:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":72}],40:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],41:[function(require,module,exports){
module.exports = {};

},{}],42:[function(require,module,exports){
module.exports = true;

},{}],43:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":17,"./_global":27,"./_task":63}],44:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":11}],45:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":14,"./_dom-create":22,"./_enum-bug-keys":23,"./_html":30,"./_object-dps":47,"./_shared-key":59}],46:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":14,"./_descriptors":21,"./_ie8-dom-define":31,"./_to-primitive":69}],47:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":14,"./_descriptors":21,"./_object-dp":46,"./_object-keys":50}],48:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":28,"./_shared-key":59,"./_to-object":68}],49:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":15,"./_has":28,"./_shared-key":59,"./_to-iobject":66}],50:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":23,"./_object-keys-internal":49}],51:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":18,"./_export":24,"./_fails":25}],52:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],53:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":14,"./_is-object":35,"./_new-promise-capability":44}],54:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],55:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":29}],56:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":29}],57:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":18,"./_descriptors":21,"./_global":27,"./_object-dp":46,"./_wks":72}],58:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":28,"./_object-dp":46,"./_wks":72}],59:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":60,"./_uid":70}],60:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":18,"./_global":27,"./_library":42}],61:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":11,"./_an-object":14,"./_wks":72}],62:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":20,"./_to-integer":65}],63:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":17,"./_ctx":19,"./_dom-create":22,"./_global":27,"./_html":30,"./_invoke":32}],64:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":65}],65:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],66:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":20,"./_iobject":33}],67:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":65}],68:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":20}],69:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":35}],70:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],71:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":27}],72:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":27,"./_shared":60,"./_uid":70}],73:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":16,"./_core":18,"./_iterators":41,"./_wks":72}],74:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":12,"./_iter-define":38,"./_iter-step":40,"./_iterators":41,"./_to-iobject":66}],75:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":50,"./_object-sap":51,"./_to-object":68}],76:[function(require,module,exports){

},{}],77:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":11,"./_an-instance":13,"./_classof":16,"./_core":18,"./_ctx":19,"./_export":24,"./_for-of":26,"./_global":27,"./_is-object":35,"./_iter-detect":39,"./_library":42,"./_microtask":43,"./_new-promise-capability":44,"./_perform":52,"./_promise-resolve":53,"./_redefine-all":55,"./_set-species":57,"./_set-to-string-tag":58,"./_species-constructor":61,"./_task":63,"./_user-agent":71,"./_wks":72}],78:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":38,"./_string-at":62}],79:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":18,"./_export":24,"./_global":27,"./_promise-resolve":53,"./_species-constructor":61}],80:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":24,"./_new-promise-capability":44,"./_perform":52}],81:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":27,"./_hide":29,"./_iterators":41,"./_wks":72,"./es6.array.iterator":74}]},{},[2]);
