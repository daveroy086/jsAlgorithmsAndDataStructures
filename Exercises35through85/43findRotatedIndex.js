//Coding Exercise 43: Divide and Conuer - findRotatedIndex

/* Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.
Constraints:
Time Complexity - O(log n)
Space Complexity - O(1)
*/
//this is the solution
//I edited and simplified Kenj's solution from the comments

function findRotatedIndex(arr,int){

    let beginning = 0;
    let midPoint = Math.floor(arr.length/2);
    let end = arr.length - 1;
    if (int >= arr[0]){
        while (beginning <= midPoint){
            if (int === arr[midPoint]) return midPoint;
            else midPoint--;
        }
    }else{
        end = arr.length-1;
        while (end  >= midPoint){
            if (int === arr[midPoint]) return midPoint;
            else midPoint++;
        }
    }
    return -1;
}

console.log(findRotatedIndex([3,4,1,2],4)); // 1...is in right half
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2...is in right half
// test cases should have an int that would be in the left half,
console.log(findRotatedIndex([37,44,66,102,10,22],38)); // -1
// in the right half,
console.log(findRotatedIndex([37,44,66,102,10,22],21)); // -1
// at the left end
console.log(findRotatedIndex([37,44,66,102,10,22],36)); // -1
// and at the right end
console.log(findRotatedIndex([37,44,66,102,10,22],23)); // -1
console.log(findRotatedIndex([37,44,66,102,10,22],37)); // 0
// is at the left of the dicontinuity
console.log(findRotatedIndex([37,44,66,102,10,22],102)); // 3
// is at the right of the discontinuity
console.log(findRotatedIndex([37,44,66,102,10,22],23)); // -1

console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)); // 5



/* the code above was fast enough for the grader with the small test arrays
but it only uses divide and conquer for find the midpoint at the beginning
then it uses iteration across half the array.
My solution (below), uses divide and conquer thrughtout and might scale better
i.e. be faster on larger (real) arrays.
*/

/* I could create a function divideAndConquerSearch
call it to find the midpoint
call it to search for the int to the left
call it to serch for the int to the right
I'd need to pass it the beginning, end and while conditional???
*/

/*
//this is my original working solution...
    // the grader says it ran too long

function findRotatedIndex(arr, int) {
    //pseudocode:
    //use divide and conquer to find the discontinuity...is this really necessary???
    //it's at the first number less than arr[0]
     let D = Infinity;
    let beginning = 0;
    let end = arr.length - 1;
    let midpoint = Math.floor(arr.length / 2); 
    let foundD = false;
    while(!foundD) {
        if(arr[midpoint] > arr[midpoint + 1]) {
            D = midpoint;
            foundD = true;
        } else{
            if(arr[midpoint] > arr[0]) {    //D is to the right
                beginning = midpoint;
            } else {    //D is to the left
                end = midpoint;
            } // end inner if-else
            midpoint = Math.floor((beginning + end) / 2);
        } // end outer if-else
    } // end while

    //pick a section to search:
    if(arr[0] <= int && int <= arr[midpoint]) {beginning = 0;
                                               end = D;
                                               midpoint = Math.floor(D / 2);
    }
    if(arr[0 + 1] <= int && int <= arr[arr.length - 1]) {beginning = D + 1;
                                                         end = arr.length - 1;
                                                         midpoint = Math.floor(beginning + end);
    }
    // if int is outside of the range of the elements of the array
    if(int < arr[D + 1] || arr[D] < int) { return -1;}   
    let foundInt = false;
    while(!foundInt) {
        if(arr[beginning] == int) { return beginning;}
        if(arr[end] == int) { return end;}
        if(arr[midpoint]  == int) {
            return midpoint;
        } else{
            if(arr[midpoint] < int) {    //int should be to the right
                beginning = midpoint;
            } else {    //int should be to the left
                end = midpoint;
            } // end inner if-else
            midpoint = Math.floor((beginning + end) / 2);
        } // end outer if-else
        if( midpoint == 0) {
            return -1;
        }
    } // end while

} // end findRotatedIndex()
*/