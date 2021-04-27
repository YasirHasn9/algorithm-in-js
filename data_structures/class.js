class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.isLate = false;
    this.countLateTimes = 0;
    this.absent = 0;
    this.suspend = false;
    this.callParents = false;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
  markLate() {
    this.isLate = true;
    this.countLates();
  }
  countLates() {
    if (this.isLate) {
      this.countLateTimes += 1;
    }
  }
  markAbsent() {
    if (this.countLateTimes === 3) {
      this.absent += 1;
    }
    this.reSetValues();
    console.log(this.absent);
  }
  reSetValues() {
    this.isLate = false;
    this.countLateTimes = 0;
  }

  markSuspend() {
    if (this.absent === 3) return (this.suspend = true);
  }
}

let joe = new Student("Joe", "Doe", 4);
joe.fullName(); // Joe Doe
joe.year; // 4
joe.markLate();
joe.markLate();
joe.markLate();
joe.markAbsent();
joe.markLate();
joe.markLate();
joe.markLate();
joe.markAbsent();
joe.markLate();
joe.markLate();
joe.markLate();
joe.markAbsent();
console.log(joe);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.hypot(dx * dy);
  }
}

let p1 = new Point(10, 15);
let p2 = new Point(5, 9);
console.log(Point.distance(p1, p2));
