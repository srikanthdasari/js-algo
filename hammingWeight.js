/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    const strVal = (n >>> 0).toString(2); //converts to binary
    return (strVal.match(/1/g) || []).length; // find out 1 from binary
};
