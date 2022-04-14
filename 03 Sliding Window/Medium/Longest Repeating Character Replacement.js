// 424. Longest Repeating Character Replacement
// Medium

// 4173

// 168

// Add to List

// Share
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

var characterReplacement = function(s, k) {
    let l = 0
    let r = 0
    let hash = {}
    let count = s.length
    while (s.length > r){
        (hash[s[r]]) ? hash[s[r]] += 1 : hash[s[r]] = 1
        let [total,max,maxChar] = makeHashIntoTotal(hash)
        // console.log(total-max,k)
        if (total-max > k){
            l++
            r++
            count = r-l
        }else{
            r++
        }
    }
    return count
};
var makeHashIntoTotal = function(hash) {
    let total  = 0
    let max  = 0
    let maxChar = ""
    for (const key in hash){
        total += hash[key]
        if (hash[key] >= max){
            max = hash[key]
            maxChar = key
        }
    }
    return [total,max,maxChar]
};
// console.log(characterReplacement("ABAB",2))
// console.log(characterReplacement("AABABBA",1))