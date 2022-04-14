// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// var dailyTemperatures = function(temperatures) {
//     let stack = new Array(temperatures.length).fill(0);

//     for (let i = temperatures.length-1; i >= 0; i--) {
//         const num = temperatures[i];
//         let count = 0
//         for (let j = i+1; j < temperatures.length; j++) {
//             const num2 = temperatures[j];
//             console.log(num,num2)
//             if (temperatures[j] !== undefined && num < num2){
//                 stack[i] = j-i
//                 break
//             }
//             count ++
//         }
        
//     }
//     return stack
// };


var dailyTemperatures = function(temperatures) {
    let stack = []
    let result = new Array(temperatures.length).fill(0);
    
    for (let i = temperatures.length-1; i >= 0; i--) {
        while(stack.length > 0 && temperatures[i] > temperatures[stack.length-1])        
    }
};

// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))
// console.log(dailyTemperatures([30,60,90]))

let arr = []
console.log(arr.length === false) 