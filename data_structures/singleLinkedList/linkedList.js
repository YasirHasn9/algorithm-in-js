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
    this.tail = temp;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return "List is empty";
    }
    return cur;
  }

  shift() {
    if (!this.head) return undefined;
    let cur = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return cur;
  }
}
// [1 --> 2 ---> 3 ---> 4 ---> null]
let list = new SinglyLinkedList();
list.push(1);
list.push(2);
// pop the last node in the array
// console.log("1", list.length); //2
// list.pop();
// console.log("2", list.length); // 1
// list.pop();
// console.log("3", list.length); // 0
// list.pop();
// console.log("4", list.length); // -1

// delete the first node in the list
list.shift();
list.shift();
list.shift();
console.log("this is head", list.head);
console.log("this is tail", list.tail);
console.log(list.length);
