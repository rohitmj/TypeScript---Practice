//Define a union type named Vehicle which can be either Car or Bike. The Car type has properties type and doors, while the Bike type has properties type and hasBell. Create a function that takes a Vehicle as an argument and returns whether it's a Car or Bike.

type Car = { type: "car", doors: number};
type Bike = {type: "bike", hasBell: boolean};

type Vehicle = Car | Bike;

function identifyVehicle(vehicle: Vehicle): string{
    return vehicle.type;
}

console.log(identifyVehicle({ type: "bike", hasBell:true}));