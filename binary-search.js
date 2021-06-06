// binary search

const binarySearch = (list, n) => {
    let lowerIndex = 0, higherIndex = list.length - 1;

    while (lowerIndex <= higherIndex) {
        const midIndex = Math.floor((lowerIndex + higherIndex) / 2);

        if (n === list[midIndex]) {
            return midIndex;
        } else if (n > list[midIndex]) {
            lowerIndex = midIndex + 1;
        } else {
            higherIndex = midIndex - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4], 3));