export default class BST {
  constructor() {
    this.root = null;
  }
  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }
  insert(insertedNode) {       // This function was previously called insertNode because that's what it's doing.
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }
}