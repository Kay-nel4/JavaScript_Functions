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
console.log(printOdds(-30));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen;
    let belowSixteen;

    if(age == null && userName == null){
        console.log("Enter your name and age please:")
    }
    else if(age == null){
        console.log("Please Enter Your Age;")
    }
    else if(userName == null){
        console.log("Please Enter Your Name:")
    }

    if(age <= 16){
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    }
    else if(age >= 16){
        console.log(`Congrats ${userName}, you can drive!`);
    }
}

console.log(checkAge("Beanie", 5));

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
        console.log(`${x}, ${y} is on the x axis.`)

    }
    else if (y == 0)
    {
        console.log(`${x}, ${y} is on the y axis.`)
    }

}

console.log(whichQuadrant(44, 0));
//Had to look up what is the Cartesian Plane.

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(num1, num2, num3){
    
}

