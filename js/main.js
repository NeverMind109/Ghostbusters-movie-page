jQuery(document).ready(function($){
// Запуск трейлера с помощью fancybox
    Fancybox.bind("[data-fancybox-plyr]", {
        on: {
          reveal: (fancybox, slide) => {
            if (typeof Plyr === undefined) {
              return;
            }
      
            let $el;
      
            if (slide.type === "html5video") {
              $el = slide.$content.querySelector("video");
            } else if (slide.type === "video") {
              $el = document.createElement("div");
              $el.classList.add("plyr__video-embed");
      
              $el.appendChild(slide.$iframe);
      
              slide.$content.appendChild($el);
            }
      
            if ($el) {
              slide.player = new Plyr($el);
            }
          },
          "Carousel.unselectSlide": (fancybox, carousel, slide) => {
            if (slide.player) {
              slide.player.pause();
            }
          },
          "Carousel.selectSlide": (fancybox, carousel, slide) => {
            if (slide.player) {
              slide.player.play();
            }
          },
        },
      });

// 
    const mMenuBtn = $(".header__mobile-menu");
    const mMenu = $(".header__navigation-block");
    mMenuBtn.on('click', function() {
        mMenu.toggleClass('header__navigation-block--active');
        $("body").toggleClass('no-scroll');
    })
})