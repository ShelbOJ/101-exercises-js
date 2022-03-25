function fizzBuzz(n) {

    // i = 1, because that's where we're starting in the instructions
    // i <= n, bc n is the end of of the range, it's inclusive so we are including n
    // i, is each integer
    // n, where the range ends
    for (let i = 1; i <= n; i++) {
        // we check for both multiples first so we can get the right output 
        if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        } else if (i % 5 === 0) {
        console.log("Buzz");
        } else if (i % 3 === 0) {
        console.log("Fizz")
        } else {
        console.log(i);
        }
    }
  }

// A unique character is one that appears only once in a string. Given a string consisting of lowercase english letters only, return the index of the 1st unique character in the string using 1-based indexing. if the string doesnot contain unique character, return -1.

function getUniqueCharacter(s) {
    // 1st we loop through the string to check each character and validate if they are unique
    // s.length = string length
    // how do we know if c (character) is unique?
        // we store each character in a map and store it's index at that map
        // if c is already in the map, then we set that to the length of the string
        // afterwards we get the character in the map with the smallest index
        
    //making an empty object/key-value pair
    const characterIndexes = {}
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c in characterIndexes) {
            characterIndexes[c] = s.length;
        } else {
            characterIndexes[c] = i;
        }
    }
    
    //now we want to find the smallest number in the map
    let smallestIndex = s.length;
    
    // using a for each to loop through each character in our map, because the map is an object
    for (const c in characterIndexes) {
        //gets the index in the map at the character
        const i = characterIndexes[c];
        // then keep track of the smallest index by setting it equal to the minimum of the smallest index or i, the current index
        smallestIndex = Math.min(i, smallestIndex);
        
    }
    //now that we have the smallest index in the array
    if (smallestIndex === s.length) {
        // if it doesnt have any unique characters, return to negative one
        return -1;
    } else {
        //other wise account for 1 based indexing + the smallestIndex
        return smallestIndex + 1;
    }
  
  }
  
  
  // Two strings are anagrams if they are permutations of eachother. In other words, both strings have the same size and the same characters. For example, "aaagmnrs" is an anagram of "anagrams". Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.
  
  /*
   * Complete the 'funWithAnagrams' function below.
   *
   * The function is expected to return a STRING_ARRAY.
   * The function accepts STRING_ARRAY text as parameter.
   */
  
  // We go through the array and check if a string exists in the array that's an anagaram of that string and if it is an anagram we want to delete that string but keep the 1st occurence
  
  
  function funWithAnagrams(text) {
      // this function takes in two strings converts them to an array and then sorts them and converts them back into strings to check if they are equal, if they are equal, they are anagrams
      // this could probably be more efficiently refactored
      function isAnagram(s1, s2) {
          return Array.from(s1).sort().join("") === Array.from(s2).sort().join("");
      }
      // intitialize empty array to keep track of valid strings
      const valid = [];
      // loops through each string in the input array and push to our valid array if they are valid
      for (let i = 0; i < text.length; i++) {
          // string is valid by default 
          let isValid = true;
          // loops through each string in our valid array
          for(let str of valid) {
              // if the string is an anagram of a string that is already in our valid array, set valid to false
              if (isAnagram(str, text[i])) isValid = false;
          }
          // if isValid is true push the current string to our valid array
          if (isValid) valid.push(text[i]) 
      }
      return valid.sort();
  }
  

//   Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
    // .split SPLITS a string into an array of substrings
    input = input.split("\n");
    // the shift() method removes the first element from an array and returns that removed element
    // this method changes the length of the array.
    var n = input.shift();
    input = input.shift().split(' ');
    var len = input.length;
    
    var neg = 0.0;
    var zero = 0.0;
    var pos = 0.0;
    
    input.forEach(function (num) {
        num = parseInt(num);
        if (num < 0) { neg++ }
        else if (num > 0) { pos++ }
        else { zero++ }
    });

    console.log((pos / len).toPrecision(3));
    console.log((neg / len).toPrecision(3));
    console.log((zero / len).toPrecision(3));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
 });
