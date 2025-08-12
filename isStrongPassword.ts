
/**
 * Password strength checker:
 * - at least 8 chars
 * - at least one uppercase
 * - at least one lowercase
 * - at least one digit
 */
function isStrongPassword(pass: string): boolean {
  if (pass.length < 8) return false;
  if (!/[A-Z]/.test(pass)) return false;
  if (!/[a-z]/.test(pass)) return false;
  if (!/[0-9]/.test(pass)) return false;
  return true;
}

console.log(isStrongPassword("Str@lkj323")); // true
console.log(isStrongPassword("pass"));       // false
