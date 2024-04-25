const Person = require('./person');

// Making a child class named Student that inherits from Person parent class.

class Student extends Person {
  // Set new variables in the child constructor
constructor (firstName, lastName, major, GPA) {

  // super function should take in the desired parent instances 
super(firstName, lastName)
this.major = major
this.GPA = GPA
}

static compareGPA(student1, student2) {
//  Compare GPAs and return name of individual with higher GPA
// Refer to different students using dot notation

if (student1.GPA> student2.GPA) {
  return `${student1.firstName} ${student1.lastName} has the higher GPA.`
}
else if (student2.GPA > student1.GPA) {
  return `${student2.firstName} ${student2.lastName} has the higher GPA.`

} else {
  return "Both students have the same GPA"
}
}

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}