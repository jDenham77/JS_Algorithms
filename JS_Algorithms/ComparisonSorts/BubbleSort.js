//*** BUBBLESORT (SINKING SORT) - sorting to smallest to largest. Compares the
// two elements next to each other Bigger number bubbles to the top.
/* 

*/
//sorting an array and swapping positions with bubblesort
//****noSwaps helps out with nearly sorted arrays 
function bubbleSort(arr) {
    var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

//naive bubblesort
bubbleSort = arr => {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]; // 7
        arr[j] = arr[j + 1]; //7 = 3
        arr[j + 1] = temp; // = 7
      }
    }
  }
  return arr;
};
bubbleSort([7, 3, 8, 9]);
