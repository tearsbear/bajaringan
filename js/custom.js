$(document).ready(function() {  

  $(window).scroll(function() { // check if scroll event happened
          if ($(document).scrollTop() > 60) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-home").removeClass('navbar-transparent')
            $(".navbar-home").addClass('bg-blur')
            // $(".navbar-home").addClass('shadow-sm')
          } else {
            $(".navbar-home").removeClass('bg-blur')
            $(".navbar-home").addClass('navbar-transparent')
          }
        });
})