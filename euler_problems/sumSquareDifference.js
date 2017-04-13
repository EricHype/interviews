

var upper_limit = 100;


var sumSquared = 0

for(var i=0; i <= upper_limit; i++){
    sumSquared += i;
}

sumSquared = sumSquared * sumSquared;

var squaredSum = 0;
for(var j=0; j <= upper_limit; j++){
    squaredSum += j * j;
}

console.log(sumSquared);
console.log(squaredSum);
console.log(sumSquared - squaredSum);