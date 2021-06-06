function solve(array) {

    // for (let i = 0; i <= (array.length -1) / 2; i++) {
    //     let k = (array.length - 1) - i;
    //     let temp = array[i];
    //     array[i] = array[k];
    //     array [k] = temp;
    // }

//    console.log(array.join(' '));
        let myArr = array.reverse();
        console.log(myArr.join(' '));
}

//Write a program which receives an array of strings (space separated values). Your task is to reverse it and print its elements. Swap elements. 

solve(['a', 'b', 'c', 'd', 'e']);
console.log('-------------')
solve(['abc', 'def', 'hig', 'klm', 'nop']);

