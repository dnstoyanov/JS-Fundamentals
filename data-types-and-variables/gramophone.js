function solve(bandName,albumName,songName) {

    let songDuration = Number((albumName.length * bandName.length) * songName.length / 2);
    
    let rotations = 0;

    while (songDuration > 0) {
        rotations++;
        songDuration -= 2.5;
    } 

    // let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
    
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');