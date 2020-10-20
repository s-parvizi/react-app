// Class

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");

    }
}

const person = new Person("Tom");
console.log(person.name);

// Inheritance
class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
      console.log("Teach");
    }
}

const teacher = new Teacher("John");
console.log(teacher.name)