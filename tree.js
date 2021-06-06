// https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function (callback) {
    (function recurse(currentNode) {
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode[i]);
        }

        callback(currentNode);
    })(this._root);
}

Tree.prototype.traverseBF = function (callback) {
    var queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while (currentTree) {
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
        callback(currentTree);
        currentTree = queue.dequeue();
    }
}

Tree.prototype.contains = function (data, traversal) {
    traversal.call(this, callback);
}

Tree.prototype.add = function (data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function (node) {
            if (node.data === toData) {
                parent = node;
            }
        };
    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent');
    }
}

Tree.prototype.remove = function (data, fromData, traversal) {
    var tree = null,
        parnt = null,
        childToRemove = null,
        index;

    var callback = function (node) {
        if (node.data === fromData) {
            parent = node;
        }
    }
}