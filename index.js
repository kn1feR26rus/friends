$(document).ready(function () {
  new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    spaceBetween: 16,
    observer: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $("#header_nav-btn").click(function () {
    $(this).toggleClass("open");
    $(".full_menu").toggleClass("open_menu");
    $("body").toggleClass("overflow");
  });

  $(".item_url").click(function () {
    $("#header_nav-btn").toggleClass("open");
    $(".full_menu").toggleClass("open_menu");
    $("body").toggleClass("overflow");
  });
});
