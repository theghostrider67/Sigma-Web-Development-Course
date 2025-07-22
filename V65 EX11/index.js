function factorialReduce(n) {
    if (n < 0) return undefined;
    return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}
console.log(factorialReduce(6));


function factorialFor(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialFor(6));  

const input = prompt("Enter a number to calculate its factorial:");
const num = Number(input);

if (!isNaN(num) && Number.isInteger(num)) {
    const result = factorialReduce(num);
    alert(`The factorial of ${num} is ${result}`);
} else {
    alert("Please enter a valid integer.");
}
