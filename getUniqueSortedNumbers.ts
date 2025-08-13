
function getUniqueSortedNumbers(numbers: number[]): number[] {
  return [...new Set(numbers)].sort((a, b) => a - b);
}

console.log(getUniqueSortedNumbers([5, 3, 8, 3, 1, 5, 2])); // [1,2,3,5,8]
