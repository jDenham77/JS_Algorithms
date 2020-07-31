//O(2^n) TIME COMPLEXITY; TERRIBLE BUT POSSIBLE SOLUTION
fib = (n) => {
  if (fib <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//DYNAMIC PROGRAMMING, STORE THE OLD VALUES TO MAKE THE PAST KNOWLEDGE
// TO MAKE SOLVING A FUTURE PROBLEM EASIER! We can solve the problem one time
// with MEMOIZATION (structure to store data)
function fib(n, memo = []) {
  //memo is where we store the answer. Ex if we find the 10th number then
  //we retrieve it from the 10th index of memo[].
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 1, memo);
  memo[n] = res;
  return res;
}
//O(n)

//TABULIZATION use a loop and start at the bottom then store in a table (array) then
// calculate until you reach the number or solution. BOTTOM UP APPROACH
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
//doesnt take as much space so you wont get a stack overflow
//TIME COMPLEXITY O(N)

