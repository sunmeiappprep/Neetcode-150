// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

 

// Constraints:

//     0 <= nums.length <= 105
//     -109 <= nums[i] <= 109

var longestConsecutive = function(nums) {
    if (nums == null || nums.length === 0) return 0;
    let hash = {}
    let counter = 0
    let max = 0
    let temp 
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        hash[num] = true
    }

    for (const key in hash){
        let current = parseInt(key)
        if (hash[key-1]) continue
        while (hash[current] !== undefined){
            counter++
            current = current+1
        }
        if (counter > max) max = counter   
        counter = 0
    }
    return max
    // console.log(hash)
};

console.log(longestConsecutive([62670,50689,74016,89663,88676,8656,45810,78903,42372,7450,84540,10203,11186,26242,60948,6001,88298,35259,47767,74702,35450,26739,6812,46776,4465,4675,80985,50761,9572,61561,20897,97997,43424,30642,96130,10658,84610,23353,56681,81749,7600,583,61054,73098,66965,6289,74894,45016,96813,76117,68417,38287,13721,16441,30943,49406,9086,3137,95059,80549,82789,58583,18462,17612,95763,35597,9785,17429,12329,55930,34757,38921,46069,78475,14699,22660,35329,80296,27841,65278,4009,63931,20550,36593,12633,15756,39716,71561,34398,66712,89399,68359,48733,86288,68348,56547,44245,36714,17300,51453,13046,74536,64640,99869,39634,26027,54955,91319,56093,31613,43743,95877,10211,29388,35657,92542,34894,30911,16768,2634,7793,80906,21041,32861,22284,16161,23619,17492,4383,34103,55668,62086,3355,71041,1188,10824,98761,78288,45260,18343,49499,73947,90254,6116,79622,74452,83698,19951,35025,254,4370,23516,53234,9351,71931,79291,7585,33119,86414,48453,5,73340,13457,61877,97556,79733,51457,97792,90955,32759,25492,613]))
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))