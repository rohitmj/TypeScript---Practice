// Mastering functions in TypeScript

function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;

}

console.log(greet());
console.log(greet("Rohit"));

// Return types
function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(1,2));

// function expressions
const divide = (a: number, b: number): number => a / b;
console.log(divide(10,2));

// Common Methods Array
const nums = [3,1,3,2];

nums.sort((a,b) => a - b);

const evens = nums.filter(n => n % 2 === 0);

const doubled = nums.map(n => n * 2);

const sum = nums.reduce((acc, n) => acc + n, 0);

// Finding Median

function findMedian(arr: number[]): number {
    if (arr.length === 0) throw new Error("Empty array");
    arr.sort((a,b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 ? arr[mid]: arr[mid - 1];

}

console.log(findMedian([1,3,2,4]));

// Remove Duplicates
function removeDuplicates(nums: number[]): number[]{
    return Array.from(new Set(nums));
}

console.log(removeDuplicates([1,2,1,2,3]));

// Map & Set

const freq = new Map<string, number> ();
const str = "tiktok";

for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
}
console.log(freq);


