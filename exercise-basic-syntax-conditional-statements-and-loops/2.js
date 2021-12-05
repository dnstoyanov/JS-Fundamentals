function solve(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let averageHeight = Number(input[3]);
 
  let rocketVolume = width * length * height;
 
  let heightNeeded = averageHeight + 0.4;
  let volumePerPerson = 2 * 2 * heightNeeded;
 
  let availableSpace = Math.round(rocketVolume / volumePerPerson);
 
  if (availableSpace < 3) {
    console.log(`The spacecraft is too small.`);
  } else if (availableSpace >= 3 && availableSpace <= 10) {
    console.log(`The spacecraft holds ${availableSpace} astronauts.`);
  } else  {
    console.log(`The spacecraft is too big.`)
  }
}

solve(["3.5",
"4",
"5",
"1.70"]);

solve(["4.5",
"4.8",
"5",
"1.75"]);