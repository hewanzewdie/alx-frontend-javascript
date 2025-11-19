// String literal type
export type Subjects = "Math" | "History";

// Function to teach class
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Example usage
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
