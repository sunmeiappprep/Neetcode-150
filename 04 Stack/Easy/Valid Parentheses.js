// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    let stack = []

    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        if (ele === ")"){
            if (stack.pop() !== "("){
                return false
            }
        }        
        else if (ele === "}"){
            if (stack.pop() !== "{"){
                return false
            }
        }
        else if (ele === "]"){
            if (stack.pop() !== "["){
                return false
            }
        }
        else{
            stack.push(ele)
        }
    }
    return stack.length === 0  
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))