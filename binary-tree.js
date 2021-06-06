// binary tree traverse

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.traversePreOrder = function () {
    traversePreOrderHelprer(this.root);
    function traversePreOrderHelprer(node) {
        if (!node) {
            return;
        }

        console.log(node.value);
        traversePreOrderHelprer(node.left);
        traversePreOrderHelprer(node.right);
    }
}

BinaryTree.prototype.traverseInOrder = function () {
    traverseInOrderHelprer(this.root);
    function traverseInOrderHelprer(node) {
        if (!node)
            return;
        traverseInOrderHelprer(node.left);
        console.log(node.value);
        traverseInOrderHelprer(node.right);

    }
}

BinaryTree.prototype.traversePostOrder = function () {
    traversePostOrderHelprer(this.root);
    function traversePostOrderHelprer(node) {
        if (node.left)
            traversePostOrderHelprer(node.left);
        if (node.right)
            traversePostOrderHelprer(node.right);
        console.log(node.value);
    }
}

// a.k.a Breath first search
BinaryTree.prototype.traverseLevelOrder = function () {
    let root = this.root,
        queue = [];
    if (!root) {
        return;
    }

    queue.push(root);

    while (queue.length) {
        let temp = queue.shift();
        console.log(temp.value);
        if (temp.left)
            queue.push(temp.left);
        if (temp.right)
            queue.push(temp.right)
    }
}