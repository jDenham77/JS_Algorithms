/** RADIX SORT (special case to allow sorting faster than other comparison sorts)
 * Take a list of numbers and create buckets which represent 1-10 then we look at
 * each first degit from the right side and group them into buckets depending on last number.
 * This gets repreated again... We then continje this until the numbers are sorted. It completes
 * when the longest array is done getting iterated over.
 * BIG O - Time complexity best,average,worst = O(nk); space complexity = O(n + k)
 */
//3 helper Methods needed for the RADIX sort

//getDigit, helper method,  need to be able to look at and get the actual value of the last digit
//then move right to left on each digit
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//counts the number of digits.
digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1; //log10, 10 to what power gives us(423) = 2.6 so 2 + 1 = 3.
};

//list of nums and tells us which numbers has the most digits in it
mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); //10 empty buckets
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};
