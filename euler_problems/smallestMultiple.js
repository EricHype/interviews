

var upperlimit = 20;
var currentTotal = 2520; // 1-10 divisible
var passed = false;

while(!isDivisibleByAllDigitsUpToTwenty(currentTotal)){
    
    currentTotal += 2520;
    
}
/*
for(var i = 1; i< upperlimit; i++){
    if( currentTotal % i == 0){
        continue;
    }
    
    currentTotal = currentTotal * i;
}
*/
console.log(currentTotal);

function isDivisibleByAllDigitsUpToTwenty(int){
    
    for(var i=1; i <= 20; i++ ){
        if(int % i != 0){
            return false;
        }
    }
    
    return true;
}