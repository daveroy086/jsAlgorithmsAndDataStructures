/* function same(arr1, arr2) {    // nested loops
    
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] ** 2 == arr2[j]) {
                arr2.splice(j, 1);
                break;
            }
        }    // end for j
    }    // end for i

    return arr2.length == 0 ? true : false;

}    // end same 
*/

function same(arr1, arr2) {    // consecutive loops
    // his code from class

}    // end same

console.log(same([1, 2, 3], [1, 9, 4]));    // true
console.log(same([1, 2, 3], [1, 4, 25]));    // false
console.log(same([1, 2, 3, 4], [1, 4, 15, 16]));    // false

/** originally contained this test:
 * if(arr1.length !== arr2.length) {
 *     return false;
 *  }
 **/