// There is a row of n houses, where each house can be painted one of three colors: red, blue, or green.The cost of painting each house with a certain color is different.You have to paint all the houses such that no two adjacent houses have the same color.

// The cost of painting each house with a certain color is represented by a n x 3 cost matrix.For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on...Find the minimum cost to paint all houses.



// Example 1:

// Input: costs = [[17, 2, 17], [16, 16, 5], [14, 3, 19]]
// Output: 10
// Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
// Minimum cost: 2 + 5 + 3 = 10.

// Example 2:

// Input: costs = []
// Output: 0

// Example 3:

// Input: costs = [[7, 6, 2]]
// Output: 2



// Constraints:

// costs.length == n
// costs[i].length == 3
// 0 <= n <= 100
// 1 <= costs[i][j] <= 20


/**
 * @param {number[][]} costs
 * @return {number}
 */

var minCost = function (costs) {
    const memo = [];
    if (costs && costs.length > 0) {
        for (var i = 0; i < costs.length; i++) {           // house loop
            for (var j = 0; j < costs[i].length; j++) {   // color loop
                if (i === 0) {
                    memo.push({
                        index: i.toString() + j.toString(),
                        level: i,
                        totalSum: costs[i][j],
                    })
                } else {
                    for (var k = 0; k < costs[i].length; k++) {             // parent color loop
                        if (j !== k) {
                            const parentId = (i - 1).toString() + k.toString();
                            const noOfParents = memo.filter(x => x.index === parentId);
                            noOfParents.forEach((value) => {
                                memo.push({
                                    index: i.toString() + j.toString(),
                                    level: i,
                                    totalSum: costs[i][j] + value.totalSum
                                });
                            });
                        }
                    }
                }
            }
        }
        // console.log(memo);

        const minimumCostFilter = memo.filter(x => x.level === costs.length - 1);
        const minimumCosts = minimumCostFilter.map(x => x.totalSum);
        console.log(minimumCosts);
        return Math.min(...minimumCosts);
    }
    else {
        return 0;
    }

};

const input = [[1, 16, 18], [17, 1, 6], [10, 1, 18], [12, 19, 5], [18, 11, 6], [11, 9, 6], [18, 10, 10], [18, 13, 18], [1, 17, 9], [7, 19, 15], [10, 20, 11], [17, 12, 2], [11, 6, 12], [7, 18, 2], [14, 20, 12], [13, 5, 10], [13, 20, 14], [8, 9, 2], [14, 15, 19]];



minCost(input);