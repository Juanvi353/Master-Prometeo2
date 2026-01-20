// 1.1 Crear una lista de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

// 1.2 Eliminar el elemento con la clase .fn-remove-me
const removeMe = document.querySelector('.fn-remove-me');
removeMe.remove();

// 1.3 Crear lista de coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});

divPrintHere.appendChild(ulCars);

// 1.4 Crear divs con h4 e img
const countryCards = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const cardsContainer = document.createElement('div');
document.body.appendChild(cardsContainer);

countryCards.forEach(country => {
  const card = document.createElement('div');

  const title = document.createElement('h4');
  title.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;

  card.appendChild(title);
  card.appendChild(img);

  // 1.6 Botón para eliminar este div
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(deleteBtn);
  cardsContainer.appendChild(card);
});

// 1.5 Botón para eliminar el último div
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';

deleteLastBtn.addEventListener('click', () => {
  const lastCard = cardsContainer.lastElementChild;
  if (lastCard) {
    lastCard.remove();
  }
});

document.body.appendChild(deleteLastBtn);