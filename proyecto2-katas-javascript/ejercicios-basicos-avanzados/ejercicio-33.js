const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
    const normal = country.trim();

    if (capitals.hasOwnProperty(normal)) {
        return capitals[normal];
    } else {
        return `La capital de "${country}" no está disponible`
    }
}

console.log(getCapital('Spain'));
console.log(getCapital('Poland'));
console.log(getCapital('Japan'));