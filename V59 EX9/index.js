let calculator = Math.random()
console.log(calculator);

let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = 
{
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (calculator > 0.1) 
{
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}