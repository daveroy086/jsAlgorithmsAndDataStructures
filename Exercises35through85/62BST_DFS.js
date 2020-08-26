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
    }  // end insert

    depthFirstSearchPreOrder() {    /*get my code from postorderDFSCopy.js and run the tests below */
                      
        let output = [];
        function helper(node) {
            output.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        } // end helper()
        helper(this.root);

        return output;
    }  // end preOrder

    depthFirstSearchInOrder() {
        let output = [];
        function helper(node) {
            if(node.left) helper(node.left);
            output.push(node.value);
            if(node.right) helper(node.right);
        } // end helper()
        helper(this.root);
        return output;      
    }    // end depthFirstSearchInOrder

    depthFirstSearchPostOrder() {
        let output = [];
        function helper(node) {
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            output.push(node.value);
        } // end helper()
        helper(this.root);
        // console.log(output);
        return output;
    }   // end depthFirstSearchPostOrder
} // end binarySearchTree

/* Instructions 1 of 3
Implement the following functions on the BinarySearchTree.prototype. insert has been implemented for you to help with testing.

DFSPreOrder

This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.
 */
/* 
// Test for PreOrder: 
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    console.log(binarySearchTree.depthFirstSearchPreOrder()); // [15, 10, 1, 5, 12, 20, 50]
  */

/*2 of 3
DFSInOrder

This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.
 */

/* 
// Test for InOrder
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    console.log(binarySearchTree.depthFirstSearchInOrder()); // [1, 5, 10, 12, 15, 20, 50]
 */


/*3 of 3
DFSPostOrder

This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.
*/

/* 
// Test for PostOrder
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree
        .insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50);
    console.log(binarySearchTree.depthFirstSearchPostOrder()); // [5, 1, 12, 10, 50, 20, 15]
*/

/*
the code that passes the grader:
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
    }  // end insert

    DFSPreOrder() {
                      
        let output = [];
        function helper(node) {
            output.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        } // end helper()
        helper(this.root);

        return output;
    }  // end preOrder

    DFSInOrder() {
        let output = [];
        function helper(node) {
            if(node.left) helper(node.left);
            output.push(node.value);
            if(node.right) helper(node.right);
        } // end helper()
        helper(this.root);
        return output;      
    }    // end depthFirstSearchInOrder

    DFSPostOrder() {
        let output = [];
        function helper(node) {
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            output.push(node.value);
        } // end helper()
        helper(this.root);
        // console.log(output);
        return output;
    }   // end depthFirstSearchPostOrder
} // end binarySearchTree
*/

/*
What the starter code CS gave ends with:

  depthFirstSearchPreOrder() {
      
  }
  depthFirstSearchInOrder() {
      
  }
  depthFirstSearchPostOrder() {
      
  }
}

what the starter code needs to be to pass the grader:

    DFSPreOrder() {

    }

    DFSInOrder() {

    }

    DFSPostOrder() {

    }
} // end binarySearchTree
*/