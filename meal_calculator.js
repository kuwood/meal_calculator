var tax = 0.06;

var menu = {
  burger: 5.6,
  fries: 2.9,
  soda: 2.7,
  salad: 5.2,
  milkshake: 4.3,
  sandwich: 4.5
};

var Patron = function() {
  this.meal = [];
  this.addDish = function(dish) {
    this.meal.push(dish);
  };
  this.tip = 0;
};

Patron.prototype.subTotal = function() {
  var subTotalCost = 0;
  this.meal.forEach(function(item) {
    subTotalCost += menu[item];
  });
  return subTotalCost;
};

Patron.prototype.total = function() {
  return this.tip + this.subTotal() * (1 + tax);
};

var Bill = function(patronArray) {
  this.patrons = patronArray;
  this.subTotal = function() {
    var billSubTotal = 0;
    var total = 0;
    var tip = 0.2;
    var totalTip = 0;
    patronArray.forEach(function(patron) {
      billSubTotal += patron.subTotal();
      console.log(patron);
    });
    total = billSubTotal + (billSubTotal * tax);
    totalTip = total * tip;
    total += totalTip;
    patronArray.forEach(function(patron) {
      patron.tip = totalTip / patronArray.length;
    });
    return total;
  };
};

var keith = new Patron();
var kai = new Patron();
var mario = new Patron();
var giveBill = new Bill([keith,kai,mario]);
kai.addDish("salad");
kai.addDish("fries");
keith.addDish("burger");
keith.addDish("milkshake");
mario.addDish("milkshake");
mario.addDish("milkshake");
mario.addDish("milkshake");
mario.addDish("milkshake");
mario.addDish("salad");
console.log(giveBill.subTotal());
console.log(keith.total());
console.log(mario.total());
console.log(kai.total());
