window.onload = function() {

//Populares
 fetch("https://api.themoviedb.org/3/movie/popular?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(resultado) {

    for (var i = 0; i < 6; i++) {
      var nombrePeli13 = resultado.results[i].title;
      console.log(nombrePeli13);
      var h1q = document.querySelector(".peli" + (i + 1))
      console.log(h1q);
      h1q.innerText=nombrePeli13
      var img12 = document.querySelector(".img" + (i + 1))
      img12.setAttribute("src", "https://image.tmdb.org/t/p/original" + resultado.results[i].poster_path)
    }
  })
  .catch(function(error) {
    console.log(error);
  })

//Rankeadas
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&page=1")
     .then(function(response) {
       return response.json();
     })
     .then(function(resultado) {
       for (var i = 0; i < 6; i++) {
         var nombrePeli13 = resultado.results[i].title;
         var h1q = document.querySelector(".peli" + (i + 7))
         h1q.innerText=nombrePeli13
         var img12 = document.querySelector(".img" + (i + 7))
         img12.setAttribute("src", "https://image.tmdb.org/t/p/original" + resultado.results[i].poster_path)
       }
     })
     .catch(function(error) {
       console.log(error);
     })

//Estrenos
       fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&page=1")
        .then(function(response) {
          return response.json();
        })
        .then(function(resultado) {

          for (var i = 0; i < 6; i++) {
            var nombrePeli13 = resultado.results[i].title;
            var h1q = document.querySelector(".peli" + (i + 13))
            h1q.innerText=nombrePeli13
            var img12 = document.querySelector(".img" + (i + 13))
            img12.setAttribute("src", "https://image.tmdb.org/t/p/original" + resultado.results[i].poster_path)
          }

        })
        .catch(function(error) {
          console.log(error);
        })




      var slideIndex = 1;
      showSlides(slideIndex);

      var slideIndex1 = 1;
      showSlides1(slideIndex1);

      var slideIndex2 = 1;
      showSlides2(slideIndex2);

      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function plusSlides1(n) {
        showSlides1(slideIndex1 += n);
      }

      function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
      }
      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex += n);
      }
      function currentSlide(n) {
        showSlides1(slideIndex1 += n);
      }
      function currentSlide(n) {
        showSlides2(slideIndex2 += n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
      }

      function showSlides1(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides1");
        if (n > slides.length) {slideIndex1 = 1}
        if (n < 1) {slideIndex1 = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex1-1].style.display = "block";
      }

      function showSlides2(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides2");
        if (n > slides.length) {slideIndex2 = 1}
        if (n < 1) {slideIndex2 = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex2-1].style.display = "block";
      }



}
