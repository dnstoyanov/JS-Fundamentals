function solve(arg1) {
    let string = arg1.toString();
    let sum = 0;

    for (let digit of string) {
        sum += Number(digit);
    }

    // for (let i = 0; i < string.length; i++){
    //     sum += Number(string[i]);
    // }
    
    console.log(sum);
}
solve(245678);
solve(97561);
solve(245678);

