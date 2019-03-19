$(document).ready(function() {
  // Hide navigation bar
  $('.navbar').hide()

  // Fade in navbar
  $(function () {
    $(window).scroll(function () {
      // Set distance user needs to scroll in order to fade in the navbar
      if ($(this).scrollTop() > 100) {
        $('.navbar').fadeIn()
      } else {
        $('.navbar').fadeOut()
      }
    })
  })
})