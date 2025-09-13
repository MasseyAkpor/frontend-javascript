// task_1/js/main.ts

// -----------------------------
// Teacher interface 
// -----------------------------
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "Massey",
  lastName: "Akpor",
  fullTimeEmployee: true,
  location: "Cape Coast",
};

const teacher2: Teacher = {
  firstName: "Sarah",
  lastName: "Johnson",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Accra",
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// -----------------------------
// printTeacher function + interface
// -----------------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // J. Doe

// -----------------------------
// StudentClass with interfaces
// -----------------------------

// Interface describing the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class (its methods)
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student: StudentClassInterface = new StudentClass("Massey", "Akpor");
console.log(student.displayName()); // Massey
console.log(student.workOnHomework()); // Currently working
