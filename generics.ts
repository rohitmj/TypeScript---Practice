
/**
 * Generics: echo<T>
 */
function echo<T>(arg: T): T {
  return arg;
}

console.log(echo<string>("hello"));
console.log(echo<number>(123));
