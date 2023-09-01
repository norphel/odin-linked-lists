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
  size() {
    let count = 0;
    if (!this.head()) {
      return 0;
    }
    let current = this.head();
    while (current.nextNode !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
}
class Node {
  constructor(value = null, newNode = null) {
    this.value = value;
    this.nextNode = newNode;
  }
}

let list = new LinkedList();
console.log(list.size());
list.append(1);
list.append("a");
console.log(list.size());
