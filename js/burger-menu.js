(function() {
    let burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header'),
        body = document.querySelector("body"),
        burgerButtonClose = document.querySelector(".innerBurger-close")

    burger.onclick = function() {
        $(".main-logo-burger").toggle();
        $(".main-logo").toggle();
        $(".innerBurger").toggle();
        $(".burger-img").toggleClass('active')
        burgerButtonClose.classList.toggle("activeBurger");
        header.classList.toggle('menu-opened');
        body.classList.toggle('scroll-hidden');
    }

    $(".menu-item").click(function() {
        $(".main-logo-burger").toggle();
        $(".main-logo").toggle();
        body.classList.toggle('scroll-hidden');
        $(".innerBurger").toggle();
        header.classList.toggle('menu-opened');
        burgerButtonClose.classList.toggle("activeBurger");
    });
}());