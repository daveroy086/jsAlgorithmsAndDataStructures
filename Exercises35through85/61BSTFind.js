//exercise 61
//BinarySearchTree - find

/*Instructions:
Implement the following functions on the `BinarySearchTree.prototype`. insert has been implemented for you to help with testing.

findIteratively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using iteration or recursion. The tests for this method assume that insertIteratively has been implemented correctly.
*/

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
      console.log("Am I here?");
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

    find(value1) {
        if(this.root == null) {
           return false;
        } else {
            let current = this.root;
            while(current){

                if(current.value == value1) return current;

                if(value1 < current.value){
                    if(current.left == null) return undefined;
                    if(current.left.value == value1) {
                        return current;
                    } else {
                        current = current.left;
                    }
                }

                if(current.value < value1){
                    if(current.right == null) return undefined;
                    if(current.right.value == value1) {
                        return current;
                    } else {
                        current = current.right;
                    }
                }

            } // end while
        } // end else
    }    // end find   
}

//tests:
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
var foundNode = binarySearchTree.find(20);
console.log(foundNode.value); // 20
console.log(foundNode.left); // null
console.log(foundNode.right); // null
    
var binarySearchTree = new BinarySearchTree();
    
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
var foundNode = binarySearchTree.find(120);
foundNode // undefined