
function reverse(text: string, byWords: boolean = false): string {
  return byWords
    ? text.split(" ").reverse().join(" ")
    : text.split("").reverse().join("");
}

console.log(reverse("i love coding")); // "gnidoc evol i"
console.log(reverse("i love coding", true)); // "coding love i"
