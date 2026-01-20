// 2.1 Inserta dinámicamente en un html un div vacío con javascript
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2 Inserta dinámicamente un div que contenga una p con javascript
const divConP = document.createElement('div');
const pDentro = document.createElement('p');
divConP.appendChild(pDentro);
document.body.appendChild(divConP);

// 2.3 Inserta dinámicamente un div que contenga 6 p usando un loop con javascript
const divCon6P = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// 2.4 Inserta dinámicamente una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 Basándote en el array, crea una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosEliminar = document.querySelectorAll('.fn-remove-me');
elementosEliminar.forEach(el => el.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div
const p = document.createElement('p');
p.textContent = 'Voy en medio!';

const primerDiv = document.querySelector('div');
primerDiv.after(p);

// 2.9 Inserta una p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
const divsInsertHere = document.querySelectorAll('div.fn-insert-here');
divsInsertHere.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
