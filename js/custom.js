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

// Smooth scroll reveal animations
$(window).on('scroll', function() {
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
});

// Initialize elements with starting state
$(document).ready(function() {
    $('.category_container .box, .client_section .detail-box').css({
        'opacity': '0',
        'transform': 'translateY(30px)'
    });
    
    // Trigger scroll event on page load
    $(window).trigger('scroll');
});
