function solve(distance, passengers, pricePerLiter) {
    let consumption = 7 + passengers * 0.1;
    let requiredFuel = (distance / 100 ) * consumption;
    let total = requiredFuel * pricePerLiter;
    

    console.log(`Needed money for that trip is ${total.toFixed(2)}lv.`)
}

solve(260, 9, 2.49);
solve(90, 14, 2.88);