function solve (arg1, arg2, arg3){
    let numbPeople = Number(arg1);
    let typeOfGroup = arg2;
    let dayOfWeek = arg3;
    let price = 0;
    let totalPrice = 0;

    if (dayOfWeek === 'Friday') {
        if (typeOfGroup === 'Students') {
            price = 8.45;
        } else if (typeOfGroup === 'Business') {
            price = 10.90;
        } else if (typeOfGroup === 'Regular') {
            price = 15;
        }
    } else if (dayOfWeek === 'Saturday') {
        if (typeOfGroup === 'Students') {
            price = 9.80;
        } else if (typeOfGroup === 'Business') {
            price = 15.60;
        } else if (typeOfGroup === 'Regular') {
            price = 20;
        }
    } else if (dayOfWeek === 'Sunday') {
        if (typeOfGroup === 'Students') {
            price = 10.46;
        } else if (typeOfGroup === 'Business') {
            price = 16;
        } else if (typeOfGroup === 'Regular') {
            price = 22.50;
        }
    }
    totalPrice = price * numbPeople;

    if (typeOfGroup === 'Students' && numbPeople >= 30) {
        totalPrice -= 0.15 * totalPrice;
    } else if (typeOfGroup === 'Business' && numbPeople >= 100 ) {
        totalPrice = totalPrice - 10 * price;
    } else if (typeOfGroup === 'Regular' && numbPeople >= 10 & numbPeople <= 20) {
        totalPrice -= 0.05 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
solve(30, "Students","Sunday");
solve(40,
    "Regular",
    "Saturday");