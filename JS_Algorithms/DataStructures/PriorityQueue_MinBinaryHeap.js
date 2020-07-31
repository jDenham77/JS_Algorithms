/** PRIORITY QUEUE - MIN BINARY HEAP (LIKE AN ER of who sees the DR. first.)
 * Data structure where each element has a priority. Elements with higher priority are
 *  served before elemets with lower priority. Seperate from heaps, an abstract concept,
 *  you can use PQ with an array or a list.
 * - Time Complexity:
 * 1. Insertion = O(log N)
 * 2. Removal = O(log N)
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  //ADD || INSERT MBH 1. Add to the end of [] 2. Bubble it up!
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break; // < ->
      this.values[parentIdx] = element;
      this.value[idx] = parent;
      idx = parentIdx;
    }
  }
  //REMOVE ROOT
  dequeue() {
    //remove first element and replace with last element
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
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
        if (leftChild.priority < element.priority) {
          // > - <
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
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
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("scratch", 3);
