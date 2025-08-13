
function transformNames(names: string[]): string[] {
  return names
    .filter(name => name.length > 4)
    .map(name => name.toUpperCase());
}

console.log(transformNames(["Rohit", "Ana", "Michael", "Bo", "Liam"])); // ["ROHIT","MICHAEL"]
