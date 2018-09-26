var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray = function(array, element) {
  return [element,...array];
};

var addElementToEndOfArray = function (array, element) {
  return[...array,element];
};

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  return array.unshift(element);
};

//destructivelyAddElementToBeginningOfArray(chocolateBars, "musk");

var destructivelyAddElementToEndOfArray = function(array, element){
  return array.push(element);
};

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift();
};



var accessElementInArray = function(array, index) {
  return array[index];
};

