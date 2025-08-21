function isValid(s: string): boolean {
  const stack: string[] = [];
  const pair: Record<string, string> = { ')': '(', ']': '[', '}': '{' };

  for (const ch of s) {
    if (ch in pair) {
      if (stack.length === 0) return false;
      const top = stack.pop()!;
      if (top !== pair[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}

// test locally
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
