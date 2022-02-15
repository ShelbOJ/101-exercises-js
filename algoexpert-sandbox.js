//function that takes in an array w/distinct integers & an integer representing a target sum
//function should return the integers in the array in any order
//if no two numbers sum up to the target sum, the function should return an empty array

function twoNumberSum(array, targetSum) {
  // Write your code here.
  // brute force solution; check every value
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    for (let j = 0; j < array.length; j++) {
      let value2 = array[j];
      let sum = value + value2;

      if (i != j && sum === targetSum) {
        return [value, value2];
      } 
    }
  }
  return [];
}

console.log({ array: [3, 5, -4, 8, 11, 1, -1, 6], targetSum: [10] });
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
