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
      let found = false;
      let traverse = (node) => {
        console.log(node);
        if(!node.left && !node.right) return false;
        if(node.value < value){ 
          node = node.right
        } else if(node.value > value) {
          node = node.left
        } else if (node.value === value) {
          found = true;
          return found;
        };
        traverse(node);
      }
      traverse(node);
      return found;
    }

    BFS(){
      let queue = [], visited = [], node = null, leafNodes = [];
      queue.push(this.root)
      while(queue.length) {
        node = queue.shift();
        if(!node.left && !node.right) leafNodes.push(node.value)
        visited.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      console.log(leafNodes);
      return visited;
    }

    DFS_Pre_Order() {
      const current = tree.root, data = [];
      let traverse = (node) => {
        data.push(node.value);
        // console.log(node.value);
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
      }
      traverse(current);
      return data;
    }

    DFS_Post_Order() {
      const current = tree.root, data = [];
      const traverse = (node) => {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
      }
      traverse(current);
      return data;
    }

    DFS_In_Order() {
      const current = this.root, data = [];
      const traverse = (node) => {
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
      }
      traverse(current);
      return data;
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
  // let found = tree.findRecursively(19)
  // console.log(`found: `,found);
  // const bfsResult = tree.BFS();
  // console.log(`bfsResult: `, bfsResult);
  // const dfsPreOrder = tree.DFS_Pre_Order();
  // console.log(`dfsPreOrder: `, dfsPreOrder);
  const dfsPostOrrder = tree.DFS_Post_Order();
  console.log(`dfsPostOrrder: `, dfsPostOrrder);
  // const dfsInOrrder = tree.DFS_In_Order();
  // console.log(`dfsInOrrder: `, dfsInOrrder);

  // const newTree = new BinarySearchTree();
  // newTree.insert(100);
  // newTree.insert(50);
  // newTree.insert(200);
  // newTree.insert(25);
  // newTree.insert(75);
  // newTree.insert(125);
  // newTree.insert(350);
  // newTree.insert(30);
  // newTree.insert(60);
  
  //                  100
  //           50             200
  //       25       75      125      350
  //          30  60   
  // console.log(newTree);
  // console.log(newTree.DFS_Pre_Order());
  // const dfsInOrrder = newTree.DFS_In_Order();
  // console.log(`dfsInOrrder: `, dfsInOrrder);
