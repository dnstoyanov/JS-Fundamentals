function Rounding(arg1, arg2) {
    if (arg2 >= 15) {
        arg2 = 15;
    }
    let result = arg1.toFixed(arg2);
    console.log(parseFloat(result));
}

Rounding(3.1415926535897932384626433832795, 2);
Rounding(10.5, 3);
