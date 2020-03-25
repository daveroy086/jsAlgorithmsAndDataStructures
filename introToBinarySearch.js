function introToBinarySearch(sortedArray, value){

    Pseudocode from class:
      This function accepts a sorted array and a value
      Create a left pointer at the start of the array, and
        a right pointer at the end of the array
      While the left pointer comes before the right pointer:
        Create a pointer in the middle
        If you find the value you want, return it's index
        If the value is to small, move the left pointer up
        If the value is too large, move the right pointer down
      If you never find the value, return -1
}

console.log(introToBinarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(introToBinarySearch([1, 2, 3, 4, 5], 3)); //2
console.log(introToBinarySearch([1, 2, 3, 4, 5], 5)); //4
console.log(introToBinarySearch([1, 2, 3, 4, 5], 6)); //-1
console.log(introToBinarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); //2

console.log(introToBinarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); //16

console.log(introToBinarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); //-1
