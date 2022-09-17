var lengthOfLongestSubstring = function(s) {
    let lastIndexFoundHash = {}
    let l = 0
    let longest = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (lastIndexFoundHash[char] >= l){
            l = lastIndexFoundHash[char]+1
        }
        longest = Math.max(longest,i-l+1)
        lastIndexFoundHash[char] = i
    }
        // console.log(lastIndexFoundHash)
    return longest
};

console.log()
console.log()
console.log()