// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// };

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     append(data) {
//         const newNode = new Node(data)
//         if (this.head == null) {
//             this.head = newNode
//             return;
//         }
//         let current = this.head;
//         while (current.next !== null) {
//            current=current.next
//         }
//         current.next = newNode;
//     };

//     print(){
//         let current= this.head;
//         while(current.next!==null){
//             console.log(current.data);
//             current=current.next

//         }
//         console.log(current.data);

//     }
// };

// const list= new LinkedList()
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.print();


// Delete a node

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// };


// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     append(data) {
//         const newNode = new Node(data)
//         if (this.head == null) {
//             this.head = newNode
//             return;
//         }
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next
//         }
//         current.next = newNode;
//     };
//     delete(data) {
//         if (this.head === null) return;
//         if (this.head.data === data) {
//             this.head = this.head.next;
//         };
//         let current = this.head;
//         while (current.next !== null && current.next.data !== data) {
//             current = current.next;
//         }
//         if (current.next !== null) {

//             current.next = current.next.next;
//         }
//     };
//     print() {
//         let current = this.head;
//         while (current.next !== null) {
//             console.log(current.data);
//             current = current.next

//         }
//         console.log(current.data);

//     }
// };
// const list = new LinkedList();
// console.log('Before Deletion');
// list.append(10)
// list.append(20);
// list.append(30);
// list.print()
// console.log('After Deletion');
// list.delete(30);
// list.print()



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};


class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next
        }
        current.next = newNode;
    };
    insertAt(data, position) {
        const newNode = new Node(data)
        if (position == 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let previous = null;
        let count = 0;
        while (current.next !== null && count < position) {
            previous = current;
            current = current.next;
            count++;
        }
        newNode.next = current;
        previous.next = newNode;
    }
    display() {
        let current = this.head;
        while (current.next !== null) {
            console.log(current.data);
            current = current.next

        }
        console.log(current.data);

    }
};

const list= new LinkedList();
console.log('Before Insertion');

list.append(10);
list.append(20);
list.append(30);
list.display();
console.log('After Insertion');
list.insertAt(0,0);
list.display();
