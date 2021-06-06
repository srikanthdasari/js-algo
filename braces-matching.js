// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.



//     Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Example 4:

// Input: s = "([)]"
// Output: false

// Example 5:

// Input: s = "{[]}"
// Output: true



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (var i = 0; i < s.length; i++) {

        if (stack.length === 0) {
            stack.push(s[i]);
        } else {
            let top = stack[stack.length - 1];

            switch (s[i]) {
                case "}": top === "{" ? stack.pop() : stack.push(s[i]); break;
                case "]": top === "[" ? stack.pop() : stack.push(s[i]); break;
                case ")": top === "(" ? stack.pop() : stack.push(s[i]); break;
                default: stack.push(s[i]);
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};