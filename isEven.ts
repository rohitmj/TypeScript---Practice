
/**
 * Even/Odd checker
 */
function isEven(num: number): string {
  if (num % 2 === 0) return "Even";
  return "Odd";
}

console.log(isEven(4)); // Even
console.log(isEven(7)); // Odd
