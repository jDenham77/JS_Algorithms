/**
 * BINARY SEARCH TREE (INSERT & SEARCH)
 * -A Data structure that consists of nodes in a parent/child relationship
 * -Branches which look like a tree upside down, starting at the ROOT
 * -*Non-Linear meaning theres many different paths you can take
 * -Linked list is linear meaning it goes in the same direction although
 * double linked lists can go in both directions.
 * -Node can only point from parent to child.
 * -TIME COMPLEXITY number of nodes double we increase the steps by 1. Ex 2,4,8,16,32
 * Insertion O(log n) VERY GOOD
 * Searching O(log n) VERY GOOD
 * O(log n) NOT ALWAYS because the BST can be completely one sided O(N), but you wouldnt
 * do that, you could reset the root to rebalance the tree.
 * Terminology-----------------------------------------------------------
 * 1. ROOT - top node of a tree.
 * 2. CHILD - node connected to another node when moving away from root.
 * 3. PARENT - a converse notion of a child.
 * 4. SIBLINGS- a group of nodes with the same parent.
 * 5. LEAF - a node with no children.
 * 6. EDGE - the connection between one node and another
 * -USES???? Different applications like HTML DOM, Network Routing, AI Decision Tree,
 * Folders modeled in an OS.
 * -Trees focused on are binary trees and BST.
 * -Binary Trees can have at most have 2 children. Sorted in an order
 * -BST used to store data that can be compared, that is sortable, you can compare them,
 * Tree with root n = 5, n < 5 left node : n > 5 right node
 * -BST compare and go till you find or dont find the value, you know it works bec it should be there.
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
  find(value) {
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
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
