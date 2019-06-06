window.onload = function(){
  var URLParams = new URLSearchParams(window.location.search);
  var id = URLParams.get('id');
console.log(id);

//Zoe toco aca
var string = localStorage.getItem("favoritos")
var obj = JSON.parse(string)

if (string != null) {
var obj = JSON.parse(string)
var favoritos = obj.carac;
} else {
var favoritos = []
}
//Zoe dejo de tocar aca

console.log(typeof(obj));
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
            listadodegenero = listadodegenero + "<a class='link-genero' href=3peliculasporgenero.html?id=" + genres[i].id + "&name=" + genres[i].name +  ">" + genres[i].name  + "</a>" + "/ "
          }

         var originallanguage = resultado.original_language
         var video = resultado.video




         var article = ""
         article += "<article>"
          article += "<img src='" + mainurl+ poster + "'> "
           article += "<div><p class='titleclass'> " + title + " </p>"

           //Zoe toco aca
           if (favoritos.includes(id)) {
          article += "<p class='color-gold star' id=id"+id+">&#9733;</p>" //star es la clase y color-gold es el color
        } else {
          article += "<p class='color-black star' id=id"+id+">&#9733;</p>"
        }

        //Zoe toco aca

           article += "<p class='taglineclass'>" + tagline + " </p>"
           article += "<p> " + overview + " </p>"
           article += "<br> <br>"

           article += "<p>  Genres: " + listadodegenero + "</p>"
           article += "<p> Original Language:  " + originallanguage + " </p>"
           article += "<p> Release date:  " + release + " </p>"
           article += "<p> Runtime:  " + runtime + " </p>"
           if (video){
                article += "<p> " + video + " </p>"
           }

           article += "</div>"
         article += "</article>"
         document.querySelector("main").innerHTML += article

         //Zoe toco
         console.log(document.querySelector(".star"));

         var star = document.querySelector(".star")
         star.addEventListener('click', function(){

           alert("tocaste estrellitas")
          if (favoritos.includes(id)) {
            var index = favoritos.indexOf(id)
            favoritos.splice(index,1)

            document.querySelector(".star").classList.add("color-black")
            document.querySelector(".star").classList.remove("color-gold")
          } else {
            alert("entro en el else")
            favoritos.push(id)
            document.querySelector(".star").classList.remove("color-black")
            document.querySelector(".star").classList.add("color-gold")
          }

          obj = {
            carac: favoritos
          }

          string = JSON.stringify(obj)

          localStorage.setItem("favoritos", string)
        })
        //} //termina la funcion
      //Zoe dejo de tocar

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })


//aca empieza ver recommendations



        var URLParams = new URLSearchParams(window.location.search);
        var id = URLParams.get('id');
      console.log(id);

    var url = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=a6cd418a24c7359fa07f8d31cab596b0&language=en-US&page=1"

    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(resultados) {
        console.log(resultados);

        var otro = ""
        var array = resultados.results
        var mainurl = "https://image.tmdb.org/t/p/original/"

        var div = ""
        div += "<div style='text-align:center'>"
        var x = 0;



        for (var i = 0; i < array.length; i++) {
        otro = otro + "<article class='slideshow-container'> <div class='mySlides fade'> <a class='link-otro genretitle' href='5detallepelicula.html?id=" + array[i].id + "&name=" + array[i].title +  "'> <img src='" + mainurl + array[i].poster_path + "'<div> <p class='thispara'> " + array[i].title + " </p> </div> </a>" + " </div>"
        }



        var articlesuge = ""
        articlesuge += '<button id="mo" > SUGGESTIONS </button>'
        articlesuge += "<article class='ocultar'>"
        articlesuge += otro
        articlesuge += "</article>"
        document.querySelector(".otroart").innerHTML += articlesuge

        x=i+1;
        div += "<span class='dot' onclick='currentSlide("+x+")'> </span>"


        var ocultado = document.querySelector('.ocultar')

        var bot = document.querySelector('#mo')
        bot.addEventListener('click', mostrar)
        function mostrar(){

          ocultado.classList.toggle('ocultar')
        }

        div += "</div>"
       document.querySelector("main").innerHTML += div


       showSlides(1);
})

.catch(function(error) {
 console.log("Error: " + error);
})


}



var slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
