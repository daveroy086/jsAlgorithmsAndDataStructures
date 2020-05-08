class BinaryHeap {    // This is a Max binary heap
    constructor() {
        this.anArray = [];
    }

    swap(arr, a, b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
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

        this.swap(this.anArray, 0, this.anArray.length - 1);
        let toReturn = this.anArray.pop();
        let parent = 0;    //the parent node index
        if(this.anArray[1]) {
            var left = 1;    // left child node index
        }

        if(this.anArray[2]) { 
            var right = 2;    // the right child node index
        }

        while((this.anArray[parent] < this.anArray[left]) ||
                  (this.anArray[parent] < this.anArray[right])) {
            if((parent * 2) + 1) {
                left = (2 * parent) + 1;
            }

            if((parent * 2) + 1) {
                right = (2 * parent) + 2;
            }

            if((this.anArray[left] > this.anArray[parent]) &&
                    (this.anArray[left] > this.anArray[right])) {
                        this.swap(this.anArray, left, parent);
                        parent = left;                          
            }

            if((this.anArray[right] > this.anArray[parent]) &&
                    (this.anArray[right] > this.anArray[left])) {
                        this.swap(this.anArray, right, parent);
                        parent = right;
            }
        } // end while()
        return toReturn;
    }// end remove()
    
}    // end BinaryHeap()

let bh = new BinaryHeap();
bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(12);
bh.insert(55);
console.log(bh);
bh.remove();
console.log(bh);