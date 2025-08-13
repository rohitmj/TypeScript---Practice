
function filterLongWords(words: string[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(filterLongWords(["apple", "banana", "kiwi", "pineapple"])); // ["banana","pineapple"]
