// MERGE SORT



const merge = (left, right) => {
    const arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right];
}

const mergeSort = (array) => {
    const half = array.length / 2

    // Base case or terminating case
    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}


// console.log(mergeSort([1, 5], [2, 4]));
console.log(mergeSort([2, 4, 3, 1, 6, 8, 7, 5]))

