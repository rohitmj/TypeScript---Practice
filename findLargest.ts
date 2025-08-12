
/**
 * Find largest number in an array
 */
function findLargest(numbs: number[]): number {
  let largest = numbs[0];
  for (let i = 1; i < numbs.length; i++) {
    if (numbs[i] > largest) {
      largest = numbs[i];
    }
  }
  return largest;
}

console.log(findLargest([5,3,7,1])); // 7
