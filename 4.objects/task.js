function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
      }
      let sum = 0;
      for (let mark of this.marks) {
        sum += mark;
      }
      return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
