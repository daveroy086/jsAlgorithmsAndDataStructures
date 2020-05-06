//psuedocode for insert
//push the value into the values property on the heap
// Bubble up:
    // Create a variable called index which is the length of values property - 1
    // Create a variable called parentIndexwhich is the floor of (index - 1)/2
    // Keep looping as long as the values element at he parentIndex is less than the values element at the child index
        // Swap the value of the values element at the parentIndex with the value of the element property at the childIndex
        // Set the index to be the parentIndex, andstart over!
