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
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  breadthFirstSearch() {
      // inserted existing code from jsAlgorithmsAndDataStructures\breadthFirstSearch.js
                
        let aQueue = [];
        let output = [];
        
        aQueue.push(this.root);
        
        while(aQueue.length != 0) {
        
           let aNode = aQueue.shift();
           output.push(aNode.value);
           if(aNode.left != null) aQueue.push(aNode.left);
           if(aNode.right != null) aQueue.push(aNode.right);
        } // end while
        return output;
    }   //end breadthFirstSearch
      
}

/*Instructions:
Implement the following function on the BinarySearchTree.prototype. insert is implemented to help with testing.

This function should search through each node in the binary search tree using breadth first search and return an array containing each node's value.
*/

/*
// Test:
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    console.log(binarySearchTree.breadthFirstSearch()); // [(15, 10, 20, 1, 12, 50, 5)];
*/