const arr = [3, 1, 2];

// numeric sort - Always give a comparator
arr.sort((a,b) => a - b);

// core transforms
const doubled = arr.map ( x => x * 2);
const evens = arr.filter( x => x % 2 === 0);
const sum = arr.reduce((acc, x) => acc + x, 0);

function sumEven(nums: number[]): number {
    return nums.filter(x => x % 2 === 0). reduce((a, x) => a + x, 0);
}

console.log(sumEven([1,2,3,4]) === 6);

