const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What nth Prime do you want to sum up to? ', (answer) => {
  
  if(isNaN(answer)){
      console.log("Sorry, that's not a number");
      process.exit(1);
  }
  
  console.log("Brute Force method");
  var brutePrimes = getAllPrimesToIndexBruteForce(answer);
  printMultiplicationTable(brutePrimes);

  console.log("\nA little less brute force");
  var notAsBrutePrimes = getAllPrimesToIndexSlightlyLessBrutish(answer);
  printMultiplicationTable(notAsBrutePrimes);

  console.log("\nPrimes with a sieve");
  var sievePrimes = getAllPrimesWithSieve(answer);
  printMultiplicationTable(sievePrimes);

  console.log("\nTest Methods");
  console.log("shouldHaveCorrectNumberOfPrimes: " + (shouldHaveCorrectNumberOfPrimes() ? "Passed!" : "Failed :("));
  console.log("primesShouldMatchKnownArray: " + (primesShouldMatchKnownArray() ? "Passed!" : "Failed :("));
  console.log("shouldHaveEqualPrimesRegardlessOfMethod: " + (shouldHaveEqualPrimesRegardlessOfMethod() ? "Passed!" : "Failed :(" ));
  console.log("sieveShouldReturnEmptyArrayIfInputTooHigh: " + (sieveShouldReturnEmptyArrayIfInputTooHigh() ? "Passed!" : "Failed :("));
  
  rl.close();
  process.exit(0);
});

/*
    Output functions
*/
function printMultiplicationTable(array){
    
    printHeader(array);
    var lineString = "";
    for(var i=0; i<array.length; i++){
        lineString = array[i] + "   ";
        for(var j=0; j< array.length; j++){
            lineString += (array[i] * array[j]) + "   ";
        }
        console.log(lineString);
    }
}

function printHeader(array){
    var startingString ="X   ";
    for(var i=0; i< array.length; i++){
        startingString += array[i] + "   ";
    }
    console.log(startingString);
}


/*
    Brute force implementation, for every element it will compare if every number before it. 
    Every number N will be compared to N numbers, so exponential runtime. This is considered
    bad performance, but easy to implement.
*/
function getAllPrimesToIndexBruteForce(index){
    var primes = [];
    var currentNumberToTest = 2;
    primes.push(1);
    
    while(primes.length < index){
        if(isPrime(currentNumberToTest)){
            primes.push(currentNumberToTest);
        }
        
        currentNumberToTest += 1;
    }
    return primes;
    
}

function isPrime(value){
    for(var i=2; i< value; i++){
        if(value % i === 0)
            return false;
    }
    
    return true;
}



/*
    With some thinking, we can easily get a savings in our isPrime function.
    A number is not going to have a factor larger than it's halfway point, so we can floor
    N / 2 and end up with a runtime of N * (N/2) which is better, but still not great.
*/
function getAllPrimesToIndexSlightlyLessBrutish(index){
    var primes = [];
    var currentNumberToTest = 2;
    primes.push(1);
    
    while(primes.length < index){
        if(isPrimeWithBisection(currentNumberToTest)){
            primes.push(currentNumberToTest);
        }
        
        currentNumberToTest += 1;
    }
    return primes;
}

function isPrimeWithBisection(value){
    var halfWay = Math.floor(value / 2);
    for(var i=2; i<= halfWay; i++){
        if(value % i === 0)
            return false;
    }
    
    return true;
}

/*
    A far better answer overall is to use something like the sieve of Eratosthenes
    https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
    Though this could probably be done better by an incremental sieve.
*/

function getAllPrimesWithSieve(numberOfPrimes){
    //this algorithm typically works in finding primes under a value X
    //for this problem, we'll define an arbitrary X that *should* be large enough to contain 10 primes
    var X = 100;
    var array = [], upperLimit = Math.sqrt(X), output = [];
    for (var i = 0; i < X; i++) {
        array.push(true);
    }
    
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < X; j += i) { //remove all multples of i from contention
                array[j] = false;
            }
        }
    }
    
    //be consistent with other methods and include 1, yes I know it's agruably not prime.
    output.push(1); 
    
    // All leftover true values are primes
    for (var i = 2; i < X; i++) {
        if(array[i]) {
            output.push(i);
            if(output.length == numberOfPrimes){
                return output;
            }
        }
    }

    if(numberOfPrimes > output.length){
        console.log("You have requested more primes than the sieve is able to calculate");
        return [];
    }

    return output;
}

/*
    Test functions - (easier than setting up a runer etc)
*/

function shouldHaveCorrectNumberOfPrimes(){
    var output = getAllPrimesWithSieve(5);
    return output.length == 5;
}

function primesShouldMatchKnownArray(){
    var output = getAllPrimesWithSieve(3);
    var known = [1,2,3];
    for(var i =0; i< output.length; i++){
        if(output[i] != known[i]){
            return false;
        }
    }
    
    return true;
}

function shouldHaveEqualPrimesRegardlessOfMethod(){
    var brute = getAllPrimesToIndexBruteForce(7);
    var less = getAllPrimesToIndexSlightlyLessBrutish(7);
    var sieve = getAllPrimesWithSieve(7);
    
    if(!(brute.length == less.length && brute.length == sieve.length)){
        console.log("Length unequal, brute:" + brute.length + " less: " + less.length + " sieve: " + sieve.length );
        return false;
    }
    
    for(var i=0; i < brute.length; i++){
        if(!(brute[i] === less[i] && brute[i] === sieve[i])){
            console.log("Unmatched element:" + i);
            console.log("brute: " + brute[i] + " less: " + less[i] + " sieve: " + sieve[i]);
            return false;
        }
    }
    
    return true;
}

function sieveShouldReturnEmptyArrayIfInputTooHigh(){
    var sieve = getAllPrimesWithSieve(1000);
    return sieve.length == 0;
}