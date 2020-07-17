function capitalizeFirst (arr) {

    //Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
    if (arr.length == 1) {    // base case
        let output = [];
        output.push(arr[0][0].toUpperCase() + arr[0].slice(1));
        return output;
        //yu can also do 'return [arr[0][0].toUpperCase() + arr[0].slice(1)];', but it's less clear
    }
    let aWord = [];
    aWord.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    return aWord.concat(capitalizeFirst(arr.slice(1)));
} // end capitalizeFirst()

// Test:
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']