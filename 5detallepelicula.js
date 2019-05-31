window.onload = function(){
  var URLParams = new URLSearchParams(window.location.search);
  var id = URLParams.get('id');
console.log(id);

  var url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=a6cd418a24c7359fa07f8d31cab596b0&language=en-US"

    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(resultado) {
        console.log(resultado);



         var id = resultado.id
         var title = resultado.title
         var overview = resultado.overview
         var poster = resultado.poster_path
         var mainurl = "https://image.tmdb.org/t/p/original/"
         var release = resultado.release_date
         var runtime = resultado.runtime
         var tagline = resultado.tagline
         var genres = resultado.genres
         var listadodegenero = ""
          for (var i = 0; i < genres.length; i++) {
            listadodegenero = listadodegenero + genres[i].name  + "/ "
          }

         var originallanguage = resultado.original_language
         var video = resultado.video




///ver recomendaciones???!!!
         var article = ""
         article += "<article>"
          article += "<img src='" + mainurl+ poster + "'> "
           article += "<div><p class='titleclass'> " + title + " </p>"
           article += "<p class='taglineclass'>" + tagline + " </p>"
           article += "<p> " + overview + " </p>"
           article += "<br> <br>"

           article += "<p> Genres:  " + listadodegenero + " </p>"
           article += "<p> Original Language:  " + originallanguage + " </p>"
           article += "<p> Release date:  " + release + " </p>"
           article += "<p> Runtime:  " + runtime + " </p>"
           if (video){
                article += "<p> " + video + " </p>"
           }

           article += "</div>"
         article += "</article>"
         document.querySelector("main").innerHTML += article


      })
      .catch(function(error) {
        console.log("Error: " + error);
      })



}
