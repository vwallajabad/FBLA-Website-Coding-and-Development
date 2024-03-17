var input = document.getElementById('search_bar_id');

input.setAttribute('size',input.getAttribute('placeholder').length);

$(window).on('resize', function() {
    if ($(window).width() < 600) {
       $('.col').removeClass('col');
       $("#main_content").css("display", "");
       $("#main_content").css("flex-wrap", "");
    } else {
    }
   }).trigger('resize');
   