// Anagram Practice (Sorting approach)
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const s1: string = s.split("").sort().join("");
  const t1: string = t.split("").sort().join("");

  return s1 === t1;
}

// Quick checks
console.log(isAnagram("silent","islent")); // true
console.log(isAnagram("rat","car"));       // false
