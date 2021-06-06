function solve(str, char, str1) {
    let tmp = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {
            tmp += char;
        } else {
            tmp += str[i];
        }
    }

    if (tmp === str1) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

    // let res = str.replace('_', char);
    // let output = res === str1? 'Matched' : 'Not Matched';
    // console.log(output);

    // if (res === str1) {
    //     console.log('Matched')
    // } else {
    //     console.log('Not Matched')
    // }
}
solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');
