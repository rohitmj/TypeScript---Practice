
function filterVowelLongWords_twoPass(words: string[]): string[] {
  let total: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) total.push(words[i]);
  }

  const vowels = "aeiou";
  let final: string[] = [];
  for (let i = 0; i < total.length; i++) {
    if (vowels.includes(total[i][0].toLowerCase())) final.push(total[i]);
  }
  return final;
}

console.log(filterVowelLongWords_twoPass(["apple","banana","ice","orange","umbrella","cat","elephant"]));
// ["apple","orange","umbrella","elephant"]
