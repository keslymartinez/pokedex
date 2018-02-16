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
        const names = news.name;
        const imgs = news.sprites.front_default;
        const types = news.types[0].type.name

        let $list = $(`              
                        <div class="col-xs-4 text-center">
                            <div class="thumbnail">
                                <img src="${imgs}" alt="pokemon">
                                <div class="caption">
                                    <h3>${names}</h3>
                                    <p>${types}</p>
                                </div>
                                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Ver información</button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-sm">

                            <!-- Modal content-->
                            <div class="modal-content text-center">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h1 class="modal-title">${names}</h1>
                            </div>
                            <div class="modal-body">
                                <h4>N°: ${news.id}</h4>
                                <img src="${imgs}" alt="pokemon">
                                <p>type: ${types}</p>
                                <p>height: ${news.height}</p>
                                <p>weight: ${news.weight}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                            </div>

                        </div>
                        </div>
                   
                `)
        $result.append($list)
    }
}

$form.submit(function (e) {
    e.preventDefault()
    $result.html('')
    searched = $searchInput.val()
    getPokemon();
})

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
                                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Ver información</button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-sm">

                            <!-- Modal content-->
                            <div class="modal-content text-center">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h1 class="modal-title">${name}</h1>
                            </div>
                            <div class="modal-body">
                                <h4>N°: ${news.id}</h4>
                                <img src="${img}" alt="pokemon">
                                <p>type: ${type}</p>
                                <p>height: ${news.height}</p>
                                <p>weight: ${news.weight}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                            </div>

                        </div>
                        </div>
                `)
    $result.append($div)
}

function error() {
    console.log('Se ha presentado un error')
}