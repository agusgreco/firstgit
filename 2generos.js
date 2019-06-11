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
      genos = ""
      for (var i = 0; i < 5; i++) {
        genos += "<div class='gene'>"
        genos += "<p>"
        genos += "<a class='genreclasss' href='3peliculasporgenero.html?id=" + resultado.genres[i].id + "&name=" + resultado.genres[i].name + "'>"
        genos += resultado.genres[i].name + "</p>"
        genos += "</a></div>"
      }
      // document.querySelector(".generos").innerHTML = genos

      genosdos = ""
      for (var i = 5; i < resultado.genres.length; i++) {
        genosdos += "<div class='gene'>"
        genosdos +=   "<p>"
        genosdos +=   "<a class='genreclasss' href='3peliculasporgenero.html?id=" + resultado.genres[i].id + "&name=" + resultado.genres[i].name + "'>"
        genosdos +=     resultado.genres[i].name + "</p>"
        genosdos +=   "</a>"
        genosdos += "</div>"
      }
      // document.querySelector(".generos").innerHTML += genosdos
      console.log(genosdos);
      // document.querySelector(".generos").innerHTML += "<div class='gene'><p><a class='genreclasss' href='3peliculasporgenero.html?id=" + resultado.genres[i].id + "&name=" + resultado.genres[i].name + "'>" + resultado.genres[i].name + "</p></div>";


      var articlesuge = ""
      articlesuge += genos
      articlesuge += '<button id="mo" > VER MAS </button>'
      articlesuge += "<article class='ocu ocultar'>"
      articlesuge +=  genosdos
      articlesuge += "</article>"
      document.querySelector(".generos").innerHTML += articlesuge


      // var ocultado = document.querySelector('.ocultar')

      var bot = document.querySelector('#mo')
      bot.addEventListener('click', mostrar)
      function mostrar(){
         document.querySelector('.ocu').classList.toggle('ocultar')
      }

     //  div += "</div>"
     // document.querySelector(".generos").insertAdjacentHTML('beforeend', div)

     // }
   })
   .catch(function(error) {
    console.log("Error: " + error);
   })

var hey = "hey"
console.log(hey);

}
