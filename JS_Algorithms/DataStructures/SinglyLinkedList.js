/**
 * SINGLY LINKED LISTS
 * VISUAL EXAMPLE: visualgo.net
 * -Data structure that contains a HEAD, TAIL, & LENGTH
 * -Linked lists consist of nodes, and each node has a value and a
 * pointer to another node or null.
 * -Only keep track of the head and tail not the info in between.
 * -Linked list is a node which points to another one. Like dominos stacked up
 * ready to be knocked over
 * -Lists we have a head & tail which we move from one node to the next. Lists dont have indexes. SO we can't just
 * request index 10 and get it. We would need to move over 10 nodes. BUT It works extremely
 * well with INSERT & DELETE
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // adds to the end of the list
    //Accepts val and creates a new node
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //removes the value from the end of the list
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    //removes a node from the beginning of the linked list.
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift() {
    // Adding a new node to the beginning of the linked list.
    var newNode = new Node(val);
    if (!this.head) {
      //if it's empty
      this.head = newNode;
      this.tail = this.head;
    } else {
      //runs if there's at least one thing.
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    //Retrieves a node by it's position in the linked list
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    //change the value of a node (update) based on it's position in the linked list.
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    //adding a node to the linked list at a specific position.
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); //coherse it to boolean; !!
    if (index === 0) return !!this.unshift(val);
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    // removes a node from a linked list at a specific location.
    if (index < 0 || index >= index.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  //Common interview question
  reverse(){ //reverse the linked list IN place (no copies or duplicates)!
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i = 0; i < this.length; i++){
        next = node.next;
        next.node = prev;
        prev = node;
        node = next;
    }
    return this;
  }
  print(){
      var arr =[];
      var current = this.head;
      while(current){
          arr.push(current.val)
          current = current.next
      }
  }
}
//valle@chapman.edu

// var first = new Node("Hi");
// first.next = new Node("Hey");
// first.next.next = new Node("Hello");
// first.next.next.next = new Node("How");
// first.next.next.next.next = new Node("Are You?");

var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
