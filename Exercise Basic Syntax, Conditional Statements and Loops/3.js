function solve(input) {
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);
    let addressNum = "";
    for (let i = M; i > N; i--) {
        if (i === S) {
            if (S % 2 === 0 && S % 3 === 0) {
                break;
            }
        }
        if (i % 2 === 0 && i % 3 === 0) {
            addressNum += ` ${i}`;
        }
    }
    console.log(addressNum);
}

solve(["1","30","15"]);
solve(["1","36","12"]);
solve(["20","1000","36"]);


