// 06_Functional 
debugger
function doubler(val) {
  return 2*val;
}

function map (arr,func) {
  for (var i=0; i<arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
}

function filter(arr,filt) {
  for (var i=0; i<arr.length; i++) {
    if (!filt(arr[i])) {
      arr.splice(i,1);
    }
  }
  return arr;
}

function contains(col,val) {
  var found = false;

  if (typeof(col) === "object") {
    for (var prop in col) {
      if (col[prop] === val) {
        found = true;
        break;
      }
    }
  }
  else {
    for (var i=0; i<col.length; i++) {
      if (col[i] === val) {
        found = true;
        break;
      }
    }
  }  
  return found;
}

function countWords(str) {
  var strArr = str.split(" ");
  return strArr.length;
}

function reduce(arr,start,func) {
  arr = arr.slice(start, arr.length);
  var red=0;
  for (var i=0; i<arr.length; i++) {
    red = func(arr[i],red);
  }
  return red;
}

function countWordsInReduce (arr,len) {
  return len + countWords(arr);
}

function sum(arr) {
  var add = function(a,b) {
    return a+b;
  };
  return reduce(arr,0,add);
}

function every(arr, func) {
  for (var i=0; i<arr.length; i++) {
    if (func(arr[i]) === false)
      return false;
  }
  return true;
}

function any(arr, func) {
  for (var i=0; i<arr.length; i++) {
    if (func(arr[i]) === true)
      return true;
  }
  return false;
}
