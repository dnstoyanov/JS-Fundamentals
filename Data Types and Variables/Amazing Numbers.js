function solve(num) {
    let numAsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let currentDigit = Number(numAsStr[i]);
        sum += currentDigit;
    }

    let sumAsString = sum.toString();
    let hasNine = false;
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '9') {
            hasNine = true;
            break;
        }
    }

    console.log(`${num} Amazing? ${hasNine ? 'True' : 'False'}`);
}
solve(1233);
solve(583472);
solve(999);
