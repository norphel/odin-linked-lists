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
  tail() {
    let tmp = this.head();
    if (!tmp) {
      return null;
    }
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }
  append(value) {
    if (!this.head()) {
      this.headNode = new Node(value);
    }
    let tailNode = this.tail();
    tailNode.nextNode = new Node(value);
  }
}
class Node {
  constructor(value = null, newNode = null) {
    this.value = value;
    this.nextNode = newNode;
  }
}

let list = new LinkedList();
console.log(list);
list.append(2);
list.prepend(1);
list.append(3);
console.log(list);
