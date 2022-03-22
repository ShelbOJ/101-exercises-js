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

//Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
//A subsequence of an array is a set  of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let i = 0;
  let j = 0;
  for (i = 0; i < array.length; i++) {
    //checks every index of array for what ever is in sequence j
    for (j = 0; j < sequence.length; j++) {
      if (array[i] === sequence[j]) {
        i++;
        j++;
      } else {
        i++;
      }
    }
    //j is the count of how many times the integers are true to the array
    //it has to be found true just as long as the sequence array
    return j === sequence.length;
  }
}

console.log({ array: [5, 1, 22, 25, 6, -1, 8, 10], sequence: [1, 6, -1, 10] });
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

// Complexity analysis
// Time complexity: O(N)
// n is the length of th emain array
// Space complexity: constant 0(1)








