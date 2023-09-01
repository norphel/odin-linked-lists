class LinkedList {
  head() {
    return this.headNode;
  }
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head()) {
      this.headNode = newNode;
    } else {
      newNode.nextNode = this.head();
      this.headNode = newNode;
    }
  }
}
class Node {
  constructor(value = null, newNode = null) {
    this.value = value;
    this.nextNode = newNode;
  }
}

let list = new LinkedList();
console.log(list); //LinkedList {}
list.prepend(2);
console.log(list); //LinkedList { headNode: Node { value: 2, nextNode: null } }
list.prepend(1);
console.log(list); //LinkedList { headNode: Node { value: 1, nextNode: Node { value: 2, nextNode: null } } }
