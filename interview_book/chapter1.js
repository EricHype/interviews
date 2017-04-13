


console.log("reverse string");
console.log("Hello World - " + reverseString("Hello World"));

console.log("Unique characters");
console.log("Is Hello unique? " + areCharactersUnique("Hello"));
console.log("Is Dog unique? " + areCharactersUnique("Dog"));

console.log("Permutations");
console.log("Is bca a permutation of def: " + isPermutationOf("bca", "def"));
console.log("Is bca a permutation of abc: " + isPermutationOf("bca", "abc"));

console.log("Rotate Matrix");
console.log(RotateMatrix());

function RotateMatrix(){
    
    var matrix = 
        [
            [ 0, 0, 0, 0],
            [ 1, 1, 1, 1],
            [ 2, 2, 2, 2],
            [ 3, 3, 3, 3]
        ];
    
    
    // Consider all squares one by one
    for (var x = 0; x < 4 / 2; x++)
    {
        // Consider elements in group of 4 in 
        // current square
        for (var y = x; y < 4-x-1; y++)
        {
            // store current cell in temp variable
            var temp = matrix[x][y];
 
            // move values from right to top
            matrix[x][y] = matrix[y][4-1-x];
 
            // move values from bottom to right
            matrix[y][4-1-x] = matrix[4-1-x][4-1-y];
 
            // move values from left to bottom
            matrix[4-1-x][4-1-y] = matrix[4-1-y][x];
 
            // assign temp to left
            matrix[4-1-y][x] = temp;
        }
    }
    
    console.log(matrix);
}



//"bca" is permutation of "abc"
function isPermutationOf(input, testAgainst){
    if(input.length != testAgainst.length){
        return false;
    }
    
    var mySet = new Set();
 
    for(var i=0; i< input.length; i++){
        mySet.add(input[i]);  
    }
   
    for(var j=0; j< testAgainst.length; j++){
        if(!mySet.has(testAgainst[j])){
            return false;
        }
    }
    
    return true;
}




function areCharactersUnique(input){
    var map = {};
    for (var x = 0; x < input.length; x++){
        if(map[input[x]] == null){
            map[input[x]] = 1;
        } else {
            return false;
        }
    }
    
    return true;
}

function reverseString(input){
    var result = "";
    for (var x = input.length - 1; x >= 0; x--){
        result += input[x];
    }
    return result;
}