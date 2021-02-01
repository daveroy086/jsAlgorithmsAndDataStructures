class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val1) {
        if (this.root === null) {
            this.root = new Node(val1);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (val1 < current.value) {
                    if (current.left === null) {
                        current.left = new Node(val1);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val1 > current.value) {
                    if (current.right === null) {
                        current.right = new Node(val1);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }  // end while
        }
    }  // end insert

    // Implement the remove function on the BinarySearchTree.prototype.
    //  Insert is implemented to help with testing.
    // This function should remove a node from a binary search tree.
    // Your remove function should be able to handle removal of the root node,
    //  removal of a node with one child and removal of a node with two children.
    // The function should return the node removed.

    remove(val2) {

        let returnThisNode = null;

        // if the tree has no nodes
        if(this.root == null)  return 'This tree has no nodes';

        // if the tree has a root and it's value is val2
        if(this.root.value == val2) {
            // if the root has no children
            if(this.root.left == null && this.root.right == null) {            
                returnThisNode = this.root;
                function printNode(){    /* put returnThisNode in this function so it don't
                                            change when I change*/
                    returnMe = returnThisNode;
                    return returnMe;
                }
                this.root.value = null;
                return printNode();
            }

            // if the root has one child            
            if(this.root.left == null && this.root.right != null)  {
                returnThisNode = this.root;
                this.root = this.root.right;
                return returnThisNode;
            }

            if(this.root.left != null && this.root.right == null)  {
                returnThisNode = this.root;
                this.root = this.root.left;
                return returnThisNode;
            }

            // if the root has two children
            


        // search the descendents
        var current = this.root;
        while(true) {
            if(val2 < current.value) {
                if(current.left.value == val2) {
                    returnThisNode = current.left.value;
                    current.left.value = null;
                    return returnThisNode;
                } else {
                    current = current.left;
                }
                                }
                current = current.left;
            } else {
                current = current.right;
            }
        }    // end while
    

    }    // end remove

    breadthFirstSearch() {                
    let aQueue = [];
    let output = [];        
    aQueue.push(this.root);
    while(aQueue.length != 0) {
        let aNode = aQueue.shift();
        console.log(aNode);
        output.push(aNode.value);
        if(aNode.left != null) aQueue.push(aNode.left);
        if(aNode.right != null) aQueue.push(aNode.right);
    } // end while
    return output;
    }   //end breadthFirstSearch

}    // end BinarySearchTree

// Tests:
/* 
//Try to remove a node from a tree that has no nodes
var bst = new BinarySearchTree();
console.log(bst.remove(69));
 */
/* 
// Removes a node with no children...works
var bst = new BinarySearchTree();
bst.insert(15);
bst.insert(20);
bst.insert(10);
bst.insert(12);
bst.insert(1);
bst.insert(5);
bst.insert(50);

console.log(bst.breadthFirstSearch());
bst.remove(50);
console.log(bst.breadthFirstSearch());

console.log(bst.root.right.value); // 20
console.log(bst.root.right.right); // null  

bst.remove(5);
console.log(bst.root.left.left.value); // 1
console.log(bst.root.left.left.right); // null
 */


// Remove a node that has one child
var bst1 = new BinarySearchTree();
bst1.insert(15);
bst1.insert(20);
bst1.insert(10);
bst1.insert(12);
bst1.insert(1);
bst1.insert(5);
bst1.insert(50);

// remove a node that has one child to the left
//bst1.breadthFirstSearch();
bst1.remove(1);
//bst1.breadthFirstSearch();
console.log(bst1.root.left.left.value); // 5
console.log(bst1.root.left.left.left); // null
console.log(bst1.root.left.left.right); // null

// Remove a node that has one child to the right
console.log(bst1.remove(20));
console.log(bst1.root.right.value); // 50
console.log(bst1.root.right.right); // null
console.log(bst1.root.right.left); // null


/*
// remove a node that has two children
var bst = new BinarySearchTree();
bst.insert(15);
bst.insert(20);
bst.insert(10);
bst.insert(12);
bst.insert(1);
bst.insert(5);
bst.insert(50);
bst.insert(60);
bst.insert(30);
bst.insert(25);
bst.insert(23);
bst.insert(24);
bst.insert(70);

bst.remove(10);
bst.root.left.value // 12
bst.root.left.left.value // 1
bst.root.left.left.right.value // 5
    
bst.remove(50);
bst.root.right.value // 20
bst.root.right.right.value // 60
bst.root.right.right.left.value // 30
    
// remove a node that has two children

var bst = new BinarySearchTree();
bst.insert(22);
bst.insert(49);
bst.insert(85);
bst.insert(66);
bst.insert(95);
bst.insert(90);
bst.insert(100);
bst.insert(88);
bst.insert(93);
bst.insert(89);
    
bst.remove(85);
bst.root.right.right.value // 88
bst.root.right.right.right.left.left.value // 89
*/