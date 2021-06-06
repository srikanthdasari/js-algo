// fibanacci using dyanmic programming

var cahce = {};
function fibBest(n) {
    if (n <= 1) {
        return n;
    }
    if (cahce[n]) {
        return cahce[n];
    }

    return (cahce[n] = fibBest(n - 1) + fibBest(n - 2));
}

console.log(fibBest(10));