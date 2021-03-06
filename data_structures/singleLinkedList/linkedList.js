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
  print() {
    let arr = [];
    while (this.head) {
      arr.push(this.head.value);
      this.head = this.head.next;
    }
    console.log(arr);
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

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if we dont use the else scope, the code would executed every time we add one node
      // which will give us an object that referees to itself over and over again
      // this else statement would protect us from that
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  find(index) {
    // edge cases
    if (index < 0 || index >= this.length) return -1;
    // let found = null;
    // let count = 0;
    // let cur = this.head;
    // while (cur) {
    //   found = cur;
    //   if (count === index) {
    //     return found;
    //   }
    //   count++;
    //   cur = cur.next;
    // }
    // return -1;
    // another way

    let count = 0;
    let cur = this.head;
    while (count !== index) {
      count++;
      cur = cur.next;
    }
    return cur;
  }

  set(index, val) {
    // if (index < 0 || index >= this.length) return -1;
    // let count = 0;
    // let cur = this.head;
    // while (count !== index) {
    //   count++;
    //   cur = cur.next;
    // }
    // if (count === index) {
    //   cur.value = val;
    // }
    // return cur;
    // another solution
    let cur = this.find(index);
    if (cur !== -1) {
      cur.value = val;
      return this;
    } else {
      return -1;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prev = this.find(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // if (!this.head) return "List is empty";
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let prev = this.find(index - 1);
    let deleted = this.find(index);
    prev.next = deleted.next;
    cur = null;
    this.length--;
    return deleted;
  }

  reverse() {
    // [1 ----> 2 ----  3 ----> null]
    // let prev = null; // [1]
    // let cur = this.head; // [1],[2]
    // while (cur) {
    //   // if cur has a value then iterate
    //   let next = cur.next; // make a new var hold the next node for the current node [2],[3], [null]
    //   cur.next = prev; // to hold the pervious node [null],[1], [2]
    //   prev = cur; // [1],[2],[3]
    //   cur = next; // [2],[3],[null]
    // }
    // this.head = prev;

    // another solution
    let node = this.head;
    this.head = this.tail;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
// [1 --> 2 ---> 3 ---> 4 ---> null]
let list = new SinglyLinkedList();
// list.push(1);
// list.push(2);
// pop the last node in the array
// console.log("1", list.length); //2
// list.pop();
// console.log("2", list.length); // 1
// list.pop();
// console.log("3", list.length); // 0
// list.pop();
// console.log("4", list.length); // -1

// delete the first node in the list
// list.shift();
// list.shift();
// list.shift();
// console.log("this is head", list.head);
// console.log("this is tail", list.tail);
// console.log(list.length);

// unshifting pushing new node to the beginning of the list
// console.log(list.unshift("second"));
// console.log(list.unshift("first"));
// console.log(list.find());

// find element that corresponds to the index
// list.unshift("second");
// list.unshift("first");
// console.log(list.find(2));

// set a new value for the a specific node depends on its index
// list.push(1);
// list.push(2);
// list.push(4);
// console.log(list.set(2, 3));
// console.log(list.find(2));

// insert a new node at specific index
// list.push(1);
// list.push(2);
// list.push(4);
// console.log(list);
// console.log(list.find(2));

// remove a node at specific index
// list.push(0);
// list.push(1);
// list.push(2);
// // console.log(list.length);
// list.remove(2);
// // console.log(list);
// list.traverse();

// reverse
list.push(1);
list.push(2);
list.push(3);
console.log(list.reverse());
