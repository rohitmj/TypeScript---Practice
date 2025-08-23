// Problem: Valid Parentheses
// Given a string of brackets (), [], {}, check if it's validly balanced.

export function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = { ')': '(', ']': '[', '}': '{' };

  for (let ch of s) {
    if ([')', ']', '}'].includes(ch)) {
      if (stack.pop() !== map[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}

// Tests
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true
