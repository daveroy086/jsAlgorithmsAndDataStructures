class BinaryHeap {    // This is a Max binary heap
    constructor() {
        this.anArray = [];
    }

    swap(arr, a, b, c){
        if(arr[a] != undefined) { // when the heap gets too small the child could be out of bounds
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        } else {
             let temp = arr[c];
        arr[c] = arr[b];
        arr[b] = temp;
        }
    }

    insert(element){    // inserts an element
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
 
    remove() {
        this.swap(this.anArray, 0, this.anArray.length - 1, 1);
        let toReturn = this.anArray.pop();
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

let bh = new BinaryHeap();
let anotherArray = [1, 3, 5, 7, 9, 11, 13, 15, 14, 12, 10, 8, 6, 4, 2];
for(j = 0; j < 15; j++){
    bh.insert(anotherArray[0]);
    anotherArray.splice(0, 1);
    console.log("\n", bh);
}
for(i = 0; i < 15; i++){
    bh.remove();
    console.log("\n", bh);
}
/* his insert() code:
    hisInsert(element) {
    this.anArray.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.anArray.length - 1;
        const element = this.anArray[idx];
        while(idx > 0){
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.anArray[parentIdx];
        if(element <= parent) break;
        this.anArray[parentIdx] = element;
        this.anArray[idx] = parent;
        idx = parentIdx;
        }
    }
*/
