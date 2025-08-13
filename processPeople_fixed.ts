
type Person = { name: string; age: number };

function processPeople(people: Person[]): string[] {
  const vowels = "aeiou";
  return people
    .filter(p => p.age >= 18)
    .filter(p => vowels.includes(p.name[0].toLowerCase()))
    .map(p => p.name.toUpperCase())
    .sort();
}

const sample: Person[] = [
  { name: "Oliver", age: 25 },
  { name: "Eva", age: 17 },
  { name: "Ian", age: 19 },
  { name: "Uma", age: 22 },
  { name: "Alex", age: 18 },
  { name: "Oscar", age: 16 },
];

console.log(processPeople(sample)); // ["ALEX","IAN","OLIVER","UMA"]
