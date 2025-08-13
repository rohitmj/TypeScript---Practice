
function filterVowelLongWords(words: string[]): string[] {
  const vowels = "aeiou";
  const result: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i].toLowerCase();
    if (w.length > 4 && vowels.includes(w[0])) result.push(words[i]);
  }
  return result;
}

console.log(filterVowelLongWords(["apple","banana","ice","orange","umbrella","cat","elephant"]));
// ["apple","orange","umbrella","elephant"]
