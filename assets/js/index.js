$(document).ready(function () {
    $('#telefoneInput').mask('(00) 0 0000-0000');
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > (window.innerHeight - $('#menu').innerHeight())) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});

$('.link').click(function (evt) {
    evt.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(href).offset().top - $('#menu').innerHeight())
    }, 1000);
});