// Primitives
let age: number = 25;
let name: string = "Rohit";
let ok: boolean = true;

// Array & Objects
const nums: number[] = [3, 1, 2];
type User = { id: number; handle: string };
const u: User = { id: 1, handle: "rmj" };

// functions (always write parameter + return types)
function add(a: number, b: number): number{
    return a + b;
}

console.log(add(3, 4));

// functions (to build a square function)
function square(a: number): number{
    return a*a;
}

console.log(square(5) === 25);