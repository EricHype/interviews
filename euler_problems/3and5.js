
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var limit = 1000;
var total = 0;

for(var i=0; i< limit; i++){
    
    if( i % 3 == 0){
        //numbers.push(i);
        total += i;
        continue;
    }
    
    if( i % 5 == 0){
        //numbers.push(i);
        total+=i;
        continue;
    }
}

console.log("The total is: " + total);




