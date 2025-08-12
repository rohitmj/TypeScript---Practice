
/**
 * Filter destinations with rating >= 4.5
 */
type Destination = { name: string; rating: number };

function filterLuxuryDestinations(destinations: Destination[]): Destination[] {
  let result: Destination[] = [];
  for (let i = 0; i < destinations.length; i++) {
    if (destinations[i].rating >= 4.5) {
      result.push(destinations[i]);
    }
  }
  return result;
}

const places: Destination[] = [
  { name: "Bali", rating: 4.7 },
  { name: "Sydney", rating: 4.3 },
  { name: "Maldives", rating: 4.9 }
];

console.log(filterLuxuryDestinations(places));
// => [ { name: 'Bali', rating: 4.7 }, { name: 'Maldives', rating: 4.9 } ]
