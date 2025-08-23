// Problem: Fibonacci Sequence
// Return the nth Fibonacci number.

export function fibonacci(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

// Tests
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
