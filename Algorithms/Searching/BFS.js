// const traverse = (node) => {
//     const tree = { value: node.value };
//     tree.left = node.left === null ? null : traverse(node.left);
//     tree.right = node.right === null ? null : traverse(node.right);
//     return tree;
//   };

const bfs = () => {};

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert = (value) => {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          // go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  };
  lookup = (value) => {
    let currentNode = this.root;
    while (true) {
      if (!currentNode.left && !currentNode.right) null;
      if (value === currentNode.value) {
        return currentNode;
      } else {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
    }
  };

  breadthFirstSearch = () => {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      // set current node to first item in queue array
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  };

  // if I set queue and list inside of recursive function it will
  // reset to initial value every time
  bfsRecursive = (queue, list) => {
    // 언제 멈출지
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.bfsRecursive(queue, list);
  };
  //remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(tree.breadthFirstSearch());
console.log(tree.bfsRecursive([tree.root], []));
