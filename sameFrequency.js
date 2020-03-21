function sameFrequency(num1, num2){

    let len1 = Math.max(Math.floor(Math.log10(Math.abs(num1))), 0) + 1;
    let len2 = Math.max(Math.floor(Math.log10(Math.abs(num2))), 0) + 1;

    if(len1 != len2){
        //console.log("false");
        return false;
    }

    //create the objects for each string
    var objectOne = {};
    let sOneLength = len1;
    let string1 = num1.toString();
    for (let i = 0; i < sOneLength; i ++){
        if (objectOne.hasOwnProperty(string1[i])){
            objectOne[string1[i]]++;
        }else{
            objectOne[string1[i]] = 1;
        }
    }//end for i
    console.log("objectOne is ", objectOne);

    var objectTwo = {};
    let sTwoLength = len2;
    let string2 = num2.toString();
    for (let j = 0; j < sTwoLength; j ++){
        if (objectTwo.hasOwnProperty(string2[j])){
            objectTwo[string2[j]]++;
        }else{
            objectTwo[string2[j]] = 1;
        }
    }//end for j
    console.log("objectTwo is ", objectTwo);
/*
    // compare them
    var keysOne = Object.keys(objectOne);
    console.log(keysOne);
    var keysOneLength = keysOne.length;
    for(k = 0; k < keysOneLength; k++){
        //console.log(" keysOne[k] is ", keysOne[k],
                    ", objectOne is ", objectOne, 
                    ", objectOne[k] is ", objectOne[keysOne[k]], 
                    " and onjectTwo[k] is ", objectTwo[keysOne[k]]);

        if(!(objectTwo.hasOwnProperty(keysOne[k]) && objectOne[keysOne[k]] == objectTwo[keysOne[k]])){
      //      console.log('false');
            return false;
        }
    }
    //console.log('true');
    return true;

}//end validAnagrams() */

    
}//end sameFrequency()

console.log(sameFrequency(182, 281)); //true
//console.log(sameFrequency(34, 14));  //false
//console.log(sameFrequency(3589578, 5879358));  //true
//console.log(sameFrequency(22, 222)); //false