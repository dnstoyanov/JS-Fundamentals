function solve(arg1) {
    let num = Number(arg1);
    for (let i = 1; i <= num; i++) {
        let string = '';
        for (let j = 1; j <= i; j++) {
            string += ` ${i}`;
        }
        console.log(string);
    }
}
solve(5);