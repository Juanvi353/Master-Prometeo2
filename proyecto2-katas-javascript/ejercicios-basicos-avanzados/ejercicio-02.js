let nombre = "Luke Skywalker";
let edad = 19;

edad = 25;
console.log("-----------------------");

console.log(nombre + " " + edad);

console.log("-----------------------");

let nombre2 = "Leia";
let apellido = "Organa";
let edad2 = 20;

console.log("Soy " + nombre2 + " " + apellido + ", tengo " + edad2 + " " + "años y soy una princesa de Alderaan.")


console.log("-----------------------");

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let preciosable = (sable1.precio + sable2.precio);
console.log(preciosable);

console.log("-----------------------");

let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = (nave1.precioBase + precioBaseGlobal);
nave2.precioFinal = (nave2.precioBase + precioBaseGlobal);

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);

console.log("-----------------------");
