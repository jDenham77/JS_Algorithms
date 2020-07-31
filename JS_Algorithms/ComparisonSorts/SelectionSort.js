//SELECTION SORT
// start a beginning 2 and compare bigger smaller, then go to next element
// and see if its bigger or smaller until end of array. Once completed it
//pushes the new value to the beginning of the array. sorts array with lowest value to beginning
//index, then increasing
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    //SWAP
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
selectionSort([23, 33, 43, 21, 2, 6, 48]);
