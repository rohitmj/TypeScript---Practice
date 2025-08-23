// Problem: Two Sum
// Given an array of numbers and a target, return indices of two numbers that add up to the target.

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Tests
console.log(twoSum([2,7,11,15], 9));   // [0,1]
console.log(twoSum([3,2,4], 6));      // [1,2]
console.log(twoSum([3,3], 6));        // [0,1]
