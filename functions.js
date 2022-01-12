/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

const { retainLines } = require("babel-core/lib/transformation/file/options/config");

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(numbers) {
  // Your code here
  // let sum = 0;
  // numbers.forEach(element => {
  //   if ( element%2 === 1 )
  //     sum = sum + element;
  // });
  // return sum;

  // const oddNumbers = numbers.filter(num => (num%2===1));
  // return oddNumbers.reduce((sum, oddNum) => sum+oddNum);

  return numbers.filter(num=> (num%2===1)).reduce((sum, oddNum) => sum+oddNum);

}
console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));      //->39
console.log(sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));  //-> 25

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: You need to turn the string into an array first
 * Another Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  // Your code here
  let array = string.toLowerCase();
  c = c.toLowerCase();
  array = array.split("");
  let count = 0;
  array.forEach(char => {
    if (char === c)
      count++;
  });
  return count;

}
console.log(characterCount("Michael Stephenson", "e") );    //-> 3
console.log(characterCount("Character Count is clever", "c")); 

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 * - assume all differences are positive numbers
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  // Your code here
  let largest = 0;

  for (let i = 0; i < numbers.length; i++) {
    if ( (numbers[i+1] - numbers[i]) > largest)
      largest = (numbers[i+1] - numbers[i]);
  }
  // numbers.forEach( (number) => {
  //   if ( (this[++this.number] - number ) > largest)
  //     largest = (this[++this.number]) - number;
  // });

  return largest;
}
console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  // Your code here
  let indexOfX = numbers.findIndex( number => (number===x));
  return numbers.slice(indexOfX+1,numbers.length);
}
console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  // Your code here
  let firstInitial = firstName.toUpperCase().split("")[0];
  let lastInitial = lastName.toUpperCase().split("")[0];
  return `${firstInitial}${lastInitial}`;
}
console.log(abbreviate("miss", "Stephane"));

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  // Your code here
  return (string === string.toUpperCase());
}
console.log(isUpperCase("JCREW"));
console.log(isUpperCase("Mickey S"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(numbers, x) {
  // Your code here
  return numbers.some(number => number===x);
}
console.log(elementInArray([5, 6, 7], 8));

module.exports = {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
};
