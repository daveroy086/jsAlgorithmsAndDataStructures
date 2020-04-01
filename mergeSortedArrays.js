function mergeArrays(array1, array2){    //merge two sorted arrays
    
}

psuedocode:
  create an empty array, take a loop at the smallest values in each input array.
  while there are still values we haven't looked at:
    if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    once we exhaust one array, push all the remaining values from the other array
