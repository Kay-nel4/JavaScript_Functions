console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
  
    if(count < 0)
    {
        console.log("Positive numbers only Please");
        return; 
    }
        //wanted to practice a do while loop here but then I realized 
        //I was the one passing in the number so it was infinitely broken.

    for(let i = 0; i < count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}
printOdds(55);
printOdds(0);
printOdds(-14);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age)
{
    let aboveSixteen = (age >= 16);
    let belowSixteen = (age < 16);

    if(age == null && userName == null){
        console.log("Enter your name and age please:");
    }
    else if(age == null){
        console.log("Please Enter Your Age;");
    }
    else if(userName == null){
        console.log("Please Enter Your Name:");
    }

    if(belowSixteen){
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    }
    else if(aboveSixteen){
        console.log(`Congrats ${userName}, you can drive!`);
    }
}

checkAge("Beanie", 22);
checkAge("Roobee", 45);
checkAge("Grady", 5);
checkAge("Buzzard", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y)
{
    if(x > 0 && y > 0)
    {
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
        console.log(`${x}, ${y} is in Quadrant 4.`);

    }
    else if (x == 0)
    {
        console.log(`${x}, ${y} is on the y axis.`);

    }
    else if (y == 0)
    {
        console.log(`${x}, ${y} is on the x axis.`);
    }

}

whichQuadrant(44, 0);
//Had to look up what is the Cartesian Plane.

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(side1, side2, side3){

    let validTriangle = (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2);

    if(!validTriangle)
    {
        console.log("Invalid Triangle");
        return;
    }

    if(validTriangle)
    {
        console.log("Great Let's see what type of Triangle this is!");
        
        if(side1 == side2 && side2 == side3)
        {
            console.log("This is an Equilateral Triangle.");
        }
        else if(side1 == side2 || side2 == side3 || side3 == side1)
        {
            console.log("This is an Isosceles Triangle.");
        }
        else
        {
            console.log("This is a Scalene Triangle.");
        }
        
    }
    
}
triangleType(2, 2 ,5);
triangleType(4, 4, 4);
triangleType(3,7,7);
triangleType(4, 5, 6);

//Exercise 5 Section
console.log("==========");
function dataPlanStatus(planLimit, day, usage)
{
    let totalDays = 30;

    let remainingDays = totalDays - day;
    let allowedAverage = planLimit / totalDays;
    let currentAverage = usage / day;
    let remainingData = planLimit - usage;  



    
    console.log(`${day} days used, You have ${remainingDays} day(s) remaining.`);
    console.log(`Average projected use: ${allowedAverage.toFixed(2)} GB/day`);

    //If you're out of data
    if(usage >= planLimit)
    {
        console.log("You have already exceeded your Data Plan.");
        return;
    }

    let status;

    if(currentAverage > allowedAverage)
    {
        status = "Exceeding";
    }
    else if(currentAverage < allowedAverage)
    {
        status = "Under";
    }
    else
    {
        status = "On Track";
    }

    console.log(`You are ${status} your DataLimit, your average daily use is ${currentAverage.toFixed(2)} GB/day`);

    //If exceeding show exceeding amount
    if(status === "Exceeding")
    {
        let projectedTotalUsage = currentAverage * totalDays;
        let exceedAmount = projectedTotalUsage - planLimit;
        console.log(`Continuing this usage, you will have ${exceedAmount.toFixed(2)} GB.`);
    }

    //Show safe usage for remaining days.
    let safePerDay = remainingData / remainingDays;
    console.log(`To stay below your dataplan use no more than ${safePerDay.toFixed(2)} GB/day.`)    
}
dataPlanStatus(50, 25, 25);
dataPlanStatus(400, 2, 45);
dataPlanStatus(40, 3, 20);
//\ncontinuing this usage, you will have ${planLimit - (usage + projectedUsage)} GB left from your datalimit.`)