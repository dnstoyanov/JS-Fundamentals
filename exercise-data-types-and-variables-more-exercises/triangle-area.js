function solve(sideA, sideB, sideC) {
    let s = (sideA + sideB + sideC) / 2;
    let result = Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));   
    console.log(result);
}

solve(2,3.5,4);