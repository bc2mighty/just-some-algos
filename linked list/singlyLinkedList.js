class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add another Node
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length += 1;
        }
    }

    // Remove the tail
    pop() {
        let current = this.head;
        while(current) {
            if(!current.next.next) {
                console.log(current.next, current.val);
                this.tail = current;
                this.tail.next = null;
                this.length--;
                break;
            }
            current = current.next;
        }
    }

    // remove the head
    shift() {
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
    }

    // add item to the beginning of linked list
    unshift(val) {
        let newHead = new Node(val);
        let previousHead = this.head;
        newHead.next = previousHead;
        this.head = newHead;
        this.length++;
    }

    // return node at a particular index
    get(index) {
        if(this.length - 1 < index) return undefined;
        let current = this.head;
        let count = 0;
        while(current) {
            if(count === index) break;
            current = current.next;
            count += 1;
        }
        return current;
    }

    // set value for a particular index
    set(index, val) {
        if(this.length - 1 < index) return undefined;
        const foundNode = this.get(index);
        foundNode.val = val;
    }

    // insert a new node between two nodes
    insert(index, val) {
        if(this.length - 1 < index) return undefined;
        const newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nodeAtIndex = this.get(index);
        newNode.next = nodeAtIndex;
        prevNode.next = newNode;
        this.length += 1;
    }

    // remove a node
    remove(index) {
        const prev = this.get(index - 1);
        const next = this.get(index + 1);
        prev.next = next;
        this.length--;
    }

    // reverse a singly linked list
    reverse() {
        let count = 0;
        let head = this.head;
        let lastHeadNode = new Node(this.head.val);
        this.head = lastHeadNode;
        let newHead;
        
        while(head) {
            if(!head.next) break;
            newHead = new Node(head.next.val);
            newHead.next = this.head;
            this.head = newHead;
            
            head = head.next;
        }
    }
}

const newList = new SinglyLinkedList();
newList.push('1');
newList.push('2');
newList.push('3');
newList.push('4');
newList.push('5');
newList.push('6');
newList.reverse();
console.log(newList);