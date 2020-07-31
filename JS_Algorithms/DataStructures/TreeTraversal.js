/**
 * TREE TRAVERSAL
 * - How do you search each node to find a value. It uses a good amount
 *  of recursion to accomplish it.
 * - Breadth-first Search(BFS; FIFO): Start at beginning then work across the tree. Top down;
 *  left to right or horizontal approach.
 * - Depth-first Search(DFS): Start at bottom first. DFS has different approaches to visit
 *  each and every node, which will give you the order that it is visited in. Basically, a
 *  bottom to top approach.
 * CREATE A BFS: -----------------------------------------------------------------------------
 * 1. Create a QUEUE
 * 2. Place a ROOT node in the queue
 * 3. Loop if anything is in the queue
 *      - Dequeue a node from the queue & push the value of the node into the variable that
 *         stores the nodes.
 *      - IF left property on node dequeued- add to queue
 *      - IF right property on node dequeued- add to queue
 * 4. Return the variable that stores the values
 * WHEN TO USE???
 * - Time complexity is the same. ***Space complexity depends on structure, wide = DFS, deep = BFS
 * - Trees are non-linear, contains child nodes, single root
 * - Binary Trees can have values of any type, but at most, each node can have 2 children
 * - BST used for ordered or sorted data! Node to the left is lower & right is higher
 * - *** We can search or traverse trees with BFS & DFS (Pre-order, Post-order, & In-order)
 */

//SKELETON
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //INSERTING
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      //left side
      var current = this.root;
      while (true) {
        //this works for duplicates but you could add mutltiples together.
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  //FIND OR SEARCH similar to inserting, log2 time.
  fins(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  //Returns true or false if the value is contained in a tree
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //BFS Breadth-first Search.
  BFS() {
    var data = [];
    queue = [];
    node = this.root;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  //DFS Depth-first Search (3 ORDERS). Visit vertically down before visiting sibling nodes.
  // We work all the way down then go up.
  /** DFS PRE-ORDER
   * 1. Create a varible to store values of nodes visited
   * 2. Store the root of the BST in a variable called current
   * 3. Helper function that accepts a node
   *     - Push value of node to the variable that stores values
   *     - IF left node has left property, call the helper function WITH the
   *        left property on the node.
   *     - IF right node has right property, call the helper function WITH the
   *        right property on the node.
   * 4. Invoke the helper function with the current variable
   * 5. Return the array of values.
   */
  DFSPreOrder() {
    //Good to store or flatten file bec it's given in anorder to reconstruct it.
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  //DFS POST-ORDER - Very similar DFS PreOrder but you change
  // -Bottom to top; left node to right node
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    //lowest to highest
    var data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.DFSPreOrder();
tree.DFSPostOrder();
