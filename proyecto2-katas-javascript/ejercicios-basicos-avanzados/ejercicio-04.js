const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);

aldeanos.push("Cervasio");

aldeanos[0] = "Bambina";

aldeanos.reverse();

for (let i = 0; i < aldeanos.length; i++) {
  if (aldeanos[i] === "Narciso") {
    aldeanos[i] = "Canela";
  }
}

console.log(aldeanos);