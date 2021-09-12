// $(window).on("load", function() {
//   $(".se-pre-con").fadeOut("slow");;
// });

$(document).ready(function() {
    var url = window.location.href.replace("?m=1", "");
    var uri = url.substring(url.lastIndexOf("/") + 1);
    switch (uri) {
        case "quem-somos":
            $("#main__about").show();
            $("." + uri).addClass("active");
            break;
        case "servicos":
            $("#main__services").show();
            
AOS.init({
    offset: 200,
    duration: 1200,
    delay: 100,
    once: true
});
            break;
        case "contato":
            $("#main__contact").show();
            break;
        default:
            $("#main__home").show();
            break;
    }

    // Menu activation
    switch (uri) {
        case "quem-somos":
        case "servicos":
        case "contato":
            $("." + uri).addClass("active");
            break;
        default:
            $(".home").addClass("active");
            break;
    }

    // Scroll button
    $("#scroll-btn").click(function() {
        scrollToTop();
    });

    $('a[href^="#"]').click(function(event) {
        event.preventDefault();

        $("html, body").animate({
                scrollTop: $(this).offset().top,
            },
            500
        );
    });

    // Logo Animation
    var textWrapper = document.querySelector(".ml9 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    anime
        .timeline({
            loop: false
        })
        .add({
            targets: ".ml9 .letter",
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 45 * (i + 1),
        })
        .add({
            targets: ".ml9",
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });

    // Referrals
    $(".referrals:not(.slick-initialized)").slick({
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $("button.slick-arrow").empty();

    $(".beliefs-list")
        .not(".slick-initialized")
        .slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 8000,
        })
        .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            $(".nav-link").removeClass("active");
            $(".nav-" + (nextSlide + 1)).addClass("active");
        });
    $(".beliefs button.slick-arrow, .slick-dots").hide();

    $(".nav-beliefs a").each(function(i) {
        $(this).click(function() {
            $(".slick-dots button[id$='" + i + "']").click();
        });
    });

    // Menu
    $("div.burger").on("click", function() {
        if (!$(this).hasClass("open")) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    $("div.menu ul li a").on("click", function() {
        closeMenu();
    });

    // Popups
    $("#our-packages").magnificPopup({
        delegate: "a",
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr("data-effect");
            },
        },
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    function openMenu() {
        $("div.circle").addClass("expand");

        $("div.burger").addClass("open");
        $("div.x, div.y, div.z").addClass("collapse");
        $(".menu li").addClass("animate");

        setTimeout(function() {
            $("div.y").hide();
            $("div.x").addClass("rotate30");
            $("div.z").addClass("rotate150");
        }, 70);
        setTimeout(function() {
            $("div.x").addClass("rotate45");
            $("div.z").addClass("rotate135");
        }, 120);
    }

    function closeMenu() {
        $("div.burger").removeClass("open");
        $("div.x").removeClass("rotate45").addClass("rotate30");
        $("div.z").removeClass("rotate135").addClass("rotate150");
        $("div.circle").removeClass("expand");
        $(".menu li").removeClass("animate");

        setTimeout(function() {
            $("div.x").removeClass("rotate30");
            $("div.z").removeClass("rotate150");
        }, 50);
        setTimeout(function() {
            $("div.y").show();
            $("div.x, div.y, div.z").removeClass("collapse");
        }, 70);
    }
});

var sticky = $("header").offset().top;

window.onscroll = function() {
    watchScrollDown();
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#scroll-btn").show();
    } else {
        $("#scroll-btn").hide();
    }
}

function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

function watchScrollDown() {
    if (window.pageYOffset > sticky) {
        $("header h1, header, header .header").addClass("scrolled");
    } else {
        $("header h1, header, header .header").removeClass("scrolled");
    }
}

$.each($('span.tag img'), function (i, curr) {
    var src_w = $(curr).siblings('source[type="image/webp"]')
    var src_p = $(curr).siblings('source[type="image/png"]')

    $(curr).hover(function () {
        var new_srcset_w = $(src_w).attr('srcset').replace('.webp', '2.webp')
        var new_srcset_p = $(src_p).attr('srcset').replace('.png', '2.png')
        $(src_w).attr('srcset', new_srcset_w)
        $(src_p).attr('srcset', new_srcset_p)
    }, 
    function () {
        var new_srcset_w = $(src_w).attr('srcset').replace('2.webp', '.webp')
        var new_srcset_p = $(src_p).attr('srcset').replace('2.png', '.png')
        $(src_w).attr('srcset', new_srcset_w)
        $(src_p).attr('srcset', new_srcset_p)
    });
});
