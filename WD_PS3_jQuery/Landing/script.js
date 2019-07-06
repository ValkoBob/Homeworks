$(document).ready(function () {
    let scrollToTop = $(".scrollToTop");
    scrollToTop.on('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    $(window).on('scroll', function () {
        let self = $(this),
            height = self.height(),
            top = self.scrollTop();
        if (top < height) {
            if (!scrollToTop.hasClass('hidden')) {
                scrollToTop.addClass('hidden');
            }
        } else {
            scrollToTop.removeClass('hidden');
        }
    });
    $('a[href^="#"]').click(function(e) {
        let element = $($.attr(this, 'href')),
            elementOffset = element.offset().top,
            elementHeight = element.height(),
            windowHeight = $(window).height();
        if(elementHeight < windowHeight && elementOffset > windowHeight / 2){
            elementOffset = elementOffset - (windowHeight - elementHeight) / 2;
        }
        $('html').animate({
            scrollTop: elementOffset
        }, 'slow');
    });
});