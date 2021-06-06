// Queue

function Queue(array) {
    this.array = [];
    if (array) {
        this.array = array;
    }
}

Queue.prototype.getBuffer = () => {
    return this.array.slice();
}

Queue.prototype.isEmpty = () => {
    return this.array.length === 0;
}

Queue.prototype.peek = () => {
    return this.array[0];
}

Queue.prototype.enqueue = (val) => {
    this.array.push(val);
}

Queue.prototype.dequeue = () => {
    this.array.shift();
}