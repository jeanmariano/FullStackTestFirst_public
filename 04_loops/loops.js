function repeat(word,times) {
  var repeated = "";
  for (var i=0; i<times; i++) {
    repeated += word;
  }
  return repeated
}

function sum(arr) {
  var sum = 0;
  for (var i=0; i<arr.length;i++) {
    sum += arr[i];
  }
  return sum;
}

function gridGenerator(num) {
  // var grid = [[]];
  var grid = "";
  for (var i=0; i<num; i++) {
    for (var j=0; j<num; j++) {
      if (i%2===1 && j%2===1)
        grid += "#";
      else if (i%2===0 && j%2===0)
        grid += "#";
      else
        grid += " ";
    }
    grid += "\n";
  }
  return grid;
}

function largestTriplet(num) {
  var a=0, b=0, c=0;
  return [a,b,c];
}

function join(arr,delimiter) {
  var joined = "";
  for (var i=0; i<arr.length;i++) {
    joined += arr[i]
    if (delimiter !== undefined && i!=arr.length-1)
      joined+=delimiter;
  }
  return joined
}

function paramify(obj) {
  var paramed = "";
  var keys = Object.keys(obj).sort();
  for (var i=0; i<keys.length; i++) {
    paramed+=keys[i]+"="+obj[keys[i]];
    paramed+="&";
  }
  paramed = paramed.substring(0,paramed.length-1);
  return paramed;
}