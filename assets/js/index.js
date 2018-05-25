$(window).on("scroll", function () {
    if ($(window).scrollTop() > (window.innerHeight - $('#menu').innerHeight())) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});

$('.nav-link').click(function (evt) {
    evt.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(href).offset().top - $('#menu').innerHeight())
    }, 1000);
});