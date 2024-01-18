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
  
    find(value) {
      if(!this.root) return false;
      let current = this.root;
      while(current) {
         if (!current) break;
         if(current.value < value){ 
           current = current.right
         } else if(current.value > value) {
           current = current.left
         } else if (current.value === value) { 
           return true
         };
      }
      return false;
    }
  
    findRecursively(value) {
      let node = this.root;
      let traverse = (node) => {
        console.log(node);
        if(!node.left && !node.right) return false;
        if(node.value < value){ 
          node = node.right
        } else if(node.value > value) {
          node = node.left
        } else if (node.value === value) { 
          return true;
        };
        traverse(node);
      }
      let found = traverse(node);
      return found;
    }
  }
  
  //                10
  //           5           13
  //        2     7    11      16
  //      1         6
  
  const tree = new BinarySearchTree()
  tree.insert(10);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(11);
  tree.insert(7);
  tree.insert(16);
  tree.insert(1);
  tree.insert(6);
  // console.log(tree);
  // console.log(tree.find(12));
  tree.findRecursively(17)