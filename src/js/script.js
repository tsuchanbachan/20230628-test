
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    /* ハンバーガーボタン */
    $(".js-hamburger").click(function () {
        if($(".js-hamburger").hasClass('is-active')) {
            $('.js-hamburger').removeClass("is-active");
            $(".js-sp-nav").fadeOut(300);
        } else {
            $('.js-hamburger').addClass("is-active");
            $(".js-sp-nav").fadeIn(300);
        }
    });

    /* クラス名「.mySwiper」→「.js-works-swiper」へ変更 */
    var swiper = new Swiper(".js-works-swiper", {
        pagination: {
            /* HTMLのクラス名追加に伴って、「.swiper-pagination」から「.js-works-pagination」へ */
            el: ".js-works-pagination",
        },
        clickable: true,
        loop: true,
        autoplay: {
            /* 3000くらいが適当か？ */
            delay: 3000,
        },
    });

});
