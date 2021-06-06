function solve(name, age, grade) {
    let studName = name;
    let studAge = Number(age);
    let studGrade = Number(grade);

    console.log(`Name: ${studName}, Age: ${studAge}, Grade: ${studGrade.toFixed(2)}`);
}

solve('John', 15, 5.54678);