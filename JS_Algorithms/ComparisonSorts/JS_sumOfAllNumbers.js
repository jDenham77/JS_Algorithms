//n = opertions so there are n operations and also the = sign is an
//operation, but find the O(n). This function depends on the
// n so, it's O(n)

function addUpTo(n) {
  total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

//Second way... much faster but ocunt operations
//there are 3 here (*, +, /)
//Runtime of O(1) CONSTANT

addUpT0 = n => {
  return (n * (n + 1)) / 2;
};

//This ex is O(n) eventhough there's two loops bec
//its two O(n) but we look at the big picture. It's constant
function countUpAndDown(n) {
  for (var i = 0; i < n; i++) {
    // O(n)
    console.log(i, "going up");
  }
  for (var j = n - 1; j >= 0; j--) {
    //O(n)
    console.log(j, "going down");
  }
}
// prints all pairs of 1-n. O(n) inside of a O(n) opwerations
// is O(n2). As the n grows then the runtime grows at O(n2)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

//frequency counter is arr1 squared === arr2
Same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let val in arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val in arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
    return true;
  }
};
//ANAGRAM FREQUENCY COUNTER (FREQUENCY COUNTER = USE AN OBJECT, CONSTRUCT IT USING LOOP, THEN 2ND LOOP NOT NESTED TO MAINTAIN O(N) )
validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookip[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //cant find letter or letter is zero then it's not an anagram
    if (!lookup[etter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};
//SUM ZERO -- MULTIPLE POINTER**** sorted array and move down or up with pointer.
//pointer working left and right to the center.
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
sumZer0([-3, -3, -1, 0, 1, 2, 3]);

//POINTERS *** SORTED ARRAY count the unique values for a sorted array

countUniqueValues = arr => {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

[1, 1, 2, 3, 3, 4, 5, 6, 6, 7];

str2 = str1.slice(5, -1);

//#1 ALG LINEAR SEARCH index of, find index
// linear search is the best search for sorted array
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
    return -1;
  }
}
linearSearch([10, 3, 23, 14, 54, 5], 3); //index of 1

//LINEAR SEARCH -- O(1)best OR O(n) WORST or o(n) AVERAGE (UNSORTED DATA)

//#2 ALG BINARY SEARCH - (SORTED ARRAYS ONLY) - pick middle and check greater or later,
//     then checks middle again, and middle, then middle. better than linear if
// bec you check left and right then make less times checking, ONLY SORTED **DIVIDE & CONQUER***
// is something greater then or less then. only works sorted. EX below
//- sortedArray ? Binary Search : Linear Search
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);
  //logic now
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    var middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);

function binarySearchRefactor(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
binarySearchRefactor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);

//NAIVE STRING SEARCH - COUNT THE NUMBER OF TIMES A SMALL STRING
//RETURNS IN A LONG STRING
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
naiveSearch("jakedenhamaaa", "ha");



