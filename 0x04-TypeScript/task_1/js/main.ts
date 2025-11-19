interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract: boolean;
  yearsOfExperience?: number;

  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract: false
};

console.log(director1);


interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));