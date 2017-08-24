$( document ).ready(resize);
window.addEventListener("resize", resize);

function resize() {
    header();
    if ($(window).height() < $('#background').height()) {
        remove_static_background();
        $(window).bind('mousewheel', stationary_background);
    }
    else {
        $(window).unbind('mousewheel');
        add_static_background();
    }
}



// Creates sticky header and offsets content below it
function header() {
  var header_wrap = document.getElementById('header-wrap');
  var description = document.getElementById('description');
  header_wrap.style.position = "fixed";
  description.style.paddingTop = header_wrap.offsetHeight;
}

function add_static_background() {
    var background = $('#background');
    var header_wrap = $('#header-wrap');
    background.addClass("stationary");
    background.css("top", function() {
        return ( $(window).height() - header_wrap.offsetHeight - background.offsetHeight/2);
    });
}

function remove_static_background() {
    var background = $('#background');
    background.removeClass("stationary");
}

function stationary_background(event, delta) {
    var background = $('#background');
    if ($('#resume').offset().top < 0) {
        if (!background.hasClass("stationary")) {
            background.addClass("stationary");
            background.css("top", 0);
        }
    }
    else if (background.hasClass("stationary")) {
        background.removeClass("stationary");
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
