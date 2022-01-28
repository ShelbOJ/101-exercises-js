# 101-exercises-js
# Table of Contents
1. [Arrays](#Arrays)

# Arrays <a id="Arrays"/>
```javascript
var array = ['value1', 'value2', 'value3'];

// To get the first item in an array, use brackets with 0 
var firstValue = array[0];
var secondValue = array[1];

// To get the number of items in an array, use array.length
var numberOfItems = array.length;

// To get the last item, use array.length - 1, because arrays start at 0
var lastValue = array[array.length - 1];

// shift will remove the first value from an array
firstValue = array.shift()
// array is now ['value2', 'value3']
// firstValue is now 'value1'

// pop will remove the last value from an array
lastValue = array.pop()
// array is now ['value2']
// lastValue is now 'value3'

// To add a new value to the end of an array, use push
array.push('value3') 
// array is now ['value2', 'value3']

// To add a new value to the beginning of an array, use unshift
array.unshift('value1') 
// array is now ['value1', 'value2', 'value3']

