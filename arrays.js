var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray = function(array, element) {
  return [element,...array];
};

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
};

//destructivelyAddElementToBeginningOfArray(chocolateBars, "musk");

var addElementToEndOfArray = function (array, element) {
  return[...array,element];
};


var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  return array;
};

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift();
  return array;
};

var accessElementInArray = function(array, index) {
  return array[index];
};

var removeElementFromBeginningOfArray = function(array){
  return array.slice(1);
};

var destructivelyRemoveElementFromEndOfArray = function(array){
  return array.pop();
};

var removeElementFromEndOfArray = function(array){
  array.slice(array.length -1);
};