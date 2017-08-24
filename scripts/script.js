$( document ).ready(resize);
window.addEventListener("resize", resize);

function resize() {
    sticky_header();

    // To prevent the background from taking up the description's space
    var content_height = $('#description').outerHeight() + $('#background div').height()/2;
    if ($(window).outerHeight()/2 < content_height) {
        $(window).bind('mousewheel DOMMouseScroll touchmove', stationary_background);
    }
    else {
        $(window).unbind('mousewheel DOMMouseScroll touchmove', stationary_background);
        static_background();
    }
}

// Creates sticky header and offsets content below it
function sticky_header() {
  var header_wrap = document.getElementById('header-wrap');
  var description = document.getElementById('description');
  header_wrap.style.position = "fixed";
  description.style.paddingTop = header_wrap.offsetHeight;
}

function stationary_background(event) {
    var background = $('#background');
    var delta = event.originalEvent.deltaY || 0;

    // This timeout allows the element to be offset before checking
    // else the scroll acts clunky
    var timeout = (event.type == 'touchmove') ? 20 : 100;
    setTimeout(function() {
        if (delta >= 0 && !background.hasClass("stationary")) {
            //Check if static height, set as static instead
            if ($('#resume').offset().top < $(window).outerHeight()/2 - $('#background div').height()/2) {
                static_background();
            }
            else if ($('#resume').offset().top < 40) {
                static_background(0);
            }
        }
        else if (delta <= 0 && background.hasClass("stationary")) {
            //TODO check if static height, reset stationary (is glitchy atm)
            if ($('#resume').offset().top > -40) {
                background.removeClass("stationary");
            }
        }
    }, timeout);
}

function static_background(top) {
    var background = $('#background');
    background.addClass("stationary");
    if (!isNaN(top)) background.css("top", top);
    else background.css("top", function(index) {
        // Half screen height, half background image height
        return ( $(window).outerHeight()/2 - $('#background div').height()/2 );
    });
}


// This stops working after triggering static_background
// $(document).on('keydown', function(e) {
//     switch(e.which) {
//         case 38: // up
//         case 40: // down
//             if (($(window).height() < $('#background').height()))
//                 static_background(e);
//         default: return;
//     }
// });
