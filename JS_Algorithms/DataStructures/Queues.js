/**
QUEUE (FIFO)
-EX. Waiting in line, waiting to be added to a game, downloading files, print queue.
-Could use an array but removing from the beginning causes reindexing (O(n) not O(1)
*- For an ARRAY; May use unshift/pop || push/shift
- Want to use your own class to make it perform O(N), IF you're worried about PERFORMANCE
because it ALWAYS has to reindex.
- Used to MAINTAIN ORDER, think of the print queue example

*/

// Enqueue - Added to the end (push)
// Dequeue - Removing from beginning (shift)
//When creating a linked list then you are making the Queue O(1) or constint time\
/**
 * -Insertion O(1)
 * -Removal O(1)
 * -Searching O(N)
 * -Access O(N)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  Enqueue(val) {
    //Adds to end (push)
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  Dequeue() {
    //Removes from beginning (shift)
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
