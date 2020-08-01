function collectStrings(obj) {

    let keys = Object.keys(obj);
    let len = keys.length;
    let anArray = [];
    for(let i = 0; i < len; i++) {
        if(typeof obj[keys[i]] == "object") {
            anArray = anArray.concat(collectStrings(obj[keys[i]]));
        } else {    
            anArray.push(obj[keys[i]]);
        }
    } // end for i
    return anArray;

} // end collectedStrings

/* 
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

//Test:

const obj = {
             stuff: "foo",
             data: {
                    val: {
                          thing: {
                                  info: "bar",
                                  moreInfo: {
                                             evenMoreInfo: {
                                                            weMadeIt: "baz"
                                             }
                                  }
                          }
                    }
             }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

/*
function collectStrings(obj) {

    // pseudocode:
    // create an array of the object keys
    // create a var equal to the keys object length
    // create an array to return later
    // loop thru the levels of the object
    // if the object is another array call the recursive function on it
    // if the value is a string add it to the array
    // return the array
    let keys = Object.keys(obj);
    let len = keys.length;
    let anArray = [];
    for(let i = 0; i < len; i++) {
        if(typeof obj[keys[i]] == "object") {
            anArray = anArray.concat(collectStrings(obj[keys[i]]));
        } else {    
            anArray.push(obj[keys[i]]);
        }
    } // end for i
    return anArray;

} // end collectedStrings
*/