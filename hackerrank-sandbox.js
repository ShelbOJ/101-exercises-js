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


  // O(N) N means the length of the string in this case
  // It is O of N because we are performing 1 operation for every letter in the string
  function printLetters(string) {
    for (let index = 0; index < string.length; index++) {
        // get the letter at the current index from the string
        const letter = s[index];
        console.log(letter);
    }
  }


  // BIG O: O(N)^2
  // Much simpler but requires more operations (SLOW)
  function brainEmptyUniqueCharacter(string) {
      // Loop through every letter in the string
     for (let index = 0; index < string.length; index++) {
        // get the letter at the current index from the string
        const letter = s[index];
        // if current letter is not in the string
        // return it because we found the first one
        let isUnique = true;
        for(let loop2Index = 0; loop2Index < string.length; loop2Index++) {
            const otherLetter = s[loop2Index];
            if(loop2Index !== index) {
                if(letter === otherLetter) {
                    isUnique = false;
                }
            }
        }
        if(isUnique) {
            return i;
        }
    }
    // There are no unique characters
    return -1;
  }

// quadratic solution
  function brainEmptyUniqueCharacter(string) {
    // Loop through every letter in the string
   for (let index = 0; index < string.length; index++) {
      // get the letter at the current index from the string
      const letter = s[index];
      // if current letter is not in the string
      // return it because we found the first one
      // includes is an interator that checks whether or not it's in the string
      if (!string.includes(letter)) return i + 1;
  }
  // There are no unique characters
  return -1;
}

// BIG O: O(N)
// A unique character is one that appears only once in a string. Given a string consisting of lowercase english letters only, return the index of the 1st unique character in the string using 1-based indexing. if the string doesnot contain unique character, return -1.
function getUniqueCharacter(s) {
    /**
     * Find the first unique character in a string
     * 
     * Step 1: Build a map of unique characters to their index in the string
     * Step 2: Get the smallest index in our map to find the first unique character
     * Step 3: Return the smallest index, or -1 if there are no unique characters
     */

    /**
     * Example characterIndexes for the string "wowza"
     * {
     *   a: 4
     *   o: 1,
     *   w: 5,
     *   z: 3,
     * }
     */
        
    /** Building the Map */
    // making an empty object/key-value pair
    // Map of UNIQUE letters to its index in the string
    // Duplicate letters will have s.length as the value
    const characterIndexes = {}

    // map isn't ordered by index, that's why we have to keep track of the smallestIndex
    for (let i = 0; i < s.length; i++) {
        // get the letter at the current index from the string
        const c = s[i];
        // if c is in the map(that means it is not unique)
        if (c in characterIndexes) {
            // set the char equal to the length of the string if it's already in the map
            // We do this so that we can tell that this is not a unique character later
            characterIndexes[c] = s.length;
        } else {
            //otherwise we set the value to the current index
            characterIndexes[c] = i;
        }
    }
    /** --------------------------- */
    
    /** CALCULATE SMALLEST INDEX */
    // now we want to find the smallest number in the map
    // start at our smallest index to the length of the string
    // b4 we even know if there are any unique characters
    let smallestIndex = s.length; 
    
    // Loop through every character stored in our map
    // c is the key/character and i is the value/index
    for (const c in characterIndexes) {
        // gets the index in the map at the character
        const i = characterIndexes[c];
        // Update the smallest index at each iteration of the loop
        // by setting it equal to the minimum of the current smallest index and i, the index of the character we are checking
        smallestIndex = Math.min(i, smallestIndex);
    }
    /** --------------------------- */


    /** Return the correct value */
    // now that we have the smallest index in the array
    if (smallestIndex === s.length) {
        // if it doesnt have any unique characters, return to negative one
        return -1;
    } else {
        // other wise account for 1 based indexing + the smallestIndex
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
  
  // Given an array of strings, only return ones that aren't anagrams of strings that come before it in the array 
  // Keep all strings that are NOT anagrams and return them in an array that's sorted alphabetically
  function funWithAnagrams(text) {
      // Takes two strings and tells you if they are anagrams of one another
      function isAnagram(s1, s2) {
          // Do this for both strings 
          // Convert string to an array using Array.from so that we can call the sort method
          // turn it back into a string using the join method so that we can use ===
          return Array.from(s1).sort().join("") === Array.from(s2).sort().join("");
          //.join("") turns an array back into a string
          // "aaagmnrs" is an anagram of "anagrams".
          // Sorting both of them alphabetically turns them both into "aaagmnrs"
      }
      // intitialize empty array to keep track of valid strings
      const valid = [];
      // loops through each string in the input array and push to our valid array if they are valid
      for (let i = 0; i < text.length; i++) {
          // string is valid by default 
          let isValid = true;
          // loops through each string in our valid array
          for(let str of valid) {
              // if the string is an anagram of another string that is already in our valid array, set valid to false
              if (isAnagram(str, text[i])) isValid = false;
          }
          // if isValid is true push the current string to our valid array
          if (isValid) valid.push(text[i]) 
      }
      //we call sort() to sort the valid strings in order alphabetically
      return valid.sort();
  }
  /**
   * BIG O: (N^2) * (MlogM) (I think)
   * N is number of strings in text array
   * M is the length of the longest string in the array
   * 
   * First loop is N
   * Inner loop makes it N^2
   * 
   * Sorting the string is MlogM
   */
  

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
