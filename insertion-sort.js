// insertion sort

const insertionSort = (array) => {
    let value, //the value of curently being compared
        i, // index to unsorted section
        j;// index to sorted section

    for (i = 0; i < array.length; i++) {
        // store the current value because it may shift later
        value = array[i];

        // whenever the value in the sorted section is greater than the value 
        // in the unsorted section, shift all the items to sorted ection
        // over by one. this created the space to in which to insert the value

        for (j = i - 1; j > -1 && array[j] > value; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = value;
    }

    return array;

}

console.log(insertionSort([3, 1, 4, 2, 5]));