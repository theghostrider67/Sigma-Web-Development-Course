let rand = Math.random();
let first,second,third;

// First
if (rand < 0.333)
{
    first = "Crazy";
}

else if (rand < 0.666 && rand >= 0.333)
{
    first = "Amazing";
}

else 
{
    first = "Fire";
}


// Second
rand = Math.random();
if (rand < 0.333)
{
    second = "Engine";
}

else if (rand < 0.666 && rand >= 0.333)
{
    second = "Foods";
}

else 
{
    second = "Garments";
}



// Third
rand = Math.random();
if (rand < 0.333)
{
    third = "Bros";
}

else if (rand < 0.666 && rand >= 0.333)
{
    third = "Limited";
}

else 
{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);
