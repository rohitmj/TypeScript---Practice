
// findMax.ts
export function findMax(nums: number[]): number {
  return Math.max(...nums);
}

// Tests
console.log(findMax([10, 2, 30]) === 30);
console.log(findMax([-5, -2, -11]) === -2);
console.log(findMax([7]) === 7);
