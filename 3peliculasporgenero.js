

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


      var div = ""
      div += "<div style='text-align:center'>"
      var x = 0;
     for (var i = 0; i < 10; i++) {
      var id = resultado.results[i].id
      var title = resultado.results[i].title
      var poster = resultado.results[i].poster_path




      var article = ""
      article += "<article class='slideshow-container'>"
        article += "<div class='mySlides fade'>"
         article +=   "<a class='genretitle' href='5detallepelicula.html?id=" + id + "'>"
         article += "<img src='" + mainurl+ poster + "' style='width: 300px;' >"
         article += "<div> <p class='thispara'> " + title + " </p> </div> </a>"
         // article +=  "<a class='prev' onclick='plusSlides(-1)'>&#10094;</a> <a class='next' onclick='plusSlides(1)'>&#10095;</a>"

        article += "</div>"


      article += "</article>"
      document.querySelector("main").innerHTML += article
      x=i+1;
      div += "<span class='dot' onclick='currentSlide("+x+")'> </span>"




//DESDE ACA




      // var slideIndex = 0;
      // showSlides();
      //
      // function showSlides() {
      //   var i;
      //   var slides = document.getElementsByClassName("mySlides");
      //   for (i = 0; i < slides.length; i++) {
      //     slides[i].style.display = "none";
      //   }
      //   slideIndex++;
      //   if (slideIndex > slides.length) {slideIndex = 1}
      //   slides[slideIndex-1].style.display = "block";
      //   setTimeout(showSlides, 2000); // Change image every 2 seconds
      // }


///HASTA ACA
     }
     div += "</div>"
    document.querySelector("main").innerHTML += div


    showSlides(1);
   })
   .catch(function(error) {
    console.log("Error: " + error);
   })

var hey = "hey"
console.log(hey);

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


//ad event listner to body for left right y que el left dispare plus slide -1 si es right +1
