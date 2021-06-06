// stack

var Stack = function (array) {
    this.array = [];
    if (array) {
        this.array = array;
    }
}

Stack.prototype.getBuffer = () => {
    return this.array.slice();
}

Stack.prototype.isEmpty = () => {
    return this.array.length === 0;
}

Stack.prototype.peek = () => {
    return this.array[this.array.length - 1];
}

Stack.prototype.Push = function (val) {
    console.log(this.array);
    this.array.push(val);
}

Stack.prototype.pop = () => {
    this.array.pop();
}

exports.Stack = Stack;

