function RPNCalculator() {
  debugger;
  this.stack = []
  this.val = 0;
  this.value = function() {
    return this.val;
  };
  this.push = function(num) {
    this.stack.push(num);
  };
}

RPNCalculator.prototype.value = function() {
  return this.val;
};

RPNCalculator.prototype.plus = function() {
  if (this.stack.length ===0)
      throw "rpnCalculator is empty";
    this.val = this.stack.pop() + this.stack.pop();
    this.stack.push(this.val)
};

RPNCalculator.prototype.minus = function() {
  if (this.stack.length ===0)
      throw "rpnCalculator is empty";
    var a,b;
    a = this.stack.pop()
    b = this.stack.pop();
    this.val = b-a;
    this.stack.push(this.val)
};

RPNCalculator.prototype.times = function() {
  if (this.stack.length ===0)
      throw "rpnCalculator is empty";
    this.val = this.stack.pop() * this.stack.pop();
    this.stack.push(this.val)
};

RPNCalculator.prototype.divide = function() {
  if (this.stack.length ===0)
      throw "rpnCalculator is empty";
    var a,b;
    a = this.stack.pop()
    b = this.stack.pop();
    this.val = b/a;
    this.stack.push(this.val)
};