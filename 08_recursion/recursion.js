function factorialIterative(n) {
  fact = 1;
  while (n>1) {
    fact *= n;
    n-=1;
  }
  return fact;
}

function factorial(n) {
  if (n===0)
    return 1;
  else
    return n * factorial(n-1);
}

function fib(n) {
  if (n===1 || n===0)
    return 1;
  else
    return fib(n-2) + fib(n-1);
}

function type(n) {
  var t = Object.prototype.toString.call(n);
  t = t.split(" ");
  return t[1].substring(0,t[1].length-1);
}

function stringify(x) {
  if (type(x) ==="String")
    return '\"'+x+'\"';
  else if (type(x)==="Array") {
    var toString = "[";
    for (var i=0; i < x.length; i++) {
      toString += stringify(x[i])+",";
    }
    toString = toString.substring(0,toString.length-1)+"]";
    return toString;
  }
  else if (type(x)==="Object") {
    var toString = "{";
    for (var prop in x) {
      toString += '\"'+String(prop)+'\"'+": "+stringify(x[prop])+",";
    }
    toString = toString.substring(0,toString.length-1)+"}";
    return toString;
  }
  else //if (!(type(x)==="Array" || type(x)==="Object"))
    return String(x);
}