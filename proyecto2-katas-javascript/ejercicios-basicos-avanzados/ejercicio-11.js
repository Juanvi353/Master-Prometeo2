const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo",
];
function averageWord(list) {
    let sum = 0;
    for (let i=0; i < list.lenght; i++) {
        const item = list[i];

        if (typeof item === "number"){
        sum += item;
        } else {
        sum += item.lenght;
        }
    }
    return sum;
}

console.log(averageWord(mixedElements));