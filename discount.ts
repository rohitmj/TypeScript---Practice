
/**
 * Simple discount function we wrote first
 */
function calculateDiscountedPrice(price: number, discount: number): number {
  return price - (price * discount / 100);
}

console.log(calculateDiscountedPrice(100, 20)); // 80
