function solve(n) {
    let result = '<div class="chessboard">\n';
    let color = 'black';

    for (let i = 0; i < n; i++) {
        result += '  <div>\n';

        if (n % 2 == 0) {
            color = color === 'black' ? 'white' : 'black';
            // if (color == 'black') {
            //     color = 'white';
            // } else {
            //     color = 'black';
            // }
        }
        if (i === 0) {
            color = 'black';
        }

        for (let j = 0; j < n; j++) {
            result += `    <span class="${color}"></span>\n`;
            color = color === 'black' ? 'white' : 'black';
            // if (color == 'black') {
            //     color = 'white';
            // } else {
            //     color = 'black';
            // }
        }
        result += '  </div>\n';
    }

    result += '</div>';

    console.log(result);
}

solve(3);
