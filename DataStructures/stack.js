class Node{
    constructor(value){
        this.data= value;
        this.next=null;
        this.length=0;
    }
};

class Stack{
    constructor(value){
        const newNode= new Node(value)
        this.first= newNode;
        this.length=1;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length==0){
            this.first=newNode;
        }else{
            newNode.next= this.first;
            this.first= newNode;
            this.length++;
            return this
        }
    };
    pop(){
        if(!this.length==0){
            return undefined;
        }
        let temp= this.first;
        this.first=this.first.next;
        temp.next=null;
        this.length--;
        return this
    }
};

const stackObj= new Stack();
stackObj.push(10);
stackObj.push(20);
stackObj.push(30);
console.log(stackObj);







