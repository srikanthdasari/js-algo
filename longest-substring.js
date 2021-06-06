// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:

// Input: s = ""
// Output: 0



// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let subString = [];
    let lengthOfSubString = -1;
    if (s.length <= 1) {
        return s.length;
    }
    for (var i = 0; i < s.length; i++) {
        if (subString.includes(s[i])) {
            if (lengthOfSubString <= subString.length) {
                lengthOfSubString = subString.length;
            }
            if (s[i] === s[i - 1]) {
                subString = [s[i]];
            } else {
                // subString = [...s.substring(s.indexOf(s[i]) + 1, (subString.length - s.indexOf(s[i]))), s[i]];
                // subString = s.substring(s.indexOf(subString) + 1);
                subString = [...subString.slice(subString.indexOf(s[i]) + 1), s[i]];
            }

        } else {
            subString.push(s[i]);
        }
    }
    if (lengthOfSubString <= subString.length) {
        lengthOfSubString = subString.length;
    }
    return lengthOfSubString;
};

console.log("Expected: 6, output: ", lengthOfLongestSubstring("ohvhjdml"));
console.log("Expected: 5, output: ", lengthOfLongestSubstring("anviaj"));
console.log("Expected: 3, output: ", lengthOfLongestSubstring("dvdf"));
console.log("Expected: 3, output: ", lengthOfLongestSubstring("abcabcbb"));
console.log("Expected: 1, output: ", lengthOfLongestSubstring("bbbbb"));
console.log("Expected: 3, output: ", lengthOfLongestSubstring("pwwkew"));
console.log("Expected: 0, output: ", lengthOfLongestSubstring(""));
console.log("Expected: 1, output: ", lengthOfLongestSubstring(" "));
console.log("Expected: 2, output: ", lengthOfLongestSubstring("au"));
console.log("Expected: 2, output: ", lengthOfLongestSubstring("aau"));
