// const adjectives = ["Crazy", "Amazing", "Fire" ];
// const shopNames = ["Engine", "Foods", "Garments"];
// const extraWords = ["Bros", "Limited", "Hub"];

// function getRandomItem(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// function generateBusinessName() {
//     const adjective = getRandomItem(adjectives);
//     const shop = getRandomItem(shopNames);
//     const extra = getRandomItem(extraWords);
//     return `${adjective} ${shop} ${extra}`;
// }

// // Example: Generate 5 business names
// for (let i = 0; i < 5; i++) {
//     console.log(generateBusinessName());
// }

function generateBusinessNameNoArrays() {
    const adjectives = "Crazy|Amazing|Fire";
    const shopNames = "Engine|Foods|Garments";
    const extraWords = "Bros|Limited|Hub";

    function getRandomFromString(str) {
        const arr = str.split("|");
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const adjective = getRandomFromString(adjectives);
    const shop = getRandomFromString(shopNames);
    const extra = getRandomFromString(extraWords);

    return `${adjective} ${shop} ${extra}`;
}

for (let i = 0; i < 2; i++) {
    console.log(generateBusinessNameNoArrays());
}
