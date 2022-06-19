let containerCard = document.querySelector(".container__card");

async function showPokemon() {
  for (i = 1; i <= 151; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      let data = await response.json()
        containerCard.innerHTML +=
           `<div class="card ${data.types[0].type.name}">
                <img src="${data.sprites.front_default}" alt="">
                <div class="container__text">
                    <span>#${data.id}</span>
                    <h4>${data.name}</h4>
                    <p>Type: ${data.types[0].type.name}</p>
                </div>
            </div>`;
    
  }
}
showPokemon();

