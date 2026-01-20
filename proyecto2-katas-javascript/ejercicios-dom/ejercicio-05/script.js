const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.querySelector('#album-list');

for (let i = 0; i < albums.length; i++) {
    const li = document.createElement('li');
    li.textContent = albums[i];
    ul.appendChild(li);
}