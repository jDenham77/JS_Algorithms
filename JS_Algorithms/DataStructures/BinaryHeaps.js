/**
 * -----BINARY HEAPS-----
 * Similar to a binary tree but different rules. At most two children. There's NO
 *  order to the left and right, no relationship, except that they are either smaller
 *  or bigger nodes in heap.
 * - MaxBinaryHeap: Parent nodes are LARGER than child nodes (P > C) NO GUARANTEES between
 * siblings. Least amount of space as possible. Left children filled out first. Ex. Highest node
 * on the top(100)
 * - MinBinaryHeap: Parent nodes are SMALLER than child nodes (P > C). NO GUARANTEE between
 * siblings. Least amount of space. Ex. Smallest node on the top(1)
 * - Time Complexity:
 * 1. Insertion = O(log N)
 * 2. Removal = O(log N)
 * 3. Search = O(N)
 * - USED FOR: Priority Queue and assign a priority level to the items in there. Also,
 * graph traversal algorithms.
 * - FIND LEFT CHILD = 2N + 1
 * - FIND RIGHT CHILD = 2N + 2
 * - FIND PARENT = Math.floor((N-1)/2))
 */

//MAX BINARY HEAP
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  //ADD || INSERT MBH 1. Add to the end of [] 2. Bubble it up!
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.value[idx] = parent;
      idx = parentIdx;
    }
  }
  //REMOVING FROM HEAPS - Usually remove from the root. ExtractMax or ExtractMin
  // - Remove the root then put the current last value there. It's called cascade down,
  // sink down, bubbleDown, heapify-down, extract-min/max
  // - Remove the root node then bubbleDown to the end of the heap until the correct
  // position is reached. Do this by finding the higher number below the heap branches
  // and swap it until position is reached.

  //ExtractMax remove the root...
  extractMax() {
    //remove first element and replace with last element
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  //BubbleDown
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      //make sure L and R are not out of bounds
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
//   0  1  2  3  4  5  6
// [55,39,41,18,27,12,33]

