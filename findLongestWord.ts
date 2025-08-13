
function findLword(words: string[]): string {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLword(["cat", "hippopotamus", "dog", "elephant"])); // "hippopotamus"
