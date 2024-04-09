class SinglyLinkedList {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.next = null
    }
}
const linkedList = new SinglyLinkedList(0, 10)
linkedList.next = new SinglyLinkedList(1, 10);
linkedList.next.next = new SinglyLinkedList(5, 10);
linkedList.next.next.next = new SinglyLinkedList(7, 10);
linkedList.next.next.next.next = new SinglyLinkedList(7, 5);
linkedList.next.next.next.next.next = new SinglyLinkedList(20, 5);
linkedList.next.next.next.next.next.next = new SinglyLinkedList(40, 5);
console.log(linkedList);

function removeMiddlePoints(head) {
    let currentNode = head, prevNode = null;
    while(currentNode) {
        if(prevNode && prevNode.x == currentNode.x || prevNode.y == currentNode.y) {
            prevNode.next = currentNode.next
        } else {
            prevNode = currentNode;
        }
        currentNode = currentNode.next;
    }
    console.log(head);
}