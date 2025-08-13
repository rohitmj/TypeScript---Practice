
function returnEven(numb: number[]): number[] {
  let total: number[] = [];
  for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 === 0) {
      total.push(numb[i]);
    }
  }
  return total;
}

console.log(returnEven([1, 2, 3, 4, 5, 6, 7, 8])); // [2,4,6,8]
