const headquarters = 42;
let pickupLocation = 60;

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let distanceToBeCalculated = distanceTravelledInFeet(start, destination);

    if (distanceToBeCalculated <= 400) {
        return 0;
    } else if (distanceToBeCalculated > 400 && distanceToBeCalculated <= 2000) {
        return (distanceToBeCalculated - 400) * 0.02;
    } else if (distanceToBeCalculated > 2000 && distanceToBeCalculated <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}


console.log(distanceFromHqInBlocks(70) + " blocks");
console.log(distanceFromHqInFeet(pickupLocation) + " feet");
console.log(distanceTravelledInFeet(20, 40) + " feet");
console.log(calculatesFarePrice(40, 20)); 

console.log(calculatesFarePrice(43, 44)); 
console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34, 60)); 
