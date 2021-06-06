const sample = function (n) {
    // console.log(n);
    if (n <= 0) return n;
    else
        return n + sample(n - 1);
}

console.log(sample(5));