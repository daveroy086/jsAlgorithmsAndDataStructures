function stringifyNumbers(obj) {

        let objKeys = Object.keys(obj);
        let newObj = {};    // create a new object to be returned later
        for (let i = 0; i < objKeys.length; i++) {    //loop thru esch level of the original object

            if(typeof obj[objKeys[i]] === "number") {    // if a value is a number
               newObj[objKeys[i]]  = obj[objKeys[i]].toString();    // create a key in the new object whose value is the stringified number

            } else if(typeof obj[objKeys[i]] == "object" && !Array.isArray(obj[objKeys[i]])) {    // if a value is another object
                       newObj[objKeys[i]] = stringifyNumbers(obj[objKeys[i]]);    // create a key in the new object whose value is the result of recursively calling the function on the value/object

                   } else {    // if the value is anything else
                       newObj[objKeys[i]] = obj[objKeys[i]];    // create a key in the new object whose value is the same as the original value
                   }
        }
    return newObj;   // return the new object
} // end stringifyNumbers
    
//Tests:
let obj = {num: 1,
           test: [], 
           data: {val: 4,
                  info: {isRight: true,
                         random: 66
                        }
                 }
          };

console.log(stringifyNumbers(obj));

/* as submitted
function stringifyNumbers(obj) {

        let objKeys = Object.keys(obj);
        let newObj = {};
        for (let i = 0; i < objKeys.length; i++) {
            if(typeof obj[objKeys[i]] === "number") {
               newObj[objKeys[i]]  = obj[objKeys[i]].toString();
            } else if(typeof obj[objKeys[i]] == "object" && !Array.isArray(obj[objKeys[i]])) {
                       newObj[objKeys[i]] = stringifyNumbers(obj[objKeys[i]]);
                   } else {
                       newObj[objKeys[i]] = obj[objKeys[i]];
                   }
        }
    return newObj;
} // end stringifyNumbers */