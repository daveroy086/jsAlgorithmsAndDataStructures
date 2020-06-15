/*
Notes for exercise:

sortedFrequency

Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Time Complexity - O(log n)
*/


function sortedFrequency(arr,x){
    console.log(arr);
    console.log("arr.length is", arr.length);
    console.log("");
    //pseudocode:
    //remove the ints less then the target number using divdde and conquer to get rid of large blocks(while) then iteration to remove the last few
    if(x < arr[0] || arr[arr.length - 1] < x) {
        console.log("-1");
        console.log("");
        return -1;
    } else {
        let remainderArray = [];
    
        while(arr[arr.length - 1] > x) {    //remove a (hopefully large) subblock of smaller numbers
            let center = Math.floor(arr.length / 2);
            //take the right half and add it to remainderArray
            remainderArray = (arr.slice(center)).concat(remainderArray);
            //make leftArray equal to the left half of arr
            arr = arr.slice(0, center);
            console.log("remainderArray is ", remainderArray);
            console.log("remainderArray.length is ", remainderArray.length);
            console.log(arr);
            console.log("arr.length is ", arr.length);
            console.log("");
        } // end while
        //remove remaining smallerthan x numbers, one at a time
        while(arr[0] < x) {
            arr.splice(0, 1);
        }
    
        //now we should have an array of ints beginning with a block of x's
        arr = remainderArray;
        console.log("x\'s and larger is ", arr);
        remainderArray = [];
        console.log("arr.length is ", arr.length);
        //use the same divide-and-conquer/iteration
        //method to remove the larger-then-x numbers
        //from the right end of the array 
        center = Math.floor(arr.length / 2);
        while(arr[center] > x) {    //remove a (hopefully large) subblock of larger numbers
            //take the right half and add it to remainderArray
            //make leftArray equal to the left half of arr
            arr = arr.slice(0, center);
            console.log("remainderArray is ", remainderArray);
            console.log(arr);
            console.log("arr.length is ", arr.length);
            console.log("");
            center = Math.floor(arr.length / 2);
        }// end while
        //remove remaining smallerthan x numbers, one at a time
        while(arr[arr.length - 1] > x) {
            arr.splice(arr.length - 1);
            console.log(arr);
        }
        console.log(arr.length);
        console.log("");
         return arr.length; 
    }// end else
    //}
} // end sortedFrequency()

//Tests:
//sortedFrequency([1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,6,7,8,9,9,9,9],2); // 4 
sortedFrequency([1,1,2,2,2,2,3],3); // 1 
//sortedFrequency([1,1,2,2,2,2,3],1); // 2 
//sortedFrequency([1,1,2,2,2,2,3],4); // -1