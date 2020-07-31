/** QUICKSORT **
 * Similar to the merge sort but different because it sorts the left side
 * then sorts the right side. Again, we use recursion.
 */

 //chooses a pivotpoint then everything LESS is on the left and everything GREATER than arr[start] is on the right. return index 
 //of the pivot point
function pivotPoint(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotPoint(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
