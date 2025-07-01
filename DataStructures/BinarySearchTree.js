class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };
    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;

        }
        let temp = this.root;
        while (true) {
            if (newNode.data == temp.data) return undefined;
            if (newNode.data < temp.data) {
                if (temp.left == null) {
                    temp.left = newNode;
                    return this;
                } else {
                    temp = temp.left;

                }

            } else {
                if (newNode.data > temp.data) {

                    if (temp.right == null) {
                        temp.right = newNode;
                        return this
                    } else {
                        temp = temp.right;
                    }

                }
            }
        }

    };
    search(value) {
        if (!this.root) return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.data) {
                temp = temp.left;
            } else if (value > temp.data) {
                temp = temp.right;
            } else {
                return true;
            }

        }
        return false;
    }
};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(6);
console.log(tree);
console.log(tree.search());



