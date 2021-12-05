function solve(input) {
    let username = input.shift();
    let passwordAsList = username.split('');
    let passwordReversed = passwordAsList.reverse();
    let password = passwordReversed.join('');
    let counter = 1;

    while (true) {
        let enteredPassword = input.shift();
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (enteredPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        }  else {
            console.log('Incorrect password. Try again.');
        }

        counter ++;
    }
}

solve(['Acer','login','go','let me in','recA']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);