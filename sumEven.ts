// Problem: Sum of Even Numbers
// Return the sum of all even numbers in an array.

export function sumEven(nums: number[]): number {
  return nums.filter(n => n % 2 === 0).reduce((a, n) => a + n, 0);
}

// Tests
console.log(sumEven([1,2,3,4])); // 6
console.log(sumEven([2,4,9]));   // 6
console.log(sumEven([]));        // 0
