
/**
 * Reverse a string
 */
function reverseString(name: string): string {
  return name.split("").reverse().join("");
}

console.log(reverseString("trollo")); // "ollort"
