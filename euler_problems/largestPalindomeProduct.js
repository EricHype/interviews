


var a = 999;
var b = 999;

var currentMax = 0;

for(var i = a; i >= 100;  i--){

    for(var j = b; j >= 100; j--){
        var product = i * j;
        if(isPalindrome(product)){
            if(currentMax < product){
                currentMax = product;
            }
        }
    }
}

console.log(currentMax);


function isPalindrome(number){
    var string = number.toString();
    return string == string.split('').reverse().join(''); 
}