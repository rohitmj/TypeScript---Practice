
function countWordsStartingWithVowel(words: string[]): number {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i][0].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countWordsStartingWithVowel(["Apple", "banana", "orange", "grape", "umbrella"])); // 3
