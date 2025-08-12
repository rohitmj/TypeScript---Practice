
/**
 * Enum basics
 */

// Auto-assigned values: Red=0, Green=1, Blue=2
enum ColorAuto { Red, Green, Blue }
let c1: ColorAuto = ColorAuto.Green;
console.log("ColorAuto.Green =", c1); // 1

// Manually assigned values
enum ColorManual { Red = 1, Green = 2, Blue = 4 }
let c2: ColorManual = ColorManual.Green;
console.log("ColorManual.Green =", c2); // 2

// Reverse mapping (number enums)
console.log("Reverse[2] =", ColorManual[2]); // "Green"
