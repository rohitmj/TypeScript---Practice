
function returnOdd(numb: number[]): number[] {
  let total: number[] = [];
  for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 === 1) {
      total.push(numb[i]);
    }
  }
  return total;
}

console.log(returnOdd([1, 2, 3, 4, 5, 6, 7, 8])); // [1,3,5,7]
