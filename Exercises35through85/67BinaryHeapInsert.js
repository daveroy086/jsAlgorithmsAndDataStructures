class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(element){    // inserts an element
        // replace all 'anArray' with 'values' to pass class test
       this.anArray.push(element);
       let elementIndex = this.anArray.length - 1;
       let parentIndex = Math.floor((elementIndex - 1) / 2);
       while(this.anArray[parentIndex] < this.anArray[elementIndex]) {
           let temp = this.anArray[parentIndex];
           this.anArray[parentIndex] = this.anArray[elementIndex];
           this.anArray[elementIndex] = temp;
           elementIndex = parentIndex;
           parentIndex = Math.floor((elementIndex - 1) / 2);
           }   // end while
           return this.anArray;
    }    // end insert()
        
}    // end MaxBinaryHeap

/*
// Instructions:
Implement the following functions on the maxBinaryHeap class

Implement the `insert` function on the `MaxBinaryHeap.prototype`: This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.
*/

/*
// Test
    binaryHeap = new MaxBinaryHeap()
    binaryHeap.insert(1)
    binaryHeap.values[0] // 1
     
    binaryHeap.insert(2)
    binaryHeap.values[0] // 2
     
    binaryHeap.values // [2, 1]
     
    binaryHeap.insert(3)
    binaryHeap.values[0] // 3
     
    binaryHeap.values // [3, 1, 2]
     
    binaryHeap.insert(4)
    binaryHeap.values[0] // 4
     
    binaryHeap.values // [4, 3, 2, 1]
     
    binaryHeap.insert(5)
    binaryHeap.values[0] // 5
     
    binaryHeap.values // [5, 4, 2, 1, 3]
     
    binaryHeap.insert(6)
    binaryHeap.values[0] // 6
     
    binaryHeap.values // [6, 4, 5, 1, 3, 2]
    */