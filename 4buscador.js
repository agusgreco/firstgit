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
        //document.querySelector(".avatar-user").src = resultado.data
       for (var i = 0; i < peliculas.length; i++) {
        //var id = resultado.data[i].id
         var title = peliculas[i].title
         //var url = resultado.data[i].images.original.url

        document.querySelector("h1").innerHTML += "<p><a href='detalle.html?id='>" + title + "</p>";
         document.querySelector("h1").innerHTML += "<img src=" + url + ">"


        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
}
