window.onload = function(){
var URLParams = new URLSearchParams(window.location.search);
var query = URLParams.get('buscador');

console.log(query);

  var url = "https://api.themoviedb.org/3/search/movie?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&query=" + query + "&page=1&include_adult=false&limit=25&offset=0&rating=G&lang=en"
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(resultado) {
        console.log(resultado);
       var peliculas = resultado.results
       var poster = "";
       var mainurl = "https://image.tmdb.org/t/p/original/"
       var title = "";
       for (var i = 0; i < peliculas.length; i++) {
            title = peliculas[i].title
            document.querySelector(".articulo").innerHTML += "<p><a href='detalle.html?id='>" + title + "</p>";

            poster = peliculas[i].poster_path
            document.querySelector(".articulo").innerHTML += "<img src='" + mainurl + poster + "'>"
        }
    })
      .catch(function(error) {
        console.log("Error: " + error);
      })
}
