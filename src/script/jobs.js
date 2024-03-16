var input = document.getElementById('search_bar_id');

input.setAttribute('size',input.getAttribute('placeholder').length);

$(window).on('resize', function() {
    if ($(window).width() < 500) {
       $('.col').removeClass('col');
    } else {
       // If you want to add the class back when the window is resized to be larger than 500px
       // $('.col').addClass('col');
    }
   }).trigger('resize'); // Trigger the resize event on page load
   