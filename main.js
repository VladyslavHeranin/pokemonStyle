let arr = [];

(async function () {
  const pokemonByType = {
    bug: [],
    dark: [],
    dragon: [],
    electric: [],
    fairy: [],
    fighting: [],
    fire: [],
    flying: [],
    ghost: [],
    grass: [],
    ground: [],
    ice: [],
    normal: [],
    poison: [],
    psychic: [],
    rock: [],
    steel: [],
    water: [],
  };

  async function getPokemon(i) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + [i] + "/");
    const pokemon = await res.json();

    return pokemon;
  }

  function fetchPokemonsList(from, before) {
    const promisesList = [];

    for (let i = from; i < before; i++) {
      promisesList.push(getPokemon(i));
    }

    return Promise.all(promisesList);
  }

  function sortPokemonByType(pokemons) {
    pokemons.forEach((pokemon) => {

      let items = document.querySelector('#items');

      let item = document.createElement('div');
      let img = document.createElement('div');
      let name = document.createElement('div');
      let skill = document.createElement('div');
      let skillPlus = document.createElement('div');

      let showImg = document.getElementById('show-item__img');
      let showName = document.getElementById("item__name");
      let type = document.getElementById("type");
      let attack = document.getElementById("attack");
      let defense = document.getElementById("defense");
      let hp = document.getElementById("hp");
      let spAttack = document.getElementById("spAttack");
      let spDefense = document.getElementById("spdefense");
      let speed = document.getElementById("speed");
      let weight = document.getElementById("weight");

      items.appendChild(item);
      item.appendChild(img);
      item.appendChild(name);
      item.appendChild(skill);
      item.appendChild(skillPlus);

      item.id = pokemon.id;

      item.className = "item";
      img.className = "item-img";
      name.className = "item-name";
      skill.className = "item-skill";

      img.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + item.id + '.png" class="pokimonImg">'
      name.innerHTML = pokemon.name;

      if (pokemon.types.length === 1) {
        skill.innerHTML = pokemon.types[0].type.name;
      } else if (pokemon.types.length === 2) {
        skillPlus.className = "item-skillPlus";
        skill.innerHTML = pokemon.types[0].type.name;
        skillPlus.innerHTML = pokemon.types[1].type.name;
      }

      item.addEventListener("click", () => {

        let position = document.getElementById("position");

        position.className = "position__active";

        position.addEventListener("click", () => {
          position.className = "position";
        })

        showImg.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + item.id + '.png" class="pokimonImg">'
        showName.innerHTML = pokemon.name + " " + pokemon.id

        type.innerHTML = pokemon.types[0].type.name;
        attack.innerHTML = pokemon.stats[0].base_stat
        defense.innerHTML = pokemon.stats[1].base_stat
        hp.innerHTML = pokemon.stats[2].base_stat
        spAttack.innerHTML = pokemon.stats[3].base_stat
        spDefense.innerHTML = pokemon.stats[4].base_stat
        speed.innerHTML = pokemon.stats[5].base_stat
        weight.innerHTML = pokemon.weight
      })

      const pokemonTypes = pokemon.types.map((type) => type.type.name);

      if (pokemonTypes.includes("fire")) {
        pokemonByType.fire.push(pokemon.name);
        if (skillPlus.innerHTML === "fire") {
          skillPlus.style.background = "red"
        } else skill.style.background = "red"
      } if (pokemonTypes.includes("grass")) {
        pokemonByType.grass.push(pokemon.name);
        if (skillPlus.innerHTML === "grass") {
          skillPlus.style.background = "green"
        } else skill.style.background = "green"
      } if (pokemonTypes.includes("bug")) {
        pokemonByType.bug.push(pokemon.name);
        if (skillPlus.innerHTML === "bug") {
          skillPlus.style.background = "orange"
        } else skill.style.background = "orange"
      } if (pokemonTypes.includes("poison")) {
        pokemonByType.poison.push(pokemon.name);
        if (skillPlus.innerHTML === "poison") {
          skillPlus.style.background = "red";
        } else skill.style.background = "red";
      } if (pokemonTypes.includes("dark")) {
        pokemonByType.dark.push(pokemon.name);
        if (skillPlus.innerHTML === "dark") {
          skillPlus.style.background = "aqua";
        } else skill.style.background = "aqua";
      } if (pokemonTypes.includes("dragon")) {
        pokemonByType.dragon.push(pokemon.name);
        if (skillPlus.innerHTML === "dragon") {
          skillPlus.style.background = "blueviolet";
        } else skill.style.background = "blueviolet";
      } if (pokemonTypes.includes("electric")) {
        pokemonByType.electric.push(pokemon.name);
        if (skillPlus.innerHTML === "electric") {
          skillPlus.style.background = "rgb(43, 226, 104)";
        } else skill.style.background = "rgb(43, 226, 104)";
      } if (pokemonTypes.includes("fairy")) {
        pokemonByType.fairy.push(pokemon.name);
        if (skillPlus.innerHTML === "fairy") {
          skillPlus.style.background = "rgb(30, 15, 240)";
        } else skill.style.background = "rgb(30, 15, 240)";
      } if (pokemonTypes.includes("fighting")) {
        pokemonByType.fighting.push(pokemon.name);
        if (skillPlus.innerHTML === "fighting") {
          skillPlus.style.background = "rgb(140, 138, 170) ";
        } else skill.style.background = "rgb(140, 138, 170) ";
      } if (pokemonTypes.includes("flying")) {
        pokemonByType.flying.push(pokemon.name);
        if (skillPlus.innerHTML === "flying") {
          skillPlus.style.background = "rgb(200, 255, 0) ";
        } else skill.style.background = "rgb(200, 255, 0) ";
      } if (pokemonTypes.includes("ghost")) {
        pokemonByType.ghost.push(pokemon.name);
        if (skillPlus.innerHTML === "ghost") {
          skillPlus.style.background = "rgb(255, 0, 140) ";
        } else skill.style.background = "rgb(255, 0, 140) ";
      } if (pokemonTypes.includes("ground")) {
        pokemonByType.ground.push(pokemon.name);
        if (skillPlus.innerHTML === "ground") {
          skillPlus.style.background = "rgb(127, 146, 0) ";
        } else skill.style.background = "rgb(127, 146, 0) ";
      } if (pokemonTypes.includes("ice")) {
        pokemonByType.ice.push(pokemon.name);
        if (skillPlus.innerHTML === "ice") {
          skillPlus.style.background = "rgb(255, 0, 13)";
        } else skill.style.background = "rgb(255, 0, 13)";
      } if (pokemonTypes.includes("normal")) {
        pokemonByType.normal.push(pokemon.name);
        if (skillPlus.innerHTML === "normal") {
          skillPlus.style.background = "rgb(91, 141, 122)";
        } else skill.style.background = "rgb(91, 141, 122)";
      } if (pokemonTypes.includes("poison")) {
        pokemonByType.poison.push(pokemon.name);
        if (skillPlus.innerHTML === "poison") {
          skillPlus.style.background = "rgb(141, 91, 126)";
        } else skill.style.background = "rgb(141, 91, 126)";
      } if (pokemonTypes.includes("psychic")) {
        pokemonByType.psychic.push(pokemon.name);
        if (skillPlus.innerHTML === "psychic") {
          skillPlus.style.background = "rgb(3, 0, 163)";
        } else skill.style.background = "rgb(3, 0, 163)";
      } if (pokemonTypes.includes("rock")) {
        pokemonByType.rock.push(pokemon.name);
        if (skillPlus.innerHTML === "rock") {
          skillPlus.style.background = "rgb(0, 116, 114) ";
        } else skill.style.background = "rgb(0, 116, 114) ";
      } if (pokemonTypes.includes("steel")) {
        pokemonByType.steel.push(pokemon.name);
        if (skillPlus.innerHTML === "steel") {
          skillPlus.style.background = "rgb(214, 208, 23)";
        } else skill.style.background = "rgb(214, 208, 23)";
      } if (pokemonTypes.includes("water")) {
        pokemonByType.water.push(pokemon.name);
        if (skillPlus.innerHTML === "water") {
          skillPlus.style.background = "rgb(0, 0, 0) ";
        } else skill.style.background = "rgb(0, 0, 0) ";
      }
    });
  }

  let loadinStart = -5;
  let loadinEnd = loadinStart + 12

  const pokemons = await fetchPokemonsList(1, 7);

  let button = document.querySelector('#but');

  button.addEventListener('click', async () => {

    const lodeMore = await fetchPokemonsList(loadinStart += 12, loadinEnd += 12);

    sortPokemonByType(lodeMore);

  })

  sortPokemonByType(pokemons);

  console.log(pokemonByType);
})();
