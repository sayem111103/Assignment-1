//Problem 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers?.filter((d) => d % 2 === 0);
  return evenNumbers;
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Problem 2:
const reverseString = (data: string): string => {
  const reverse = data?.split("").reverse().join("");
  return reverse;
};

console.log(reverseString("typescript"));

//Problem 3:
const checkType = (param: string | number): string => {
  if (typeof param === "string") {
    return "String";
  }
  if (typeof param === "number") {
    return "Number";
  }
  return "please provide valid input";
};

console.log(checkType("Hello"));
console.log(checkType(42));

//Problem 4:
const getProperty = <T extends object, k extends keyof T>(
  userData: T,
  key: k,
): T[k] => {
  return userData[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

//Problem 5:
interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const myBook: IBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const toggleReadStatus = (Book: IBook) => {
  if (Book.isRead) {
    Book.isRead = false;
  } else {
    Book.isRead = true;
  }
  return Book;
};

console.log(toggleReadStatus(myBook));

//Problem 6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

//Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = set1.intersection(set2);
  return [...result];
};

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
