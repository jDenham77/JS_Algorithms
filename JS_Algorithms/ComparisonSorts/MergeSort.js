//***MERGE SORT*** INTERMEDIATE LEVEL//
/* 1. Brings time complxitOies from O(n2), bubble/selection/insertion to => Merge Sort 0(n log n)
--------KEY. Time complexity is O(n log n); Space complexity is O(n)-----------------
   2. Tradeoff off between efficiency and simplicity
   3. Created 1948 johnathon vonnewman
   4. Its splitting up, merging, sorting
   5. D&C approach, divide/2 until single element arrays then merge them
   back together!.
   6. */
//MERGE two sorted arrays----------------------------------
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  //when the two array indexes are the same length
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  //if first array less than arr2
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  //if second array length less than arr1
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}
merge([1, 10, 50], [2, 14, 99, 100]);

//mergeSort a single array with recursion
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
mergeSort([10, 24, 76, 73]);
