//4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
console.log(ages.filter(a => a > 18));


//4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean par.

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
console.log(ages2.filter(a => a % 2 === 0));


//4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
console.log(streamers.filter(s => s.gameMorePlayed === 'League of Legends'));


//4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//usar la funcion .includes() para la comprobación.

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
console.log(streamers2.filter(s => s.name.includes('u')));


//4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//.age sea mayor que 35.

console.log(
    streamers
        .filter(s => s.gameMorePlayed.includes('Legends'))
        .map(s => s.age > 35 ? {...s, gameMorePlayed: s.gameMorePlayed.toUpperCase()} : s)
);