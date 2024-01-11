class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        let newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
        this.length--;
    }

    shift() {
        let newHead = this.head.next;
        newHead.prev = null;
        this.head = newHead;
        this.length--;
    }

    unshift(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    get(index) {
        let halfLen = Math.ceil(this.length/2);
        let currentNode = null;
        if(index > halfLen) {
            let count = this.length - 1;
            currentNode = this.tail;
            
            while(index != count) {
                currentNode = currentNode.prev;
                count--;
            }
        } else {
            let count = 0;
            currentNode = this.head;
            
            while(index != count) {
                currentNode = currentNode.next;
                count++;
            }
        }
        return currentNode;
    }

    set(index, value) {
        let node = this.get(index)
        node.val = value;
    }

    insert(index, value) {
        const newNode = new Node(value);
        const currentNode = this.get(index);
        newNode.prev = currentNode.prev;
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
        newNode.next = currentNode;
        this.length++;
    }

    remove(index) {
        let indexNode = this.get(index);
        indexNode.prev.next = indexNode.next;
        this.length--;
    }
}