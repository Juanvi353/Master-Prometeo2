function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
    }
  
    return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];


console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Han Solo"));

function removeItem(array, text) {
    const index = findArrayIndex(array, text);

    if (index !== -1) { 
    array.splice(index, 1);
    }

    return array;
}

let characters1 = [...mainCharacters];
console.log(removeItem(characters1, "Leia"));

let characters2 = [...mainCharacters];
console.log(removeItem(characters2, "Vader"));




