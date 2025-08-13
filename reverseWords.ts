
function reverseWords(sentence: string): string {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("i love coding")); // "coding love i"
