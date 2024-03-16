var input = document.getElementById('search_bar_id');

input.setAttribute('size',input.getAttribute('placeholder').length);

$(window).on('resize', function() {
    if ($(window).width() < 700) {
        alert('window is smaller than 500px');
       $('.col').removeClass('col');
    } else {
    }
   }).trigger('resize');
   
   console.log($(window).width());