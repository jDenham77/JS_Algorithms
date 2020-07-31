/**
 * STACKS (LIFO) - Collection of data and it needs to abide to ***LIFO. When you stack
 * plates you then wash then from the top down.
 * -(KEEP O(1)) in a stack this is better than an array O(N)
 * -Insertion = O(1)
 * -Removal = O(1)
 * -Searching = O(N)
 * -Access = O(N)
 * 
 * - Use them for managing functions, Use Undo/Redo for things
 * like routing in React.
 * -Not built into JS
 */

//How to implement a stack? Many ways
//LIFO!! shift/unshift    push/pop*** prefered bec you dont reindex each item. If you use 
// an array you will be having to reindex it each time so it's not constint. YOu
//can use the shift and unshift methods in SLL and rename them to push pop though.

//Stack class with a singly linked list...
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    //add to the beginning of a stack
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //remove from the front of the stack
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      return null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
