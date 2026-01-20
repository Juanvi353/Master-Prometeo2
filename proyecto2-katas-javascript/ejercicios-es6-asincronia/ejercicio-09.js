document.addEventListener('DOMContentLoaded', () => {

const img = document.querySelector('.random-image');

const randomId = Math.floor(Math.random() * 151) + 1;

const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

fetch(url)
    .then(response => response.json())
    .then(pokemon => {
       img.src = pokemon.sprites.front_default;
    })
    .catch(error => console.error('Error al obtener Pokémon: ', error));
});