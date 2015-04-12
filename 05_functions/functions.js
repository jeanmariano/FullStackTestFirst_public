// Functions.js
function concat_string() {
  var args = Array.prototype.slice.call(arguments);
  return args.join("");
}

function yourFunctionRunner() {
  var result = "";
  for (var i=0; i<arguments.length; i++) {
      result += arguments[i]();
  }
  return result;
}

function makeAdder(a) {
  return function (b) {
    return a+b;
  }
}

function once (func) {
  var cache = [];
  return function () {
    if (cache.indexOf(func) === -1) {
      cache.push(func)
      func();
    }
  };
}

function createObjectWithTwoClosures() {
  var obj = {};
  var num = 0;
  obj.oneIncrementer = function() {
    num++;
  }
  obj.tensIncrementer = function() {
    num+=10;
  }
  obj.getValue = function() {
    return num;
  }
  return obj;
}