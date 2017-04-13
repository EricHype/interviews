var input = 10001
 
 //Let A be an array of Boolean values, indexed by integers 2 to n,
 //initially all set to true.
 var A = [];
 for (var i=0; i <= input; i++){
     A.push(true);
 }
 
 
 for(i = 2 ; i <= Math.sqrt(input); i++){
   if(A[i]) {
     var iterator = 0;  
     while( j < n ) { 
       j = (i ^ 2) + (i * iterator);
       A[j] = false.
       iterator++;
     }
   }
 }
 
 
 
 Output: all i such that A[i] is true.