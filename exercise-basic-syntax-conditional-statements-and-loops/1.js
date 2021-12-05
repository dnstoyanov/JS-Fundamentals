function solve(input) {
    let month = input[0];
    let hours = Number(input[1]);
    let groupNumber = Number(input[2]);
    let dayTime = input[3];
   
    let price = 0;
    let totalCost = 0;
   
    if (month == `march` || month == `may` || month == `may`) {
      if (dayTime == `day`) {
        price = 10.5;

      } else if (dayTime == `night`) {
        price = 8.4;

      }
    } else if (month == `june` || month == `july` || month == `august`) {
      if (dayTime == `day`) {
        price = 12.6;

      } else if (dayTime == `night`) {
        price = 10.2;
      }
    }
   
    if (groupNumber >= 4) {
        price = price * 0.9;
      }
 
      if (hours >= 5) {
        price = price * 0.5;
      }

    totalCost = price * hours;

   
    console.log(`Price per person for one hour: ${(price).toFixed(2)}`)
    console.log(`Total cost of the visit: ${(totalCost * groupNumber).toFixed(2)}`)
  }

  solve(["march",
  "3",
  "3",
  "day"]);

  solve(["july",
  "5",
  "5",
  "night"]);