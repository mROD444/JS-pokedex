console.log('test')

const pokePic = document.querySelector('.sprite');
console.log(pokePic);

const pokeName = document.querySelector('.name');
console.log(pokeName);


const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); 
    const data = await response.json();
    console.log(data);
    pokePic.src = data['sprites']['front_default'];
    pokeName.textContent = data['name'];
  
}


const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = form[0].value;
    pokemonData(inputValue);
    form[0].value = '';
})