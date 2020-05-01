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
        let newNode = new Node(value);
        if(this.root === null) {    // If no root yet
            this.root = newNode;
            return this;
        } else {    // If there is a root
            let current = this.root;
            while(true){    // Check value of newNode vs root
                if(value < current.value){    // If it's less
                    if(current.left != null){    // If current has left node
                        current = current.left;    // ...node move to that node              
                    } else {
                        current.left = newNode;    // else add newNode as the left property
                        return this;                            
                    }
                }

                if(value > current.value) {    //If it is greater:
                    if(current.right != null) {
                        current = current.right;
                    } else {
                        current.right = newNode;
                        return this;
                    }
                }

                if(value == current.value) {    // if tree has value
                    return undefined;
                }

            } //end while
        }//end if(this.root...
         return this;
    }//end insert()

    includes(value1) {
        if(this.root == null) {
           return false;
        } else {
            let current = this.root;
            while(current){

                if(current.value == value1) return true;

                if(value1 < current.value){
                    if(current.left == null) return false;
                    if(current.left.value == value1) {
                        return true;
                    } else {
                        current = current.left;
                    }
                }

                if(current.value < value1){
                    if(current.right == null) return false;
                    if(current.right.value == value1) {
                        return true;
                    } else {
                        current = current.right;
                    }
                }

            } // end while
        } // end else
    }    // ends includes    
}//end BinarySearchTree
            

let t = new BinarySearchTree();

//let anArray = [8, 4, 12, 6, 10, 14, 5, 7, 9, 11, 13, 15];//minus 1, 2, 3
//let anArray = [8, 4, 12, 2, 10, 14, 1, 3, 9, 11, 13, 15];//minus 5, 6, 7
//let anArray = [8, 4, 12, 2, 6, 14, 1, 3, 5, 7, 13, 15];// minus 9, 10, 11
//let anArray = [8, 4, 12, 2, 6, 10, 1, 3, 5, 7, 9, 11];// minus 13, 14, 15
//let anArray = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];
//let anArray = [8, 4, 12, 2, 6, 10, 14, 3, 5, 7, 9, 11, 13];
//let anArray = [8, 4, 12, 2, 6, 10, 14, 1, 3, 7, 9, 13, 15];
//let anArray = [8, 4, 12, 2, 6, 10, 14, 1, 5, 7, 11, 13, 15];
let len = anArray.length;
for(j = 0; j < len; j++) {
    t.insert(anArray[j]);
}

console.log(t);

for(i = 0; i < 17; i++) {
    console.log(' i is ', i);
    if(t.includes(i)) {
        console.log('t includes ', i);
    } else {
        console.log('t doesn\'t include ', i);
    }
}

/* 
console.log('The tree is empty');
console.log(t.includes(2));

t.insert(2);
console.log('I inserted a 2.');
console.log('Test for 2 is', t.includes(2));
t.insert(1);
t.insert(3);
console.log('I inserted a 1 and a 3');
console.log('Test for 1 is', t.includes(1));
console.log('Test for 3 is', t.includes(3));
console.log('Test for 4 is', t.includes(4));
*/
/* t.insert(4);
t.insert(2);
t.insert(6);
t.insert(1);
t.insert(3);
t.insert(5);
t.insert(7);
console.log(t.root);
for(i = 0; i < 11; i++) {
    console.log(' i is ', i);
    if(t.includes(i)) {
        console.log('t includes ', i);
    } else {
        console.log('t doesn\'t include ', i);
    }
}
 */

/*
CS's code:
contains(value) {
    if(this.root == null return false;
    var current = this.root,
    found = false;
    while(current && !found) {
        if(value < current.value) {
            current = current.left;
        } else if(value > current.value) {
            current = current.right;
        } else {
            found = true;
        }
        if(!found) return undefined;
        return current;
    }
}
*/