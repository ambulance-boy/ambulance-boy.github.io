$( document ).ready(resize);
window.addEventListener("resize", resize);

function resize() {
    header();
    if ($(window).height() < $('#background').height()) {
        $(window).bind('mousewheel', static_background);
    }
    else {
        $(window).unbind('mousewheel');
    }
}

// $(document).on('keydown', function(e) {
//     switch(e.which) {
//         case 38: // up
//         case 40: // down
//             if (($(window).height() < $('#background').height()))
//                 static_background(e);
//         default: return;
//     }
// });

// Creates sticky header and offsets content below it
function header() {
  var header_wrap = document.getElementById('header-wrap');
  var description = document.getElementById('description');
  header_wrap.style.position = "fixed";
  description.style.paddingTop = header_wrap.offsetHeight;
}

function static_background(event, delta) {
    var background = $('#background');
    if ($('#resume').offset().top < 0) {
        if (!background.hasClass("stationary")) {
            background.addClass("stationary");
        }
    }
    else if (background.hasClass("stationary")) {
        background.removeClass("stationary");
    }
}

