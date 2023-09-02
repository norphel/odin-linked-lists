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
    } else {
      let tailNode = this.tail();
      tailNode.nextNode = new Node(value);
    }
  }

  size() {
    let count = 0;
    if (!this.head()) {
      return 0;
    } else {
      let current = this.head();
      while (current.nextNode !== null) {
        count++;
        current = current.nextNode;
      }
      count++;
      return count;
    }
  }

  at(index) {
    let current = this.head();
    for (let i = 0; i < this.size(); i++) {
      if (i === index) {
        return current;
      }
      current = current.nextNode;
    }
    return "Out of bound";
  }
}
class Node {
  constructor(value = null, newNode = null) {
    this.value = value;
    this.nextNode = newNode;
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
console.log(list.at(3));
