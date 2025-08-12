
/**
 * Booking price calculator with 15% discount for 7 or more nights.
 * Returns a number rounded to 2 decimals.
 */
function calculateBookingprice(nights: number, pricePerNight: number): number {
  const totalprice = nights * pricePerNight;
  let finalprice: number;
  if (nights >= 7) {
    finalprice = totalprice * 0.85;
  } else {
    finalprice = totalprice;
  }
  return parseFloat(finalprice.toFixed(2));
}

console.log(calculateBookingprice(5, 100)); // 500.00
console.log(calculateBookingprice(7, 100)); // 595.00
