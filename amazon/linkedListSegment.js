// const head = new SinglyLinkedList(3)
// head.next = new SinglyLinkedList(2)
// head.next.next = new SinglyLinkedList(1)
// head.next.next.next = new SinglyLinkedList(4)

class SinglyLinkedList {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

SinglyLinkedList.prototype.push = function(data) {
    const newNode = new SinglyLinkedList(data)
    this.next = newNode
}

const head = new SinglyLinkedList(3)
head.next = new SinglyLinkedList(2)
head.next.next = new SinglyLinkedList(1)
head.next.next.next = new SinglyLinkedList(3)
head.next.next.next.next = new SinglyLinkedList(2)
head.next.next.next.next.next = new SinglyLinkedList(1)
head.next.next.next.next.next.next = new SinglyLinkedList(3)
head.next.next.next.next.next.next.next = new SinglyLinkedList(2)
head.next.next.next.next.next.next.next.next = new SinglyLinkedList(1)
head.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(3)
head.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(2)
head.next.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(1)
head.next.next.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(3)
head.next.next.next.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(2)
head.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(1)
head.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(3)
head.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(2)
head.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new SinglyLinkedList(1)

function locateLongestList(head) {
    let currentNode = head, mode = undefined, headIsSet = false, prevNode = currentNode;
    while(currentNode) {
        if(!headIsSet
            && ((prevNode.data == currentNode.data - 1)
            || (prevNode.data == currentNode.data))
        ){
            headIsSet = true
            head = currentNode
            prevNode = currentNode
            currentNode = currentNode.next
            continue
        }

        if(currentNode.data == prevNode.data - 1 || (prevNode.data == currentNode.data)) {
            // console.log('next data: ', currentNode.data);
            prevNode = currentNode
        } else {
            prevNode.next = currentNode.next
        }
        currentNode = currentNode.next
    }
    console.log(JSON.stringify(head));
}
locateLongestList(head);