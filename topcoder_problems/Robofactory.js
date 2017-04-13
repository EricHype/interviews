/*
Problem Statement
    	
Hero owns a factory. There are n robots working at the factory. The robots are numbered 0 through n-1.

Today, exactly one of the robots became corrupted. Hero has decided to give all robots a test that may determine the 
number of the corrupted robot. The test works as follows: For each x from 0 to n-1, in order, Hero tells robot x a 
positive integer and the robot answers whether the integer is odd or even. Each normal robot will always give the 
correct answer. The corrupted robot may sometimes give the opposite answer. More precisely: the corrupted robot will 
answer incorrectly if and only if the previous robot was given an odd number. In particular, if robot 0 is the 
corrupted robot, it will give the correct answer (as there is no previous robot).

You are given a log of the test: a int[] query and a String[] answer, each with n elements. 
For each x, query[x] is the positive integer given to robot x, and answer[x] is the answer given by the robot: 
either "Odd" or "Even".

It is guaranteed that the situation described by query and answer could have occurred as described above. 
If it is possible to determine the index of the corrupted robot, return it. Otherwise, return -1.

 
Definition
    	
Class:	Robofactory
Method:	reveal
Parameters:	int[], String[]
Returns:	int
Method signature:	int reveal(int[] query, String[] answer)
(be sure your method is public)
    
 
Constraints
-	n will be between 1 and 50, inclusive.
-	query and answer will contain exactly n elements.
-	Each element in query will be between 1 and 1000, inclusive.
-	Each element in answer will be either "Odd" or "Even".
-	It is guaranteed that there will be at least one possible number of the corrupted robot.
 
Examples
0)	
    	
{3,2,2}
{"Odd", "Odd", "Even"}
Returns: 1
Robot 1 gave the wrong answer. Thus, robot 1 is the corrupted robot.
1)	
    	
{1,3,5,10}
{"Odd", "Odd", "Odd", "Even"}
Returns: 0
All robots gave correct answers. Still, we can deduce that the corrupted robot must be robot 0. For example, robot 1 cannot be the corrupted robot: as robot 0's number was odd, robot 1 would have answered incorrectly if it were corrupted.
2)	
    	
{2,3,5,10}
{"Even", "Odd", "Odd", "Even"}
Returns: -1
Again, all robots gave correct answers. This time we cannot be sure which robot is corrupted. All we know is that it is either robot 0 or robot 1. Both possibilities are consistent with the given input data. Thus, we should return -1.
3)	
    	
{2,4,6,10}
{"Even", "Even", "Even", "Even"}
Returns: -1
4)	
    	
{107}
{"Odd"}
Returns: 0
5)	
    	
{1,1,1}
{"Odd", "Odd", "Even"}
Returns: 2

*/

console.log("Test case 1");
console.log("answer should be 1");
console.log("The defective robot is at index: " + reveal([3,2,2], ["Odd", "Odd", "Even"]));


console.log("Test case 2");
console.log("Answer should be 0");
console.log("The defective robot is at index: " + reveal([1,3,5,10], ["Odd", "Odd", "Odd", "Even"]));


console.log("Test case 3");
console.log("Answer should be -1");
console.log("The defective robot is at index: " + reveal([2,3,5,10], ["Even", "Odd", "Odd", "Even"]));

console.log("Test case 3");
console.log("Answer should be -1");
console.log("The defective robot is at index: " + reveal([2,4,6,10], ["Even", "Even", "Even", "Even"]));

console.log("Test case 4");
console.log("Answer should be 0");
console.log("The defective robot is at index: " + reveal([107], ["Odd"]));

console.log("Test case 5");
console.log("Answer should be 2");
console.log("The defective robot is at index: " + reveal([1,1,1], ["Odd", "Odd", "Even"]));
    	

//int reveal(int[] query, String[] answer)
function reveal(input, answers){
    
    
    console.log("input array is:" + input);
    console.log("robot responses are:" + answers);
    
    var index = -1;
    var numberOfRobotsChecked =0;
    
    for(var i =0; i< input.length; i++){
        
        if( i==0 || answers[i-1] == "Odd"){
            numberOfRobotsChecked++;
            if(input[i] % 2 == 0 && answers[i] != "Even"){
                return i;
            }
            if(input[i] % 2 == 1 && answers[i] != "Odd"){
                return i;
            }
        }
    }
    
    if(numberOfRobotsChecked == input.length){
        index = 0;
    }
    
    return index;
}


function generateRobotResponses(input, corruptIndex){
    var responses = [];
    
    for(var i=0; i< input.length; i++){
        if(input[i] % 2 == 0){
            responses.push("Even");
            continue;
        }
        
        if(i == corruptIndex && i > 0){
            if(responses[i-1] == "Odd"){
                responses.push("Even");
                continue;
            }
        }
        
        responses.push("Odd");
    }
    
    return responses;
}


function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
