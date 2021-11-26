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

// Mobile menu
    const mMenuBtn = $(".header__mobile-menu");
    const mMenu = $(".header__navigation-block");
    mMenuBtn.on('click', function() {
        mMenu.toggleClass('header__navigation-block--active');
        $("body").toggleClass('no-scroll');
    });

// Swiper
    const swiper = new Swiper(".news__swiper", {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
          navigation: {
            nextEl: '.news__button-next',
          }
        },
      }
    });

  // Переключатель актеров и создателей
    const tab = $('.tab');
    tab.on('click', function () {
      tab.removeClass('cast__title--active');
      $(this).toggleClass('cast__title--active');
      let activeTabContent = $(this).attr('data-target');
      $('.cast__content--active').removeClass('cast__content--active');
      $(activeTabContent).toggleClass('cast__content--active')

    })
})