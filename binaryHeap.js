function swap(anArray, a, b){
        let temp = anArray[a];
        anArray[a] = anArray[b];
        anArray[b] = temp;
    }
class BinaryHeap {    // This is a Max binary heap
    constructor() {
        this.anArray = [];
    }

    insert(element){
    // psuedocode for insert
    // push the value into the anArray property on the heap
    this.anArray.push(element);
    // Bubble up:
        // Create a variable called index which is the length of anArray property - 1
    let elementIndex = this.anArray.length - 1;
        // Keep looping as long as the anArray element at the parentIndex is less than the anArray element at the child index
    let parentIndex = Math.floor((elementIndex - 1) / 2);
    while(this.anArray[parentIndex] < this.anArray[elementIndex]) {
        //console.log("this.anArray is ", this.anArray);
        // Create a variable called parentIndex which is the floor of (index - 1)/2
        //let parentIndex = Math.floor((elementIndex - 1) / 2);
        // Swap the value of the anArray element at the parentIndex with the value of the element property at the childIndex
        let temp = this.anArray[parentIndex];
        this.anArray[parentIndex] = this.anArray[elementIndex];
        this.anArray[elementIndex] = temp;
        // Set the index to be the parentIndex, and start over!
        elementIndex = parentIndex;
        parentIndex = Math.floor((elementIndex - 1) / 2);
        //console.log(this.anArray);
        }    // end while
        //console.log(this.anArray);
        return this.anArray;
    }    // end insert()

    print(){
        for(let i = 0; i <this.anArray.length; i++) {
            console.log(this.anArray[i]);
        }
        console.log("");
    }
    
}    // end BinaryHeap()
//test on 10 random trees;;
for(j = 0; j < 10; j++) {
    let bh = new BinaryHeap();
    for(k = 0; k < 7; k++) {
    bh.insert(Math.floor(Math.random() * 100));
    }
    bh.print();
}
/* bh.insert(41);
bh.print();
bh.insert(39);
bh.print();
bh.insert(33);
bh.print();
bh.insert(18);
bh.print();
bh.insert(27);
bh.print();
bh.insert(12);
bh.print();
bh.insert(55);
bh.print();
 */// our existing heap[41, 39, 33, 18, 27, 12, 55];