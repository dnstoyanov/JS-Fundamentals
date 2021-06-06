function solve(n, inputArr) {
    
    let slicedArray = [];

    for (let i = 0; i < n; i++) {
        slicedArray.push(inputArr[i]);
    }


    let finalArray = [];
    for (let i = slicedArray.length - 1; i >= 0; i--) {
        finalArray.push(slicedArray[i]);
    }
    console.log(finalArray.join(' '));
}
//Write a program which receives a number n and an array of elements. Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.

solve(3, [10, 20, 30, 40, 50]);
