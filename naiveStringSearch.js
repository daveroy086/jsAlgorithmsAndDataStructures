function naiveStringSearch(str1, str2){

    /*loop over the longer string
      loop over the shorted string
      if the characters don't match, break out of the inner loop
      if the characters do match, keep going
      if you complete the inner loop and find a match,
      increment the count of matchs
      return the count of matches
      */
    let substringCounter = 0;
    let j = 0;
    for (let i = 0; i < str1.length - j; i++){
        for(j = 0; j <= str2.length - 1; j++){    //i could do this with recursion
            if(str1[i + j] != str2[j]){
                break;
            }
            if(j == str2.length - 1){
              substringCounter++;
            }
        }//end for j
    }//end for i
    return substringCounter;
}//end naiveStringSearch()

console.log(naiveStringSearch("lorie loled", 'lol'));//1
console.log(naiveStringSearch("wowomgzomg", 'omg')); //2
console.log(naiveStringSearch("o", 'omg')); //0
console.log(naiveStringSearch("om", 'omg')); //0
console.log(naiveStringSearch("omg", 'omg')); //1
console.log(naiveStringSearch("oomg", 'omg')); //1
console.log(naiveStringSearch("omgo", 'omg')); //1
console.log(naiveStringSearch("omgom", 'omg')); //1
console.log(naiveStringSearch("omgomg", 'omg')); //2
