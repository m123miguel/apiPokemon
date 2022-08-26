const urlPokemon = "https://pokeapi.co/api/v2/pokemon";
const urlType = "https://pokeapi.co/api/v2/type";
const color = {
  fire:"#33B2FF",
  grass:"#33B2FF",
  electric:"#33B2FF",
  water: "#33B2FF",
  ground:"#33B2FF",
  rock: "#33B2FF",
  fairy:"#33B2FF",
  poison:"#33B2FF",
  bug:"#33B2FF",
  dragon:"#33B2FF",
  psychic:"#33B2FF",
  fliying:"#33B2FF",
  fighting:"#33B2FF",
  normal:"#33B2FF",
};

// const maincolor = Object.keys(color)
// console.log(color);

var next,
  previous,
  template = "",
  page = "";
var pagination = document.getElementById("pagination");

const indexPokemon = async (url) => {
  try {
    const response = await fetch(url);
    const date = await response.json();
    // console.log(date);
    datePokemon(date.results);
    colorPokemon(date.results);
    // console.log(date);

    next = date.next
      ? `
    <button class="button btn  btn-primary" data-url = ${date.next}>
    <i class="fa-solid fa-angle-right"></i>
    </button>
    `
      : "";
    previous = date.previous
      ? `
    <button class="button btn  btn-primary"  data-url = ${date.previous}>
        <i class="fa-solid fa-angle-left"></i>
     </button>
    `
      : "";

    pagination.innerHTML = previous + " " + next;
  } catch (error) {
    alert(error);
  }
};

indexPokemon(urlPokemon);

const datePokemon = async (date) => {
  try {
    for (let index of date) {
      // console.log(index);
      const response = await fetch(index.url);
      const result = await response.json();
      console.log(result);
      template += `
      <div class="pt-6">
        <div class="card bg-dark" style="width: 18rem;">
          <img class="p-0.5 text-center ml-24" src="${result.sprites.other.dream_world.front_default}" class="card-img-top" alt="${result.name}"  width="100"  height="50">
            <div class="card-body">
            <h5 id="name" class="card-title text-center text-uppercase"> <strong> ${result.name}</strong> </h5>
            <p id="name" class="card-title text-center text-uppercase"> <strong>${result.id}</strong> </p>
                <div>
                  <p class="abilities card-text text-center">Movimientos</p>
                  <ul class="abilities">
                      <li>-${result.abilities[0].ability.name}</li>
                  </ul>
                </div>
                <br>
                <div class="stacks">
                  <div class="float-left">
                      <p class="abilities">Vida</p>
                      <p class="mr-32 abilities">${result.stats[0].base_stat}HP</p>
                  </div>
                  <div>
                      <p class="abilities">Ataque</p>
                      <p class="abilities">${result.stats[1].base_stat}K</p>
                  </div>
                </div>
                <br>
                <button id="show" type="button" class="buttonModal btn btn-primary" data-bs-toggle="modal" data-bs-target="#pokemonView">
                      Pokemon
                </button>
            </div>
        </div>
      </div>
        `;
    }
    $("#cardPokemon").html(template);
  } catch (error) {
    alert(error);
  }
};
// pagination click
pagination.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    var urlPagination = e.target.dataset.url;
    // console.log(urlPagination);
    indexPokemon(urlPagination);
  }
});

const colorPokemon = type =>

// modal
$(document).on('click', '#show', () =>{
 var name = $(this).data('nombre');
 $("#name").val(name);
console.log(name);
})