
function filterAboveThreshold(numbers: number[], threshold: number): number[] {
  let total: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      total.push(numbers[i]);
    }
  }
  return total;
}

console.log(filterAboveThreshold([3, 10, 6, 1], 5)); // [10, 6]
