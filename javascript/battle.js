const lista = document.getElementById('listPokemon');
var timeR;

function consultPokemon(id, num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response){
        response.json()
        .then(function(pokemon){
            createPokemon(pokemon, num);
        })
    })
}

function consultPokemonRand(){
    let firstId = Math.round(Math.random() * 802)
    let secondId = Math.round(Math.random() * 802)

    if(firstId == 0){
        firstId = Math.round(Math.random() * 802)
    }else if(secondId == 0){
        secondId = Math.round(Math.random() * 802)
    }

    consultPokemon(firstId, 1)
    consultPokemon(secondId, 2)

    
    
}

function createPokemon(pokemon, num){
    //convertir datos a html
    let item = lista.querySelector(`#pokemon-${num}`)

    let imagen = item.getElementsByTagName("img")[0]
    imagen.setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName("p")[0]
    nombre.textContent = pokemon.name

}

function randomWinner(){

    let number = 1;
    number = Math.round(Math.random() * 10);
    
    if(number <= 5){
        let item = lista.querySelector(`#pokemon-1`);
        let nombre = item.getElementsByTagName("p");
        var contenidoN = nombre[0].innerHTML.toUpperCase();

        fetch(`https://pokeapi.co/api/v2/pokemon/${contenidoN.toLowerCase()}`)
        .then(function(response){
            response.json()
            .then(function(pokemon){
                Swal.fire({
                    title: contenidoN,
                    text: "WINS THE BATTLE!",
                    imageUrl: pokemon.sprites.front_default,
                    //imageUrl: 'img/ic_launcher-web.png',
                    imageWidth: '150px'
                    });
            })
        })
    }else{
        let item = lista.querySelector(`#pokemon-2`);
        let nombre = item.getElementsByTagName("p");
        var contenidoN = nombre[0].innerHTML.toUpperCase();

        fetch(`https://pokeapi.co/api/v2/pokemon/${contenidoN.toLowerCase()}`)
        .then(function(response){
            response.json()
            .then(function(pokemon){
                Swal.fire({
                    title: contenidoN,
                    text: "WINS THE BATTLE!",
                    imageUrl: pokemon.sprites.front_default,
                    //imageUrl: 'img/ic_launcher-web.png',
                    imageWidth: '150px'
                    });
            })
        })
    }     
}

function TimeRand(){
    timeR = setTimeout(consultPokemonRand, 1500);
}

consultPokemonRand();


