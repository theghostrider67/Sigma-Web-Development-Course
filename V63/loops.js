let a = [1, 23, 37, 43, 52];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

a.forEach((value, index, arr) => {
    console.log(value, index, arr);
    
});

let object = 
{
    name: "John",
    age: 30,
    city: "New York"
}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element);
    }
}

for (const element of a) {
    console.log(element);
}