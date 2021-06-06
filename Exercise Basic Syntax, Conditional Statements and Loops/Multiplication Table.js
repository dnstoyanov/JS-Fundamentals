function solve(arg1) {
    let num = Number(arg1);
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        result = i * num;
        console.log(`${num} X ${i} = ${result}`);
    }
}

solve(5);
solve(2);
