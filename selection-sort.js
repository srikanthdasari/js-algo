// selection sort

const swap = (array, index1, index2) => {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}



const selectionSort = (array) => {
    let min;
    for (var i = 0; i < array.length; i++) {
        // set the minimum tot his position
        min = i;

        // check the rest of the array to see anything smaller
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        // if the minimum is not the postion swap it
        if (i != min) {
            swap(array, i, min);
        }
    }

    return array;
}

console.log(selectionSort([3, 1, 4, 2, 5]));