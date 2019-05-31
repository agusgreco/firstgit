

window.onload = function(){
  var URLParams = new URLSearchParams(window.location.search);
  var id = URLParams.get('id');
console.log(id);


  fetch("https://api.themoviedb.org/3/discover/movie?api_key=a6cd418a24c7359fa07f8d31cab596b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id)
   .then(function(response) {
     return response.json();
   })
   .then(function(resultado) {
     console.log(resultado);
     console.log(resultado.results);
     var mainurl = "https://image.tmdb.org/t/p/original/"
     // var main = document.querySelector("main")  ///aca como pongo el titulo de el genero???!!!
     // main.innerHTML("hey")

// tambien, como hago lo de paginados???!!! para que se vean mas peliculas?


      var articleuno = ""
      articleuno += "<article>"
      articleuno += "<h1>" + URLParams.get('name');  + "</h1>"
      articleuno += "</article>"
      document.querySelector("main").innerHTML += articleuno

     for (var i = 0; i < 10; i++) {
      var id = resultado.results[i].id
      var title = resultado.results[i].title
      var poster = resultado.results[i].poster_path




      var article = ""
      article += "<article>"
        article += "<a class='genretitle' href='5detallepelicula.html?id=" + id + "'> <p> " + title + " </p>"
        article += "<img src='" + mainurl+ poster + "' style='width: 300px;' > </a>"
      article += "</article>"
      document.querySelector("main").innerHTML += article




     }
   })
   .catch(function(error) {
    console.log("Error: " + error);
   })

var hey = "hey"
console.log(hey);

}
