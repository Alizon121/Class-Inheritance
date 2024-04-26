const Person = require('./person');

class Teacher extends Person {
// constructor takes in all instances we desire
constructor (firstName, lastName, subject, yearsOfExperience) {
// super function takes in all instances from a parent class
super(firstName, lastName) 
this.subject = subject
this.yearsOfExperience = yearsOfExperience

}

// Static method that takes in an array of teacher intances
// the teachers argument is an array of objects
// Use the class instance to access the elements in the object
static combinedYearsOfExperience (teachers) {

  // return the sum of all teachers years of experience
 return teachers.reduce((acc, teacher) => acc + teacher.yearsOfExperience, 0)

}

}
 
// parentheses invokes the class creating an object
// We always need to use the new keyword when making variable instances that depend on a class.
const teacher1 = new Teacher("susan", "jones", "biology", 5);
const teacher2 = new Teacher("bobby", "roberts", "math", 15);
console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]))

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
