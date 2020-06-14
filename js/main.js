/*
    Contains some functions to manage the transitions on the site.
 */

$(document).ready(() => {
    let vertScrollAmount = window.innerHeight;

    $(".portfolio").css("top", vertScrollAmount); // relocate portfolio for animation later

    // portfolio sliding up, removing landing
    $("#portfolio").click(() => {
        $(".portfolio").show().animate({top: 0}, {duration: 1000, queue: false});
        $(".landing").animate({top: -vertScrollAmount}, {duration: 1000, queue: false});
    });

    // landing sliding down, removing portfolio
    $("#portfolioLanding").click(() => {
        $(".portfolio").animate({top: vertScrollAmount}, {duration: 1000, queue: false});
        $(".landing").animate({top: 0}, {duration: 1000, queue: false});

        // re-hide portfolio
        setTimeout(() => {
            $(".portfolio").hide();
        }, 1000);
    });
});
