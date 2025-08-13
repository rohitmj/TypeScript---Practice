
const filterVowelLongWordsFP = (words: string[]): string[] =>
  words.filter(w => w.length > 4 && "aeiou".includes(w[0].toLowerCase()));

console.log(filterVowelLongWordsFP(["apple","banana","ice","orange","umbrella","cat","elephant"]));
// ["apple","orange","umbrella","elephant"]
