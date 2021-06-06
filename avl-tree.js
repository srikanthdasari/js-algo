/*
*
*
*/

function AVLTree(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function () {
    if (this.node === null) {
        this.depth = 0;
    } else {
        this.depth = 1;
    }

    if (this.left !== null) {
        this.depth = tis.left.depth + 1;
    }

    if (this.right !== null && this.depth <= this.right.depth) {
        this.depth = this.right.depth + 1;
    }
}

AVLTree.prototype.rotateLL = function () {
    let valueBefore = this.value;
    let rightBefore = this.right;
    this.value = this.left.value;

    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;

    this.right.getDepthFromChildren();
    this.getDepthFromChildren();
}

AVLTree.prototype.rotateRR = function () {
    let valueBefore = this.value;
    var leftBefore = this.left;
    this.value = this.right.value;

    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;

    this.left.updateInNewLocation();
    this.updateInNewLocation();
}

AVLTree.prototype.balance = function () {
    let lDepth = this.left === null ? 0 : this.left.depth;
    let rDepth = this.right === null ? 0 : this.right.depth;

    if (lDepth > rDepth + 1) {
        // LR or LL rotation
        let llDepth = this.left.left === null ? 0 : this.left.left.depth;
        let lrDepth = this.left.right === null ? 0 : this.left.right.depth;

        if (lDepth < lrDepth) {
            // LR rotation consists of a RR rotation of the left child
            this.left.rotateRR();
            // plus a LL rotation of the node which happens anyway
        }
        this.rotateLL();

    } else if (lDepth + 1 < rDepth) {
        // RR or RL roation
        let rrDepth = this.right.right === null ? 0 : this.right.right.depth;
        let rlDepth = this.right.left === null ? 0 : this.right.left.depth;

        if (rlDepth > rrDepth) {
            // RR rotation consists of a LL rotation of the right child
            this.right.rotateLL();
            // plus a RR rotation of this node, which happens anyway
        }
        this.rotateRR();
    }
}

AVLTree.prototype.insert = function (value) {
    let childInsrted = false;

    if (value === this.value) {
        return false; // should be all unique
    } else if (value < this.value) {
        if (this.left === null) {
            this.left = new AVLTree(value);
            childInsrted = true;
        } else {
            childInsrted = this.left.insert(value);
            if (childInsrted === true) this.balance();
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = new AVLTree(value);
            childInsrted = true;
        } else {
            childInsrted = this.right.insert(value);
            if (childInsrted === true) this.balance();
        }
    }
    if (childInsrted === true) this.setDepthBasedOnChildren();
    return childInsrted;
}

AVLTree.prototype.remove = function (value) {
    return deleteRecursively(this, value);

    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (root.value < value) {
            root.right = deleteRecursively(roo.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                root = root.left;
                return root;
            } else if (!root.right) {
                root = root.right;
                return root;
            } else {
                let temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        root.updateInNewLocation();
        return root;
    }

    function findMin(root) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }
}


var avlTest = new AVLTree(1, '');
avlTest.insert(2);
avlTest.insert(3);
avlTest.insert(4);
avlTest.insert(5);
avlTest.insert(123);
avlTest.insert(203);
avlTest.insert(2222);
console.log(avlTest);