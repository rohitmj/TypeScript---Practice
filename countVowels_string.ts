
function countVowels(text: string): number {
  let count = 0;
  const vowels = "aeiou";
  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("I love coding")); // 5
