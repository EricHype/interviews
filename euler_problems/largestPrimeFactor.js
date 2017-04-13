/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var NUMBER_TO_FACTOR = 600851475143;
var primes = [2, 3, 5, 7, 11, 13, 17, 23, 29];


var primeIndex = 0;
var cur_divisor = primes[0];

checkDivisor(NUMBER_TO_FACTOR, cur_divisor);
    
    
function checkDivisor(currentNumber, divisor){
    
    if(currentNumber % divisor === 0){
        var next_number = currentNumber / divisor;
        
        if(next_number == 1){
            console.log("The largest Prime is" + currentNumber );
            return;
        }
        return checkDivisor(next_number, divisor);
    }
    

    var nextPrime = getNextPrime(divisor, currentNumber);
    
    return checkDivisor(currentNumber, nextPrime);
}


function getNextPrime(lastPrime, maxNumber){
    
    if(primeIndex < primes.length - 1 ){
        primeIndex ++;
        return primes[primeIndex];
    }
    
    for(var i = lastPrime; i< maxNumber; i+=2){
        if(isPrime(i)){
            return i;
        }
    }
}

function isPrime(value) {
    var ceiling = Math.ceil(value / 2);
    for(var i = 2; i < ceiling; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

/*
console.log("Starting with " + startingNumber);
for(var i = startingNumber; i > 0; i--){
    if(NUMBER_TO_FACTOR % i === 0){
        console.log(i + " is a factor");
        if(isPrime(i)){
            console.log("The largest prime factor is:" + i);
            return;
        }
        console.log(i + " is not prime");
    }
}


function isPrime(value) {
    var ceiling = Math.ceil(value / 2);
    for(var i = 2; i < ceiling; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
*/