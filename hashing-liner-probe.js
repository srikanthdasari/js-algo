// HASHING - Linear probe

function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.hash = (key) => {
    // Check if int
    if (!Number.isInteger(key)) {
        throw 'must be integer';
    }
    return key % this.size;
    // return this.secondHash(key % this.size);
}

HashTable.prototype.initArray = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}

HashTable.prototype.put = (key, value) => {
    if (this.limit >= this.size) {
        throw 'hash table is full';
    }

    let hashIndex = this.hash(key);

    // liner probing
    while (this.keys[hashIndex] != null) {
        hashIndex++;
        hashIndex = hashIndex % this.size;
    }

    this.keys[hashIndex] = key;
    this.values[hashIndex] = value;
    this.limit++;

}

HashTable.prototype.get = (key) => {
    let hashIndex = this.hash(key);

    while (this.keys[hashIndex] != key) {
        hashIndex++;
        hashIndex = hashIndex % this.size;
    }

    return this.values[hashIndex];
}


HashTable.prototype.secondHash = (haskedKey) => {
    let R = this.size - 2;
    return R - (haskedKey % R);
}


var exampletable = new HashTable(13);

exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");

