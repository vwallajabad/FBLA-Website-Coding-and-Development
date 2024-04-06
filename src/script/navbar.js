document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.getElementById('navbarToggler');
    var navbarCollapse = document.getElementById('navbarNavAltMarkup');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.style.marginLeft = '20px';
        navbarCollapse.classList.toggle('show');
    });
});
