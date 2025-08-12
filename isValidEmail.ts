
/**
 * Very simple email validator for practice:
 * - exactly one '@'
 * - at least one '.' after '@'
 */
function isValidEmail(email: string): boolean {
  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const domainPart = parts[1];
  if (!domainPart.includes(".")) return false;

  return true;
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("test@com"));         // false
