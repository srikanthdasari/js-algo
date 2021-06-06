// Parenthesis validation using Stack


const _ = require('./stack1');

const isParenthesisValid = (validateString) => {
    let stack = new _.Stack();
    for (let pos = 0; pos < validateString.length; pos++) {
        let currentChar = validateString[0];
        if (currentChar === "(") {
            stack.Push(currentChar);
        } else if (currentChar === ")") {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop()
        }
    }
    return stack.isEmpty();

}

console.log(isParenthesisValid("((()")); // false;

console.log(isParenthesisValid("((((")); // false;

consol.log(isParenthesisValid("()()")); // true;
