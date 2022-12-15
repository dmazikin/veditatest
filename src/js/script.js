$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1400: {
                items: 1,
            },
        },
    });
    let menu = $(".nav-menu ");
    let menuItem = $(".nav-menu__item");
    let hamburger = $(".hamburger");
    hamburger.on("click", function() {
        hamburger.toggleClass("hamburger_active");
        menu.toggleClass("nav-menu_active");
    });

    $(".btn_delivery").on("click", function() {
        $(".overlay,#consultation").fadeIn("slow");
    });

    $(".modal__close").on("click", function() {
        $(".overlay,#consultation,#thanks").fadeOut("slow");
    });
    $(".btn_submit").on("click", function() {
        $("#consultation").fadeOut("slow");
        $("#thanks").fadeIn("slow");
    });
    $(".btn_close").on("click", function() {
        $(".overlay,#thanks").fadeOut("slow");
    });

    $("input[name=phone]").mask("+7 (999) 999-99-99");

    $(".btn_order").on("click", function() {
        $("html, body").animate({
            scrollTop: $("#delivery").offset().top,
        }, {
            duration: 1200,
            easing: "linear",
        });
        return false;
    });
    $(function() {
        $("form").submit(function(e) {
            let $form = $(this);
            $.ajax({
                    type: $form.attr("method"),
                    url: $form.attr("action"),
                    data: $form.serialize(),
                })
                .done(function() {
                    console.log("success");
                })
                .fail(function() {
                    console.log("fail");
                });
            e.preventDefault();
        });
    });
});