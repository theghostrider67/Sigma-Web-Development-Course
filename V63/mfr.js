let arr = [1, 33, 74, 13, 72];

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2);
// }   
// console.log(newArr);

// let newArr1 = arr.map((e)=>{
//     return e ** 2;
// })
// console.log(newArr1);

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven));

let arr2 = [12, 45, 32, 34, 52]
 const red = (a, b)=>{
    return a*b
 }
console.log(arr2.reduce(red));
