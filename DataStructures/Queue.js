class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
};

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    enqueue(value) {
        const newItem = new Node(value);
        if (this.length == 0) {
            this.first = newItem;
            this.last = newItem;
        }
        this.last.next = newItem;
        this.last = newItem;
        this.length++;
        return this;
    };
    dequeue(){
        if(this.length==0){
            return undefined;
        }
        if(this.length==1){
            this.first=null;
            this.last=null;
        }
        let temp=this.first;
        this.first=this.first.next;
        temp.next=null;
        this.length--;
        return this;
    }
};

const QueueObj= new Queue(1);
console.log(QueueObj.enqueue(10));
console.log(QueueObj.enqueue(20));
console.log(QueueObj.enqueue(30));
console.log(QueueObj.enqueue(40));
console.log(QueueObj.dequeue());
console.log(QueueObj.dequeue());
