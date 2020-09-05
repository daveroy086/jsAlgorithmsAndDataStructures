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

    remove(val2) {
        // see the code and notes at the end of this file
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
bst1.breadthFirstSearch();
bst1.remove(1);
bst1.breadthFirstSearch();
console.log(bst1.root.left.left.value); // 5
console.log(bst1.root.left.left.left); // null
console.log(bst1.root.left.left.right); // null

/* 
// Remove a node that has one child to the right
console.log(bst1.remove(20));
console.log(bst1.root.right.value); // 50
console.log(bst1.root.right.right); // null
console.log(bst1.root.right.left); // null
 */
/*
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
bst.root.right.right.right.left.left.value // 89 */

/*
//pseudocode:
// use the code below as a starter
// find the node to be removed
    // i.e. use the find code to get to the pparent of the node to be removed
// write a function (actualRemover) to remove it
    // if it has no children ...simply remomve it
        // if you're in current equals parent of the node:
        //if curren.left is the node to be removed...
        if(!current.left.left && !current.left.right) current.left == null;    // if nneither exist remove current.left

    // if it has one child...replace the parent value with the childs value and delete the child
        if (current.left.left && !current.left.right){
            current.left.value = current.left.left.value;
            binarySearchTree.remove(current.left.left);
        if (current.left.right && !current.left.left) {
            current.right.value = current.left.right.value;
            binarySearchTree.remove(currnet.left.right);
        }

    // if it has two children the next largest value within the subtree beginning with the target node replaces the parent
    
//starter code:
check is this existing find code
 remove(val2) {
        // use this code to find the node you want to remove
        let current = this.root;
        let aNode = null;
        while(current) {
            if(current.value == val2) {
                aNode = root;
                root = null;
            if(val2 < current.value){
                if(current.left == null) return undefined;
                if(current.left.value == val2) {
                    aNode = actualRemover(what do i pass it???)
                } else {
                    current = current.left;
                }
            }    // end outer if
            if(current.value < val2){
                if(current.right == null) {
                    return undefined;
                }

                if(current.right.value == val2) {
                    if(current.right.left) {
                        current.right.left = null;
                        }
                    if(current.right.right) {
                        current.right.right = null;
                    }
                    let holdNodeValue = current.right;

                    current.right = null;
                    return holdNodeValue;
                } else {
                    current = current.right;
                }
            }    //end another outer if
        } // end while      
    }    // end remove*/


    /* 
    //from class test
    
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
        console.log("inserted val is", val1);
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

    remove(val2) {
        console.log("removed val is ", val2);
        // pseudocode:
        // use find  code to find the node you want to remove
        let current = this.root;
        while(current) {
//            console.log("current.value is ", current.value);
            // if root.value is value root = null
            if(current.value == val2) root = null;
            if(val2 < current.value){
  //              console.log("go left");
                //return undefined if val2 does not exist
                if(current.left == null) return undefined;
                if(current.left.value == val2) {
                    //need some code that checks for children and removes them
                    if(current.left.left) current.left.left = null;
                    if(current.left.right) current.left.right = null;
                    //then current = null;
                    current = null;
                } else {
                    current = current.left;
    //                console.log("changed current so current.value is ", current.value);
                }
            }    // end outer if
            if(current.value < val2){
      //          console.log("go right");
                if(current.right == null) {
        //            console.log("I shouldn\'t see this");
                    return undefined;
                }

                if(current.right.value == val2) {
          //          console.log("current.right is the final node", current.right);
                    if(current.right.left) {
            //            console.log("current.right.left is ", current.right.left);
                        current.right.left = null;
              //          console.log("current.right.left is ", current.right.left);
                        }
                    if(current.right.right) {
                //        console.log("current.right.right is ", current.right.left);
                        current.right.right = null;
                  //      console.log("current.right.right is ", current.right.left);
                    }
                    let holdNodeValue = current.right;
                    // was .value
                    //console.log("current.right is ", current.right);
                    current.right = null;
                    //console.log("current.right is ", current.right);
                    return holdNodeValue;
                } else {
                    current = current.right;
                    //console.log("changed current so current.value is ", current.value);
                }
            }    //end another outer if
        } // end while      
    }    // end remove

    breadthFirstSearch() {                
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

}    // end BinarySearchTree */