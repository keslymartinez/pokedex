
const $form = $('#search-form')
const $searchInput = $('#search')
const $result = $('#result-pokemon')
let searched;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 0; i < 20; i++) {
    const num = getRandomInt(0, 200)

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${num}/`
    }).done(addPokemons)

    function addPokemons(news) {
        const pokes = news.results;
        console.log(pokes);
        const names = news.name;
        const imgs = news.sprites.front_default;

        let $list = $(`
                    
                        <div class="col-xs-4 text-center">
                            <div class="thumbnail">
                                <img src="${imgs}" alt="pokemon">
                                <div class="caption">
                                    <h3>${names}</h3>
                                </div>
                            </div>
                        </div>
                   
                `)
        $result.append($list)
    }
}

//estaba aqui

$form.submit(function (e) {
    e.preventDefault()
    $result.html('')
    searched = $searchInput.val()
    getPokemon();
})
// ------------------------
function getPokemon() {
    $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${searched}/`
        }).done(addPokemon)
        .fail(error)
}

function addPokemon(news) {
    const poke = news.results
    const name = news.name
    const img = news.sprites.front_default
    const type = news.types[0].type.name

    let $div = $(`
                    
                        <div class="col-xs-4 col-xs-offset-4 text-center">
                            <div class="thumbnail">
                                <img src="${img}" alt="pokemon">
                                <div class="caption">
                                    <h3>${name}</h3>
                                    <p>${type}</p>
                                </div>
                            </div>
                        </div>
                    
                `)  
    $result.append($div)
}

function error() {
    console.log('Se ha presentado un error')
}
// -------------------------------
// (https://pokeapi.co/api/v2/pokemon/) muestra todos los pokemon
// (https://pokeapi.co/api/v2/pokemon/n°pokemon) muestra los datos del pokemon


//  function getPokemon() {
//       console.log('hola');

//     const myGif = document.getElementById('result-pokemon')
//     fetch(`https://pokeapi.co/api/v2/pokemon/${searched}/`)
//       .then(function(response) {
//         // Turns the the JSON into a JS object
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data); 

//         let html = ` 

//                   <img src="${data.sprites.front_shiny}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->

//                   <h5 class="black-text light">${data.name} </h5>
//                   <span class="black-text">Tipo: ${data.types[0].type.name} </span>

//                `;
//         myGif.innerHTML = html;
//       });
//   }
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


//   for(var i = 0 ; i < 5; i++){
//       const num = getRandomInt(0, 200)

//       fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
//           .then(function (response) {
//               // Turns the the JSON into a JS object
//               return response.json();
//           })
//           .then(function (data) {
//               console.log(data);

//               $('#result-pokemon').append( ` 

//                   <img src="${data.sprites.front_shiny}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
//                   <h5 class="black-text light">${data.name} </h5>
//                   <span class="black-text">Tipo: ${data.types[0].type.name} </span>`
//            )
//           });
//   }

        // for (var i = 0; i < 5; i++) {
        //     const num = getRandomInt(0, 200)

        //      $.ajax({
        //     url: `https://pokeapi.co/api/v2/pokemon/${num}/`
        //     })


        // const pokes = news.results
        // console.log(pokes);
        // const names = news.name
        // const imgs = news.sprites.front_default

        // let $list = $(`
        //             <div class="row">
        //                 <div class="col-xs-4 col-xs-offset-4 text-center">
        //                     <div class="thumbnail">
        //                         <img src="${imgs}" alt="pokemon">
        //                         <div class="caption">
        //                             <h3>${names}</h3>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         `)
        // $result.append($list)
        // }
