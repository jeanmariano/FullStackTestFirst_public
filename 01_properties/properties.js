function setPropertiesOnObjLiteral(obj) {
  obj.x = 7;
  obj['y'] = 8;
  obj['onePlus'] = function(num) {
    return num+1;
  };
  return obj;
}

function setPropertiesOnArrayObj(arrayObj) {
  arrayObj.hello = function() {
    return "Hello!";
  }
  arrayObj['full']="stack";
  arrayObj[0]=5;
  arrayObj.twoTimes = function(num) {
    return num*2;
  };
  return arrayObj;
}

function setPropertiesOnFunctionObj(funcObj) {
  funcObj.functionObject = function() {
    return "I am a function object, all functions are objects! Function can have their own properties too!";
  };
  funcObj.year = 2015;
  funcObj.divideByTwo = function(num) {
    return num/2;
  };
  funcObj.prototype.helloWorld = function() {
    return "Hello World";
  };
  return funcObj;
}