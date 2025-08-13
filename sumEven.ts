
function sumEven(all: number[]): number {
  let total = 0;
  for (let i = 0; i < all.length; i++) {
    if (all[i] % 2 === 0) {
      total += all[i];
    }
  }
  return total;
}

console.log(sumEven([1, 2, 3, 4])); // 6
