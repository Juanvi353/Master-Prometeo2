const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
];

function repeatCounter(list) {
    let counter = {};

    for (let i = 0; i < list.length; i++) {
        let word = list[i];
        if (counter[word]) {
            counter[word]++;
        } else {
            counter[word] = 1;
        }
    }
    return counter;
}

console.log(repeatCounter(words));