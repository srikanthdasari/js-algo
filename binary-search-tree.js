// binary search tree

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insert = function (value) {
    let thisNode = { left: null, right: null, value };

    if (!this.root) {
        this.root = thisNode;
    } else {
        // loop traverse until
        let currentRoot = this.root;
        while (true) {
            if (currentRoot.value > value) {
                // lets increment if tis not null and insert if it is null
                if (currentRoot.left != null) {
                    currentRoot = currentRoot.left;
                } else {
                    currentRoot.left = thisNode;
                    break;
                }
            } else if (currentRoot.value < value) {
                // if bigger than current put it in right node
                if (currentRoot.right != null) {
                    currentRoot = currentRoot.right;
                } else {
                    currentRoot.left = thisNode;
                    break;
                }

            } else {
                break;
            }
        }
    }

}

BinarySearchTree.prototype.remove = function (value) {
    deleteRecursively(this.root, value);
    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = deleteRecursively(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                root = root.left;
                return root;
            } else {
                let temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }

        return root;
    }
}

BinarySearchTree.prototype.findNode = function (value) {
    let currentRoot = this.root,
        found = false;

    while (currentRoot) {
        if (currentRoot.value > value) {
            currentRoot = currentRoot.left;
        } else if (currentRoot.value < value) {
            currentRoot = currentRoot.right;
        } else {
            found = true;
            break;
        }
    }

    return found;
}

function findMin(root) {
    while (root.left) {
        root = root.left;
    }
    return root;
}