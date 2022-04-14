// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

// Input: nums = []
// Output: []

// Example 3:

// Input: nums = [0]
// Output: []

 

// Constraints:

//     0 <= nums.length <= 3000

var threeSum = function(nums) {
    if (nums.length < 3) return []
    nums.sort((a,b) => a-b)
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        const num = nums[i];
        let target = 0 - num
        let l = i+1
        let r = nums.length-1
        // console.log(target)
        console.log(nums[l]+nums[r])
        while ( r > l){
            if (target === (nums[l] + nums[r])){
                answer.push([nums[i],nums[l],nums[r]])
                while (nums[l] === nums[l+1]) l++
                while (nums[r] === nums[r-1]) r--
                l++
                r--
            }
            else if (target < (nums[l] + nums[r])){
                r--
            }
            else if (target > (nums[l] + nums[r])){
                l++
            }
        }
    }
    return answer
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([]))
console.log(threeSum([0]))
