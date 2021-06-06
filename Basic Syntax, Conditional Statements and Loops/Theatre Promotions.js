function solve(day, age) {
    let currentDay = day;
    let currentAge = age;
    let ticketPrice = 0;

    if (currentAge >= 0 && currentAge <= 18) {
        if (currentDay == 'Weekday') {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        } else if (currentDay == 'Weekend') {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`);
        } else if (currentDay == 'Holiday') {
            ticketPrice = 5;
            console.log(`${ticketPrice}$`);
        }
    } else if (currentAge > 18 && currentAge <= 64) {
        if (currentDay == 'Weekday') {
            ticketPrice = 18;
            console.log(`${ticketPrice}$`);
        } else if (currentDay == 'Weekend') {
            ticketPrice = 20;
            console.log(`${ticketPrice}$`);
        } else if (currentDay == 'Holiday') {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        }
    } else if (currentAge > 64 && currentAge <= 122) {
        if (currentDay == 'Weekday') {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        } else if (currentDay == 'Weekend') {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`);
        } else if (currentDay == 'Holiday') {
            ticketPrice = 10;
            console.log(`${ticketPrice}$`);
        }
    } else {
        console.log('Error!');
    }
}