// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();

// Throttle function to limit scroll event calls
function throttle(func, wait) {
    var timeout;
    return function executedFunction() {
        var context = this;
        var args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
    };
}

// Smooth scroll reveal animations
var scrollHandler = throttle(function() {
    $('.category_container .box, .client_section .detail-box, .freelance_section .tab_container .t-link-box').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    });
}, 100);

$(window).on('scroll', scrollHandler);

// Initialize elements with starting state
$(document).ready(function() {
    $('.category_container .box, .client_section .detail-box, .freelance_section .tab_container .t-link-box').css({
        'opacity': '0',
        'transform': 'translateY(30px)'
    });
    
    // Trigger scroll event on page load
    $(window).trigger('scroll');
});
