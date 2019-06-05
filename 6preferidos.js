window.onload = function() {

    var favoritos = localStorage.getItem("favoritos")
    var arrayFavoritos = JSON.parse(favoritos)
    console.log(arrayFavoritos.carac);

    for (var i = 0; i < arrayFavoritos.carac.length; i++) {
      var url = "https://api.themoviedb.org/3/movie/" + arrayFavoritos.carac[i] + "?api_key=a6cd418a24c7359fa07f8d31cab596b0&language=en-US"

        fetch(url)
          .then(function(respuesta) {
            return respuesta.json()
          })
          .then(function(resultado) {
            console.log(resultado);
            var pelicula = resultado
              var id = pelicula.id
              var title = pelicula.title
              var mainurl = "https://image.tmdb.org/t/p/original/"
              var poster = mainurl +  pelicula.poster_path

              document.querySelector("#section-fav").innerHTML += '<article class=""><p>'+title+'</p><img src="'+poster+'" alt=""></article>'



    })

    .catch(function(error) {
      console.log("Error: " + error);
    })
}
}
