//////The Calculator////////////////////
///Part 1///////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



// // Write a function called squareNumber that will take one argument (a number), square that number,
// and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and
// return the result. It should also log a string like "Half of 5 is 2.5.".
// // Write a function called percentOf that will take two numbers, figure out what percent the first
// number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area
// based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.
//



///Im supposed to square a number/////////////////////////////////////////
const squareNumber = function(num1){
  let square = num1 * num1;
  return square;


}

console.log('The result of squaring 3 is :', squareNumber(3));

//////Im a a function that divides numbers////////////////////////////////
const halfNumber = function(num1){
  let division = num1 / 2;

  return division;



}

console.log('The result of dividing 3 is ', halfNumber(10));

/////I calculate the percentage of numbers///////////////////////////////
const percentOf = function(num1, num2) {
  let percentage = (num1 / num2) * 100;

  return percentage;


}

console.log( `5 is ${percentOf(5,10)} % of 10` );

///////Calculate the area of a circle with a function that takes an arguement as an arguement
const areaOfCircle = function(radius){
  let circleArea = Math.round(Math.PI * (radius * radius)); /////////////////////Bonus: Math.round() method to round result of area calculation


  return circleArea;

}

console.log(`The area for a circle with a of radius 2 is : ${areaOfCircle(2)}`);


//////////////////////////////////////////////
////////////Part2//////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


//
// const partTwo = function(num1){
//   let firstResult = halfNumber(num1);
//   let secondResult = squareNumber(firstResult);
//   let thirdResult = areaOfCircle(secondResult);                                /////////////////////Can\'t get this guy to work/////////////////////////////
//   let theFinalCountdown = percentageOf(thirdResult, secondResult);
//   return theFinalCountdown;
//
//
//
//
// }
//
// console.log(`${partTwo(50)}`);



//
// Create a function called DrEvil. It should take a single argument, an amount,
// and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)


const drEvil = function(num1){
  if( num1 < 1000000 === true ){
  return (num1 + ' dollars');
} if
  (num1 > 1000000 === true);
  return (num1 + ' dollars' + ' (pinky)')
}


console.log(drEvil(1000000));
console.log(drEvil(10));
