
/**
 * Count vowels in a string (case-insensitive)
 */
function countVowels(text: string): number {
  let count = 0;
  for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) count++;
  }
  return count;
}

console.log(countVowels("Luxury")); // 2
console.log(countVowels("Hello"));  // 2
