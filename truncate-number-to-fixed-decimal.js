// Using the Math.pow() method, we can truncate a number to a certain decimal point that we provide in the function.

const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);


console.log(toFixed(25.198726354, 1));
console.log(toFixed(25.198726354, 2));
console.log(toFixed(25.198726354, 3));
console.log(toFixed(25.198726354, 4));
console.log(toFixed(25.198726354, 5));
console.log(toFixed(25.198726354, 6));