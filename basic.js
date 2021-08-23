// variable
var deposit = 400;
// condition
if(deposit > 500){

}
if(deposit < 300){

}
if(deposit == 600){

}
if(deposit != 500){

}
if(deposit >= 500){

}
if(deposit <= 400){

}
// Array
const numbers = [45,65,89,345, 6544,6788];
const numberCount = numbers.length;
numbers.pop();
numbers.push(1111);
numbers[2] = 444;
// check whether 666 included in the Array
if(numbers.indexOf(666) != -1){

}
// includes mane Array bitore 666 ase kina thkle true hve.. nathkle false hbe
if(numbers.includes(666)){

}
// loop
// while, for
// kono ekta array wpadan golo ke jodi loop chalaite chail taile abave chalamo
for(const number of numbers){

}

function fullName(first, second){
    // first + second donota jog korle ak sathe legee jabe
    const name = first + second;
    // first + ' '+ second abave korle donota jog korle pak hoye jabe
    const name = first+ ' ' +second;
}
const parson = fullName('rakib', 'rokib');

// Object
const student = {color:'yellow', contain: 'water', price: 500}