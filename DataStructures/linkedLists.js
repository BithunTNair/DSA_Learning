class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;

    };
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;

        }
    };
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            };
            current.next = newNode
        }
        this.size++;

    };
    removeNode(index) {
        if (!this.head) {
            console.log('List is empty');
            return;

        }
        let removedNodeDetails;
        if (index === 0) {
            removedNodeDetails = this.head;
            this.head = removedNodeDetails.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNodeDetails = prev.next;
            prev.next = removedNodeDetails.next;

        }
        this.size--;
        return removedNodeDetails.data
    };
    search(value) {
        if (!this.head) {
            return;
        }
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data == value) {
                return `value ${value} is found at index ${index}`
            };
            current = current.next;
            index++

        };
        return `value ${value} is not in the list`

    }

};

const link = new LinkedList();
link.prepend(10)
link.prepend(20)
link.prepend(30);
link.append(40);
link.print();
console.log(link.search(200));





