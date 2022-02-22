class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

	addMany(values) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new Node(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this.head;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }

	removeDuplicates() {
		let currentNode = this.head;

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

const node = new Node(2);
const myLinkedList = new LinkedList(node).addMany([1, 3, 4, 4, 4, 5, 6, 6]);

console.log({myLinkedList});
console.log('nodes before: ', myLinkedList.getNodesInArray());
console.log('removed duplicates: ', myLinkedList.removeDuplicates());
console.log('nodes after: ', myLinkedList.getNodesInArray());

