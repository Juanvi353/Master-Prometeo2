const select = document.getElementById('character-list');
const img = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            const option = document.createElement('option');
            option.value = character.imageUrl;
            option.textContent = character.fullName;
            select.appendChild(option);
        });
    })
    .catch(error => console.error('Error al obtener los personajes: ', error));

select.addEventListener('change', () => {
    const imageUrl = select.value;
    if (imageUrl) {
        img.src = imageUrl;
    } else {
        img.src = '';
    }
});
