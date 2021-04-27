// linked list is one type of the data structures
// it contains a head and tail and length
// it consists nodes and each node has value and pointer to another node or null
// it have no idexes
// insertion and deletion are cheap in it
// random access is not allowed

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// bad practice
// let firstNode = new Node("Hello");
// firstNode.next = new Node("how");
// firstNode.next.next = new Node("are");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push = (val) => {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  traverse() {
    while (this.head !== null) {
      console.log(this.head.value);
      this.head = this.head.next;
    }
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let cur = this.head;
    let temp = cur;
    while (cur.next) {
      temp = cur;
      cur = cur.next;
    }
    temp.next = null;
    cur = temp;
  }
}
// [1 --> 2 ---> 3 ---> 4 ---> null]
let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.pop();

list.traverse();
