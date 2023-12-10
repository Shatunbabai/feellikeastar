// Scroll Counter

let number1 = document.querySelector('.number1'),
    numberTop = number1.getBoundingClientRect().top,
    start1 = +number1.innerHTML,
    end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 1.2) {
        this.removeEventListener('scroll', onScroll);
        let interval = setInterval(function() {
            number1.innerHTML = ++start1;
            if (start1 == end1) {
                clearInterval(interval);
            }
        }, 150);
    }
});

let number2 = document.querySelector('.number2'),
    start2 = +number2.innerHTML,
    end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 1.2) {
        this.removeEventListener('scroll', onScroll);
        let interval = setInterval(function() {
            number2.innerHTML = ++start2;
            if (start2 == end2) {
                clearInterval(interval);
            }
        }, 20);
    }
});

let number3 = document.querySelector('.number3'),
    start3 = +number3.innerHTML,
    end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 1.2) {
        this.removeEventListener('scroll', onScroll);
        let interval = setInterval(function() {
            number3.innerHTML = ++start3;
            if (start3 == end3) {
                clearInterval(interval);
            }
        }, 15);
    }
});