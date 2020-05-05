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
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value == current.value) return undefined;

                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;                            
                    } else {
                        current = current.left;              
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;                        
                    }
                }

            } //end while
        }//end if-else
            return this;
    }//end insert()

    includes(value1) {   // Check this vs his
        if(this.root == null) return false;
        var current = this.root;
        let found = false;
        while(current && !found) {
            if(value1 < current.value) {
                current = current.left;
                //console.log(current);
            } else if(value1 > current.value) {
                current = current.right;
                //console.log(current);
            } else {
                found = true;
            }
            if(!found) return undefined;
        }
        return current;
    }    // ends includes 

    preorderDepthFirstSearch(){
                
        let output = [];
        function helper(node) {
            output.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        } // end helper()
        helper(this.root);
        // console.log(output);
        return output;
    }   
}//end BinarySearchTree
            

let t = new BinarySearchTree();
t.insert(10);
t.insert(6);
t.insert(15);
t.insert(3);
t.insert(8);
t.insert(20);

//this tree is:
//        10
//    12      15
//  11  13      20
/* 
let anArray = [8, 4, 12, 2, 6, 10];//, 14, 1, 3, 5, 7, 9, 11, 13, 15];
let len = anArray.length;
for(j = 0; j < len; j++) {
    t.insert(anArray[j]);
}
*/
console.log(t.preorderDepthFirstSearch());
console.log(t);
console.log(t.root.left);
console.log(t.root.right);
