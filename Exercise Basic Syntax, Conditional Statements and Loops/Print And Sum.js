function solve(arg1, arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let sum = 0;
    let string = '';
    for (let i = num1; i <= num2; i++) {
        // string += i + ' ';
        string += `${i} `;
        sum += i;
    }
    console.log(string);
    console.log(`Sum: ${sum}`);
}
solve(5, 10);
