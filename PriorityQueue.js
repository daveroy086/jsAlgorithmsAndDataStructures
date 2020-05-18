class Node{
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;        
    }
}
class PriorityQueue {    // This is a Min Priority Queue
    constructor() {
        this.anArray = [];//{val: 'p', priority: 16} ];//41, 39, 33, 18, 27, 12];
    }

/*
// psuedocode:  
// Write a min binary heap
    // lower priority number means higher priority
    // each node has a val and a priority
    // Enqueue method accepts a val and a priority, makes a new node, and places it in the right spot
        // based upon it's priority
    // Dequeue method removes the root element, returns it , and rearranges the heap by priority

*/


    swap(arr, a, b, c){
        if(arr[a] != undefined) { // when the heap is too small the child could be out of bounds
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        } else {
             let temp = arr[c];
        arr[c] = arr[b];
        arr[b] = temp;
        }
    }

    insert(val, priority){    // inserts an element
        let newNode = new Node(val, priority);
        this.anArray.push(newNode);
        console.log('');
        console.log("inserting ", newNode);
        if(this.anArray.length > 1){   // adds element to priorityQueue
            let elementIndex = this.anArray.length - 1;  // gets the index of the new item
           // console.log("elementIndex is ", elementIndex);     
            let parentIndex = Math.floor((elementIndex - 1) / 2);    // gets the index of it's parent
           // console.log("parentIndex is ", parentIndex);
            let parentPriority = this.anArray[parentIndex].priority;
            //console.log("parentPriority is", parentPriority);
            let elementPriority = this.anArray[elementIndex].priority;
            //console.log("elementPriority is", elementPriority);
            while(parentPriority < elementPriority) {// if the parent value is less than the new element value 

                console.log('before the swap anArray is ', this.anArray)
                this.swap(this.anArray, parentIndex, elementIndex);    // swap them
                console.log("After the swap, anArray is ", this.anArray);
                    elementIndex = parentIndex; 
                //    console.log("The new elementIndex is ", elementIndex);   
                    parentIndex = Math.floor((elementIndex - 1) / 2);
                  //  console.log("the new ParentIndex is ", parentIndex);
                    if(elementIndex < 1 || parentIndex < 0) break;
                }   // end while
        } // end if
        return this.anArray;

    }    // end insert()
 
    remove() {
        this.swap(this.anArray, 0, this.anArray.length - 1, 1);
        let toReturn = this.anArray.pop();
        console.log("toReturn is ", toReturn);
        let parent = 0;    //the parent node index
        if(this.anArray[1]) {
            var left = 1;    // left child node index
        }
        if(this.anArray[2]) { 
            var right = 2;    // the right child node index
        }
        if(this.anArray.length > 2){ 
            while(
                  (this.anArray[parent] < this.anArray[left]) ||
                  (this.anArray[parent] < this.anArray[right])
                 ) {
                    if(
                       (this.anArray[left] >= this.anArray[parent]) &&
                       (this.anArray[left] >= this.anArray[right])
                      ) {
                         this.swap(this.anArray, left, parent, right);
                         parent = left;  
                        } else {
                            this.swap(this.anArray, right, parent, left);
                            parent = right;
                        }
                if((parent * 2) + 1) {
                    left = (2 * parent) + 1;
                }
                if((parent * 2) + 2) {
                    right = (2 * parent) + 2;
                }
            } // end while()
        }// end if
        return toReturn;
    }// end remove()
    
}    // end BinaryHeap()
 
let bh = new PriorityQueue();
/*
let anotherArray = [1, 3, 5, 7, 9, 11, 13, 15, 14, 12, 10, 8, 6, 4, 2];
for(j = 0; j < 15; j++){
    bh.insert(anotherArray[0]);
    anotherArray.splice(0, 1);
    console.log("\n", bh);
} 
*/
bh.insert('a', 1);
console.log("\n", bh);
bh.insert('b', 3);
console.log("\n", bh);
bh.insert('c', 5);
console.log("\n", bh);
bh.insert('d', 7);
console.log("\n", bh);
bh.insert('e', 9);
console.log("\n", bh);
bh.insert('f', 11);
console.log("\n", bh);
bh.insert('g', 13);
console.log("\n", bh);
bh.insert('h', 15);
console.log("\n", bh);
bh.insert('i', 14);
console.log("\n", bh);
bh.insert('j', 12);
console.log("\n", bh);
bh.insert('k', 10);
console.log("\n", bh);
bh.insert('l', 8);
console.log("\n", bh);
bh.insert('\m', 6);
console.log("\n", bh);
bh.insert('n', 4);
console.log("\n", bh);
bh.insert('o', 2);
console.log("\n", bh);/* 
for(i = 0; i < 15; i++){
    bh.remove();
    console.log("\n", bh);
} */