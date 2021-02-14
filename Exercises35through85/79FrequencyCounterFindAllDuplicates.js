function findAllDuplicates(arr){

        let freqCount = {};
        let returnArray = [];
    
        for(let val of arr) {
            freqCount[val] = (freqCount[val] || 0) + 1;
        }

        for(let key in freqCount) {
            if(freqCount[key] > 1) {
                returnArray.push(parseInt(key));
            }
        }
        return returnArray;
}    // end findAllDuplicates

// Instructions:
/* 
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.
Time Complexity - O(n)
 */

// Tests:
console.log(findAllDuplicates([4,3,2,7,8,2,3,1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1