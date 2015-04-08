function createCalculator() {
  var calc = {};
  calc.val = 0;
  calc.value = function() {
    return calc.val;
  };
  calc.add = function(num) {
    calc.val = calc.val + num;
  };
  calc.subtract = function(num) {
    calc.val = calc.val - num;
  };
  return calc;
}