function Mammal(name) {
  this.name = name;
  this.offspring = [];
  // this.sayHello = function() {
  //   return "My name is " + this.name + ", I'm a Mammal";
  // };
  // this.haveBaby = function() {
  //   var baby = new Mammal("Baby "+this.name);
  //   this.offspring.append(baby);
  //   console.log(this.offspring);
  //   return baby;
  // };
}
// Mammal.prototype.offspring = [];

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", I'm a Mammal";  
};

Mammal.prototype.haveBaby = function() {
  var baby = new Mammal("Baby "+this.name);
  this.offspring[this.offspring.length] = baby;
  return baby;
};

function Cat(name, color) {
  Mammal.call(this, name);
  this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color) {
  var baby = new Cat("Baby "+this.name);
  baby.color = color;
  this.offspring[this.offspring.length] = baby;
  return baby;
};