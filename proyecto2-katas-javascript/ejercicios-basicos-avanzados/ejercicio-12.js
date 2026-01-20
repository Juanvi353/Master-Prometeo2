const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
];

function removeDuplicates(list){
    let cleanList = [];
    
    for (let i = 0; i < list.length; i++) {
        if (!cleanList.includes(list[i])) {
        cleanList.push(list[i]);
        }
    }
    return cleanList; 
}

console.log(removeDuplicates(duplicates));