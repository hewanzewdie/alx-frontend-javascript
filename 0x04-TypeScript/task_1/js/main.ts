interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: true,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher1);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'Jane',
  lastName: 'Doe',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract: false,
};

console.log(director1);

interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  firstName = firstName[0]; // convert to first letter
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
