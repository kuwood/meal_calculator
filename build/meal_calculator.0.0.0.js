/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var tax = 0.06;
	
	//menu object with item/prices
	var menu = {
	  burger: 5.6,
	  fries: 2.9,
	  soda: 2.7,
	  salad: 5.2,
	  milkshake: 4.3,
	  sandwich: 4.5
	};
	
	//patron constructor that tracks the whole meal and has a method to add dishes
	var Patron = function Patron() {
	  this.meal = [];
	  this.addDish = function (dish) {
	    this.meal.push(dish);
	  };
	  this.tip = 0;
	};
	
	//cost of just the menu items
	Patron.prototype.subTotal = function () {
	  var subTotalCost = 0;
	  this.meal.forEach(function (item) {
	    subTotalCost += menu[item];
	  });
	  return subTotalCost;
	};
	
	//the overall amount due including tax and tip
	Patron.prototype.total = function () {
	  return this.tip + this.subTotal() * (1 + tax);
	};
	
	//creates a bill by supplying an array of patrons
	var Bill = function Bill(patronArray) {
	  this.patrons = patronArray;
	  this.total = function () {
	    var billSubTotal = 0;
	    var total = 0;
	    var tip = 0.2;
	    var totalTip = 0;
	    //add each patrons subTotal to the bills subTotal
	    patronArray.forEach(function (patron) {
	      billSubTotal += patron.subTotal();
	    });
	    //calculate subTotal with tax
	    total = billSubTotal + billSubTotal * tax;
	    totalTip = total * tip;
	    total += totalTip;
	    //calculate tip due for each patron
	    patronArray.forEach(function (patron) {
	      patron.tip = totalTip / patronArray.length;
	    });
	    return total;
	  };
	};
	
	//sample data
	var keith = new Patron();
	var kai = new Patron();
	var mario = new Patron();
	var giveBill = new Bill([keith, kai, mario]);
	kai.addDish("salad");
	kai.addDish("fries");
	keith.addDish("burger");
	keith.addDish("milkshake");
	mario.addDish("milkshake");
	mario.addDish("milkshake");
	mario.addDish("milkshake");
	mario.addDish("milkshake");
	mario.addDish("salad");
	console.log(giveBill.total());
	console.log(keith.total());
	console.log(mario.total());
	console.log(kai.total());

/***/ }
/******/ ]);
//# sourceMappingURL=meal_calculator.0.0.0.js.map