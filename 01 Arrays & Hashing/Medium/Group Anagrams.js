
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

 

// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.

var groupAnagrams = function(strs) {
    let main = []
    let hash = {}
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        let sortedWord = word.split("").sort()
        if (hash[sortedWord] !== undefined){
            hash[sortedWord].push(i)
        }        
        else{
            hash[sortedWord] = [i]
        }
    }

    for (const key in hash){
        let temp = []
        for (let i = 0; i < hash[key].length; i++) {
            const idx = hash[key][i];
            temp.push(strs[idx])
        }
        main.push(temp)
    }
    return main
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))