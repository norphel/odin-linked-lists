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

  pop() {
    let totalNodes = this.size();
    if (totalNodes === 1) {
      this.headNode = null;
    } else {
      let penUltimateNode = this.at(totalNodes - 2);
      penUltimateNode.nextNode = null;
    }
  }

  contains(value) {
    let current = this.head();
    if (!current) {
      return false;
    }
    while (current.nextNode !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    if (current.value === value) {
      return true;
    } else {
      return false;
    }
  }

  find(value) {
    let currentIndex = 0;
    let current = this.head();

    if (!current) {
      return null;
    }
    while (current.nextNode !== null) {
      if (current.value === value) {
        return currentIndex;
      }
      current = current.nextNode;
      currentIndex++;
    }
    if (current.value === value) {
      return currentIndex;
    } else {
      return null;
    }
  }

  toString() {
    let values = [];
    let current = this.head();
    if (!current) {
      values.push(" null ");
    } else {
      while (current.nextNode !== null) {
        values.push(`( ${current.value} )`);
        current = current.nextNode;
      }
      values.push(`( ${current.value} )`);
      values.push(" null ");
    }
    return values.join(" -> ");
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    if (index < 0 || index > this.size()) {
      console.log("Index out of range");
    } else if (index === 0) {
      let firstNode = this.head();
      this.headNode = newNode;
      newNode.nextNode = firstNode;
    } else if (index === this.size()) {
      let lastNode = this.tail();
      lastNode.nextNode = newNode;
    } else {
      let prevNode = this.at(index - 1);
      let nodeAtIndex = this.at(index);
      prevNode.nextNode = newNode;
      newNode.nextNode = nodeAtIndex;
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
list.append(1);
list.append(3);
console.log(list.toString()); //( 1 ) -> ( 3 ) ->  null
list.insertAt(2, 1);
console.log(list.toString()); //( 1 ) -> ( 2 ) -> ( 3 ) ->  null
list.insertAt(0, 0);
console.log(list.toString()); //( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) ->  null
list.insertAt(4, 4);
console.log(list.toString()); //( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) ->  null
list.insertAt(5, 6); //Index out of range
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) ->  null
