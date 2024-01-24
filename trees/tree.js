/**
 * A class that represents  each category
 */
class TreeNode {
    constructor(id, value) {
      this.id = id;
      this.label = value;
      this.children = [];
    }
}

/**
 * The tree class that serializes the query result fetched from the tree database
 */
class Tree {
  constructor(id, value) {
    this.root = new TreeNode(id, value);
  }

  /**
   * 
   * @param node accepts an instance of TreeNode Class
   * @returns an array of TreeNode class after a traversal
   */
  postOrderTraversal(node = this.root) {
    if (node.children.length === 0) {
      return node;
    } else {
      var arr = [];
      for (var i = 0; i < node.children.length; i++) {
        var children = this.postOrderTraversal(node.children[i]);
        arr = arr.concat(children);
      }
      arr.push(node);
      return arr;
    }
  }

  /**
   * 
   * @param id the id of an instance of a TreeNode class
   * @param parentNodeId id of the TreeNode instance that we want to add to it's children
   * @param value 
   * @returns true if it adds the child Node
   * @returns false if it doesn't add the child Node
   */
  insert(id, parentNodeId, value) {
    let nodes = this.postOrderTraversal();
    if(!Array.isArray(nodes)) nodes = [nodes];
    for (let node of nodes) {
      if (node.id === parentNodeId) {
        node.children.push(new TreeNode(id, value));
        return true;
      }
    }
    return false;
  }

  BFS() {
    let queue = [], visited = [], node = null;
    queue.push(this.root)
    let traverse = () => {
        if(!queue.length) return;
        node = queue.shift();
        visited.push(node.label);
        for(let child of node.children) {
            queue.push(child)
        }
        traverse()
    }
    traverse();
    return visited;
  }

  DFS_Pre_Order() {
    const current = tree.node, data = [];
    function traverse(node) {
        data.push(node.label);
        if(node.children.length) {
            for(let child of node.children) {}
        }
    }
  }
}

const tree = new Tree(1, 'FCT');
tree.insert(2, 1, 'AMAC');
tree.insert(3, 1, 'ABAJI');
tree.insert(4, 1, 'BWARI');
tree.insert(5, 1, 'Gwagwalada');
tree.insert(6, 1, 'Kuje');
tree.insert(7, 1, 'Kwali');
tree.insert(8, 2, 'Wuse');
tree.insert(9, 2, 'Gwarimpa');
tree.insert(10, 9, 'Lifecamp');
console.log(JSON.stringify(tree));
console.log(tree.BFS());
console.log(tree.postOrderTraversal());