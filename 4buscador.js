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
       var poster =resultado.poster_path
       var mainurl = "https://image.tmdb.org/t/p/original/"


       for (var i = 0; i < peliculas.length; i++) {
         var title = peliculas[i].title

        document.querySelector("h1").innerHTML += "<p><a href='detalle.html?id='>" + title + "</p>";
        for (var i = 0; i < array.length; i++) {
          console.log(array[i].title);}}
//         otro = otro + "<a class='linkjj' href=5detallepelicula.html?id=" + peliculas[i].id + "&name=" + peliculas[i].title +  ">" + peliculas[i].title  + "</a>" + "/ "
      //   var article2 =""
      //   article2 += "<article>"
      //    article2 += "<img src='" + mainurl+ poster + "'> "
      // article2 += "</article>"
      // document.querySelector(".posters").innerHTML += article2



    })
      .catch(function(error) {
        console.log("Error: " + error);
      })
}
