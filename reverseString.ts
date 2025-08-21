
// reverseString.ts
export function reverseString(s: string): string {
  return s.split('').reverse().join('');
}

// Tests
console.log(reverseString("hello") === "olleh");
console.log(reverseString("TypeScript") === "tpircSepyT");
console.log(reverseString("") === "");
