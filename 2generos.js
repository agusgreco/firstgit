window.onload = function(){

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=a6cd418a24c7359fa07f8d31cab596b0&language=en-US")
   .then(function(response) {
     return response.json();
   })
   .then(function(resultado) {
     console.log("uhrjdfk");
     console.log(resultado.genres);


     // for (var i = 0; i < 4; i++) {
     //  var id = resultado.genres[i].id
     //  var name = resultado.genres[i].name
     //  var classs = ".gene"+i
     //  console.log(classs)
     //
      // document.querySelector(classs).innerHTML += "<p><a href='3peliculasporgenero.html?id=" + resultado.genres[i].id + "'>" + resultado.genres[i].name + "</p>";
      for (var i = 0; i < resultado.genres.length; i++) {
        document.querySelector(".generos").innerHTML += "<div class='gene'><p><a class='genreclasss' href='3peliculasporgenero.html?id=" + resultado.genres[i].id + "&name=" + resultado.genres[i].name + "'>" + resultado.genres[i].name + "</p></div>";

      }

     // }
   })
   .catch(function(error) {
    console.log("Error: " + error);
   })

var hey = "hey"
console.log(hey);

}
