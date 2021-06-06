// quick select

const quickSelectInPlace = (array, left, right, k) => {
    let index = partition(array, left, right)
    if (partition === k - 1) {
        return array[index];
    } else if (index > k - 1) {
        return quickSelectInPlace(array, left, index - 1, k);
    } else {
        return quickSelectInPlace(array, index, right, k);
    }
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