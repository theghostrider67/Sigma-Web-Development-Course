const box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "rgb(100,200,50)";
    box[i].style.color = "rgba(255, 255, 255, 1)";

    const rBg = Math.floor(Math.random() * 256);
    const gBg = Math.floor(Math.random() * 256);
    const bBg = Math.floor(Math.random() * 256);

    let rText, gText, bText;
    do {
        rText = Math.floor(Math.random() * 256);
        gText = Math.floor(Math.random() * 256);
        bText = Math.floor(Math.random() * 256);
    } 
    while (rText === rBg && gText === gBg && bText === bBg);

    box[i].style.backgroundColor = `rgb(${rBg},${gBg},${bBg})`;
    box[i].style.color = `rgb(${rText},${gText},${bText})`;

}
