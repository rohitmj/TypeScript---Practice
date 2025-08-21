
// isValid.ts
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const open = new Set(["(", "[", "{"]);
  const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };

  for (const ch of s) {
    if (open.has(ch)) {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}

// Tests
console.log(isValid("()") === true);
console.log(isValid("()[]{}") === true);
console.log(isValid("(]") === false);
console.log(isValid("([)]") === false);
console.log(isValid("{[]}") === true);
