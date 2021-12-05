function solve(par1, par2, par3) {
    let result = par1 + par2 + par3;
    let splitResult = result.split('');
    let revResult = splitResult.reverse();
    revResult = revResult.join(' ');

    console.log(revResult);
}

solve('A','B','C');
solve('1','L','&');