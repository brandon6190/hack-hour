// Refactor by creating a Node class to hold the value and next pointer and to seperate the Node object from the list object
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

	addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }

	removeDuplicates() {
		let currentNode = this;

		while (currentNode !== null) {
			let nextDistinctNode = currentNode.next;
			while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
				nextDistinctNode = nextDistinctNode.next;
			}
			currentNode.next = nextDistinctNode;
			currentNode = nextDistinctNode;
		}

		return this;
	}
}

// Test

const myLinkedList = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);

console.log('nodes before: ', myLinkedList.getNodesInArray());
console.log('removed duplicates: ', myLinkedList.removeDuplicates());
console.log('nodes after: ', myLinkedList.getNodesInArray());

