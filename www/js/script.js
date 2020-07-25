// go to sections
$(".portfolioBtn").on("click", function () {
    $("body, html").animate({
            scrollTop: $("#portfolio").offset().top,
        },
        1000
    );
    closeNav();
});

$(".skillsBtn").on("click", function () {
    $("body, html").animate({
            scrollTop: $("#skills").offset().top,
        },
        1000
    );
    closeNav();
});
$(".aboutBtn").on("click", function () {
    $("body, html").animate({
            scrollTop: $("#aboutMe").offset().top,
        },
        1000
    );
    closeNav();
});
$(".contactBtn").on("click", function () {
    $("body, html").animate({
            scrollTop: $("#contact").offset().top,
        },
        1000
    );
    closeNav();
});
// go back to top btn
const windowHeight = $(window).height();

$(document).on("scroll", function () {
    if ($(document).scrollTop() >= windowHeight) {
        $(".goBackToTop").addClass("active");
    } else {
        $(".goBackToTop").removeClass("active");
    }
});
$(".goBackToTop").on("click", function () {
    $("body, html").animate({
            scrollTop: 0,
        },
        1000
    );
});

// burger

const barsBtn = document.querySelector('.fa-bars');
const timesBtn = document.querySelector('.fa-times');
const nav = document.querySelector('nav');

const openNav = () => {
    barsBtn.style.display = 'none';
    timesBtn.style.display = 'block';
    nav.style.top = '0'
}
barsBtn.addEventListener('click', openNav)

const closeNav = () => {
    barsBtn.style.display = 'block';
    timesBtn.style.display = 'none';
    nav.style.top = '-100%'
}

timesBtn.addEventListener('click', closeNav)