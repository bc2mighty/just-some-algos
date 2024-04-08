class SinglyLinkedList {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// const head = new SinglyLinkedList(3)
// head.next = new SinglyLinkedList(2)
// head.next.next = new SinglyLinkedList(1)
// head.next.next.next = new SinglyLinkedList(4)

const head = new SinglyLinkedList(1)
head.next = new SinglyLinkedList(6)
head.next.next = new SinglyLinkedList(7)
head.next.next.next = new SinglyLinkedList(8)
head.next.next.next.next = new SinglyLinkedList(10)

function locateLongestList(head) {
    let currentNode = head, mode = undefined, sameValueNode = false;
    while(currentNode) {
        if(!currentNode.next) break
        if(!mode && currentNode.next && currentNode.next.data == currentNode.data - 1){ 
            mode = 'decreasing'
            head = currentNode
            currentNode = head;
        }

        if(!mode && currentNode.next && currentNode.next.data == currentNode.data + 1){ 
            mode = 'increasing'
            head = currentNode
            currentNode = head;
        }

        if(mode && currentNode.next.data == currentNode.data) {
            sameValueNode = true
            currentNode = currentNode.next
            continue
        }

        if(sameValueNode && currentNode.next.data != currentNode.data) {
            currentNode.next = null
            break
        }

        if(mode == 'decreasing' && currentNode.next && currentNode.next.data != currentNode.data - 1){ 
            currentNode.next = null
            break
        }

        if(mode == 'increasing' && currentNode.next && currentNode.next.data != currentNode.data + 1){ 
            currentNode.next = null
            break
        }
        currentNode = currentNode.next
    }
    console.log(head);
}
locateLongestList(head);