// Problem: Range Sum
// Given l and r, return the sum of all numbers from l to r inclusive.

export function rangeSum(l: number, r: number): number {
  let sum = 0;
  for (let i = l; i <= r; i++) sum += i;
  return sum;
}

// Tests
console.log(rangeSum(1, 3));  // 6
console.log(rangeSum(5, 5));  // 5
console.log(rangeSum(-2, 2)); // 0
