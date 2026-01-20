const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc',
];

function nameFinder(nameList) {
    const value = "Bruce";
    const index = nameList.indexOf(value);
    if (index !== -1) {
        return { found: true, position: index };
    } else {
        return { found: false };
    }
}

console.log(nameFinder(names));