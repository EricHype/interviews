
/*
2. Given an array of sorted intervals(duples) and an interval, 
return an array with the interval correctly inserted in to the array. 

For example:
    Input [(2,4), (6,8), (10,11)], (3,5) Output [(2,5), (6,8), (10,11)]
    Input [(2,4), (6,8), (10,11)], (1,12) Output [(1,12)]
    
*/

var test1 = insertIntervalIntoSortedArray([{x: 2,y :4}, {x :6, y: 8}, {x: 10, y: 11}], { x: 3, y:5 });
var test2 = insertIntervalIntoSortedArray([{x: 2,y :4}, {x :6, y: 8}, {x: 10, y: 11}], { x: 1, y:12 });
console.log(test1);
console.log(test2);


function insertIntervalIntoSortedArray(arrayOfDuples, interval){
    
    var retVal = [];
    var addedInterval = false;
    
    for(var i=0; i< arrayOfDuples.length; i++){
        var duple = arrayOfDuples[i];
        if(duple.x >= interval.x && duple.y < interval.y){
           //kill the duple, it's enveloped by the interval
           //add the interval if it hasn't already been added?
           if(!addedInterval){
               addedInterval = true;
               retVal.push(interval);
           }
           continue;
        } else if(duple.x < interval.x && duple.y < interval.y){
            //only y is enveloped
            //does this need to check the next duple up?
            duple.y = interval.y;
        } else {
           //none of the duple is in the range leave it alone             
        }
        retVal.push(duple);
    }
    
    return retVal;
}
