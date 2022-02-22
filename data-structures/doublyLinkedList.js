const CircularJSON = require('circular-json');

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === node.value) {
        // change the next node to point at prev node
        currentNode.next.prev = currentNode.prev;
        // change the prev node to point at next node
        currentNode.prev.next = currentNode.next;

        // seperate current node from list
        currentNode.next = null;
        currentNode.prev = null;

        // switch head node for currentNode and attach currentNode to list
        this.head.prev = currentNode;
        let currentList = this.head;
        this.head = currentNode;
        this.head.next = currentList;
      }
      currentNode = currentNode.next;
    }
  }

  setTail(node) {
    this.tail = node;
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}

exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;






