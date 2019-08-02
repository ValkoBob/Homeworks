$(document).ready(function () {
  const scrollToTop = $(".scrollToTop");
  const page = $("html, body");
  scrollToTop.on('click', function () {
    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
      page.stop();
    });

    page.animate({scrollTop: 0}, 'slow', function () {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });
    return false;
  });

  $(window).on('scroll', function () {
    const self = $(this),
        height = self.height() / 2,
        top = self.scrollTop();
    if (top < height) {
      if (!scrollToTop.hasClass('hidden')) {
        scrollToTop.addClass('hidden');
      }
    } else {
      scrollToTop.removeClass('hidden');
    }
  });


  $('a[href^="#"]').click(function () {
    let element = $($.attr(this, 'href')),
        elementOffset = element.offset().top,
        elementHeight = element.height(),
        windowHeight = $(window).height();
    if (elementHeight < windowHeight && elementOffset > windowHeight / 2) {
      elementOffset = elementOffset - (windowHeight - elementHeight) / 2;
    }

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
      page.stop();
    });

    page.animate({scrollTop: elementOffset}, 'slow', function () {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });
    return false;
  });

});