var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray = function(array, element) {
  return [element,...array];
};

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  return array.unshift(element);
};

//destructivelyAddElementToBeginningOfArray(chocolateBars, "musk");

var addElementToEndOfArray = function (array, element) {
  return[...array,element];
};




var destructivelyAddElementToEndOfArray = function(array, element){
  return array.push(element);
};

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift();
};



var accessElementInArray = function(array, index) {
  return array[index];
};

