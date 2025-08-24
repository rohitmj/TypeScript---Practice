// Two Pointers practice (Reverse string)
export function twoPointers(s: string): string {
  const chars: string[] = s.split("");

  let l: number = 0;
  let r: number = chars.length - 1;
  while (l < r) {
    const temp: string = chars[l];
    chars[l] = chars[r];
    chars[r] = temp;
    l++;
    r--;
  }
  return chars.join("");
}

// Quick checks
console.log(twoPointers("Hello")); // "olleH"
console.log(twoPointers("Yesno")); // "onseY"
