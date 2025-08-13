console.log("JavaScript - Selecting by Ids, Classes, and More!");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "Green";

// document.getElementById("2.5 BOX").style.backgroundColor = "Red";

// document.querySelector(".box ").style.backgroundColor = "Brown";
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "Brown";
});