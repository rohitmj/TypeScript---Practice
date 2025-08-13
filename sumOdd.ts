
function sumOdd(all: number[]): number {
  let total = 0;
  for (let i = 0; i < all.length; i++) {
    if (all[i] % 2 === 1) {
      total += all[i];
    }
  }
  return total;
}

console.log(sumOdd([1, 2, 3, 4])); // 4
