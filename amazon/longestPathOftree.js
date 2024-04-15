class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
        this.root = null;
    }
  
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return;
        }
        
        let current = this.root;
        while(true) {
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return false;
                } else {
                    current = current.left;
                }
            } else if(value > current.value) {
                if(current.right === null) {
                    current.right = newNode;
                    return false;
                } else {
                    current = current.right;
                }
            }
        }
    }

    BFS(){
      let queue = [], visited = [], node = null;
      queue.push(this.root)
      while(queue.length) {
        node = queue.shift();
        visited.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      return visited;
    }
}