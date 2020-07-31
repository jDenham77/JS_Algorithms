//INSERTION SORT builds the biggest element one at a time and putting
//it in the correct index. starts with biggest to smalest
//Worst O(n^2) 

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
insertionSort([2,1,9,76,41])

