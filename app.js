console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
  
        if(count <= -1){
           console.log("Positive numbers only Please") 
        }
        //wanted to practice a do while loop here but then I realized 
        //I was the one passing in the number so it was infinitely broken.

    

    for(let i = 0; i < count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
        else if (i %2 == 0){
            console.log();
        }
        
    }
}
printOdds(-12);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = (age >= 16);
    let belowSixteen = (age < 16);

    if(age == null && userName == null){
        console.log("Enter your name and age please:")
    }
    else if(age == null){
        console.log("Please Enter Your Age;")
    }
    else if(userName == null){
        console.log("Please Enter Your Name:")
    }

    if(belowSixteen){
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    }
    else if(aboveSixteen){
        console.log(`Congrats ${userName}, you can drive!`);
    }
}

checkAge("Beanie", 22);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y){
    if(x > 0 && y > 0){
        console.log(`${x}, ${y} is in Quadrant 1.`);
    }
    else if (x < 0 && y > 0)
    {
        console.log(`${x}, ${y} is in Quadrant 2.`);
    }
    else if(x < 0 && y < 0)
    {
        console.log(`${x}, ${y} is in Quadrant 3`);
    }
    else if(x > 0 && y < 0)
    {
        console.log(`${x}, ${y} is in Quadrant 4.`)

    }
    else if (x == 0)
    {
        console.log(`${x}, ${y} is on the y axis.`)

    }
    else if (y == 0)
    {
        console.log(`${x}, ${y} is on the x axis.`)
    }

}

whichQuadrant(44, 0);
//Had to look up what is the Cartesian Plane.

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(side1, side2, side3){

    let validTriangle = (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2)
    if(validTriangle){
        console.log("Great Let's see what type of Triangle this is!")
        {
                if(side1 == side2 && side2 == side3){
                    console.log("This is an Equilateral Triangle.");
                }
                else if(side1 == side2 || side2 == side3 || side3 == side1){
                    console.log("This is an Isosceles Triangle.");
                }
                else (side1 != side2 && side2!= side3)
                {
                    console.log("This is a Scalene Triangle.")
                }
        }
    }
    else{
        console.log("Invalid Triangle.")
    }
    
}
triangleType(4,6,5);

//Exercise 5 Section
console.log("==========");
function dataPlanStatus(planLimit, day, usage){
    let planLength = 30;
    let currentAverage = usage / day;
    let projectedaverage = planLimit / planLength;
    let remainingData = planLimit - usage;  
    let remainingDays = planLength - day;
    let projectedUsage = remainingDays * currentAverage;
    let statusMessage;


    
    console.log(`${day} days used, You have ${remainingDays} day(s) remaining.`);
    console.log(`Average projected use: ${planLimit / day} GB/day`);

    if (currentAverage > projectedaverage){
        statusMessage = "EXCEEDING"
    } else if (currentAverage < projectedaverage) {
        statusMessage = "UNDER"
    }else {
        statusMessage = "AT AVERAGE"
    }
    console.log(`You are ${statusMessage} your DataLimit, your average daily use is ${currentAverage} GB/day,\ncontinuing this usage, you will have ${planLimit - (usage + projectedUsage)} GB left from your datalimit.`);



}

dataPlanStatus(50, 25, 25);