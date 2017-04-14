
/*

1. Given an array of Ints, return the size of the longest possible incrementing array possible 
within the given array. 

For example:
    Input: [1,5,2,3,7,2] Output: 3, because 1.5.7

*/

console.log("This should say 3:");
console.log(calculateLongestIncrementingArray([1,5,2,3,7,2]));


function calculateLongestIncrementingArray(array){
    
    var largestNumberSeen =0;
    var numberOfChanges = 0;
    
    for(var i=0; i< array.length; i++){
        if(array[i] > largestNumberSeen){
            largestNumberSeen = array[i];
            numberOfChanges++;
        }
    }
    
    return numberOfChanges;
}