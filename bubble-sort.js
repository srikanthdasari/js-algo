/// buble sort


const swap = (array, index1, index2) => {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const bubbleSort = (array) => {
    for (var i = 0; i < array.length; i++) {
        for (j = 0; j <= i; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

console.log(bubbleSort([4, 2, 3, 1]));

