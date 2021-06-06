// quick sort

const quickSort = (array) => {
    return quickSortHelper(array, 0, array.length - 1);

}

const quickSortHelper = (array, left, right) => {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            quickSortHelper(array, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(array, index, right)
        }
    }
    return array;
}

const partition = (array, left, right) => {
    let pivot = array[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }

        if (left <= right) {
            const temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

console.log(quickSort([3, 1, 4, 2, 5]));
