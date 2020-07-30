function nestedEvenSum (obj) {
    
    // pseudocode:
    // iitialize sum
    let sum = 0;
    // get the objects keys
    let objectKeys = Object.keys(obj);
    console.log(objectKeys);
    // for loop thru the keys
    for(i = 0; i < objectKeys.length; i++) {
        // at each key if it is a number that is even add it to sum
        if(typeof obj[objectKeys[i]] == "number" && obj[objectKeys[i]] % 2 == 0) {
          
            sum += obj[objectKeys[i]];
        }
        // if it is an object call nestedEvenSum on it
        // sum = sum + recursive call
        if(typeof obj[objectKeys[i]] == "object") {
            let subObjectSum = 0;
            subObjectSum = nestedEvenSum(obj[objectKeys.i]);
            console.log("subObjectSum is ", subObjectSum);
            return subObjectSum;
        }
    } // end for i
    return sum;    
}

// Test:
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

var o3 = {
          a:1,
          b:2,
          c:3,
          d:4
};


var o4 = {
          a:1,
          b:2,
          c:3,
          f:10,
          d:{e:6}
};

var o5 = {w:{a:1},
          x:{b:2},
          y:{c:3},
          z:{d:4}
};
//console.log(nestedEvenSum(obj1)); // 6
//console.log(nestedEvenSum(obj2)); // 10
console.log(nestedEvenSum(o3));
//console.log(nestedEvenSum(o5));
//console.log(nestedEvenSum(o4));
/*
Instructions:
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
*/