function digitCount(x) {    //gets the numer of digits in x
      return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

//was called numDigits  in radixSort()