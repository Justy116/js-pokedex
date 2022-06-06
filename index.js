let containerCard = document.querySelector(".container__card");
function showPokemon() {
  for (i = 1; i <= 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => res.json())
      .then((data) => {
        containerCard.innerHTML +=
         ` 
            <div class="card ${data.types[0].type.name}">
                <img src="${data.sprites.front_default}" alt="">
                <div class="container__text">
                    <span>#${data.id}</span>
                    <h4>${data.name}</h4>
                    <p>Type: ${data.types[0].type.name}</p>
                </div>
            </div>`;
      });
  }
}
showPokemon();

