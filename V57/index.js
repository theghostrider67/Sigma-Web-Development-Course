console.log("Hello World I am the GHOST RIDER working on the Javascript loops");

let a = 1;
console.log(a);
console.log(a+2);
console.log(a+6);


// // For Loop
for (let i = 0; i < 10; i++) {
    console.log(a+i);
}

// // For In Loop
let obj = {
    name: "Ghost Rider",
    age: 21,
    power: "Fire"
};

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
    // console.log(key);
}

// // For Of Loop
for (const C of "GHOST") {
    console.log(C);
}

// While Loop
i = 10;
while (i < 20) {
    console.log(i);
    i++;
}

// Do While Loop
let j = 10;
do {
    console.log(j);
    j++;
} while (j < 20);

console.log("Good Night");