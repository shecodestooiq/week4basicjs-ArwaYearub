// Task 1
function checkVotingEligibility() {
  var age = 20;
  if(age >=18 ){
    console.log('You are eligible for voting');
  } else {
    console.log('You are not eligible for voting')
  }
}

// Task 2
function printNumbersWithWhile() {
  var i = 1;
  while (i<6){
    console.log('Number', i);
    i++;
  }
}

// Task 3
function printEvenNumbersWithFor() {
  for(var i=2; i<10; i+=2){
    console.log('The even number', i);
  }
}

// Task 4
function getDayOfWeek() {
  var dayOfTheWeek = 4;

  switch (dayOfTheWeek){
    case 1:
    console.log('The day is Sunday');
    break;
    case 2:
    console.log('The day is Monday');
    break;
    case 3:
    console.log('The day is Tuesday');
    break;
    case 4:
    console.log('The day is Wednesday');
    break;
    case 5:
    console.log('The day is Thursday');
    break;
    case 6:
    console.log('The day is Friday');
    break;
    case 7:
    console.log('The day is Saturday');
    break;
  }
}

// Task 5
var num1 = 20; //declaring and initializing number 1
var num2 = 80; //declaring and initializing number 2
function sum(num1,num2) {
return num1 + num2;
}

// Task 6
//Uncomment and solve     // i will(arwa)
const fruits =['Rasberry','Blueberry','Strawberry','Cranberry','Blackberry'];
for(var i=0; i< fruits.length ; i++){
  console.log('One fruit of my fruit array', fruits[i]); // in here i included the fruit[i] so that each time the loop runs it will display the value of the array according to its place in the array starting from 0 and to the length of the array "fruit".
}
module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
