// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

 

// Constraints:

//     1 <= nums.length <= 105
//     k is in the range [1, the number of unique elements in the array].
//     It is guaranteed that the answer is unique.

 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.



var topKFrequent = function(nums, k) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        (hash[num]) ? hash[num] += 1 : hash[num] = 1
    }
    let hashToArray = []
    for (const key in hash){
        hashToArray.push([key,hash[key]])
    }
    
    hashToArray.sort((a,b) => b[1]-a[1])

    let answer = []
        for (let i = 0; i < hashToArray.length; i++) {
            const element = hashToArray[i];
            answer.push(element[0])
            k--
            if (k <= 0){
                return answer
            }
        }

};

console.log(topKFrequent([1,1,1,2,2,3],2))
console.log(topKFrequent([1],1))
// console.log(topKFrequent())
// 