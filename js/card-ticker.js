let sizeWindow = window.innerWidth;

let item1 = document.getElementById("ticker1");
let item2 = document.getElementById("ticker2");
let item3 = document.getElementById("ticker3");
let item4 = document.getElementById("ticker4");
let item5 = document.getElementById("ticker5");
let item6 = document.getElementById("ticker6");

if (sizeWindow <= 768) {
    item1.addEventListener("touchstart", () => marqueeActive(".card-ticker1"), false)
    item1.addEventListener("touchend", () => marqueeInActive(".card-ticker1"), false);

    item2.addEventListener("touchstart", () => marqueeActive(".card-ticker2"), false)
    item2.addEventListener("touchend", () => marqueeInActive(".card-ticker2"), false);

    item3.addEventListener("touchstart", () => marqueeActive(".card-ticker3"), false)
    item3.addEventListener("touchend", () => marqueeInActive(".card-ticker3"), false);

    item4.addEventListener("touchstart", () => marqueeActive(".card-ticker4"), false)
    item4.addEventListener("touchend", () => marqueeInActive(".card-ticker4"), false);

    item5.addEventListener("touchstart", () => marqueeActive(".card-ticker5"), false)
    item5.addEventListener("touchend", () => marqueeInActive(".card-ticker5"), false);

    item6.addEventListener("touchstart", () => marqueeActive(".card-ticker6"), false)
    item6.addEventListener("touchend", () => marqueeInActive(".card-ticker6"), false);
} else {
    item1.addEventListener("mouseover", () => marqueeActive(".card-ticker1"), false)
    item1.addEventListener("mouseout", () => marqueeInActive(".card-ticker1"), false)

    item2.addEventListener("mouseover", () => marqueeActive(".card-ticker2"), false)
    item2.addEventListener("mouseout", () => marqueeInActive(".card-ticker2"), false)

    item3.addEventListener("mouseover", () => marqueeActive(".card-ticker3"), false)
    item3.addEventListener("mouseout", () => marqueeInActive(".card-ticker3"), false)

    item4.addEventListener("mouseover", () => marqueeActive(".card-ticker4"), false)
    item4.addEventListener("mouseout", () => marqueeInActive(".card-ticker4"), false)

    item5.addEventListener("mouseover", () => marqueeActive(".card-ticker5"), false)
    item5.addEventListener("mouseout", () => marqueeInActive(".card-ticker5"), false)

    item6.addEventListener("mouseover", () => marqueeActive(".card-ticker6"), false)
    item6.addEventListener("mouseout", () => marqueeInActive(".card-ticker6"), false)
}


function marqueeActive(cardTicker) {
    const marquee = document.querySelectorAll(cardTicker);
    let speed = 2;

    marquee.forEach(function(el) {
        const container = el.querySelector('.inner');
        const content = el.querySelector('.inner > *');
        //Get total width
        const elWidth = content.offsetWidth;

        let progress = 1;

        function loop() {
            progress = progress - speed;
            if (progress <= elWidth * -2.8) {
                progress = 0;
            }
            container.style.transform = 'translateX(' + progress + 'px)';
            container.style.transform += 'skewX(' + speed * 0.3 + 'deg)';

            window.requestAnimationFrame(loop);
        }

        loop();
    });
}

function marqueeInActive(cardTicker) {
    const marquee = document.querySelectorAll(cardTicker);

    marquee.forEach(function(el) {
        const container = el.querySelector('.inner');

        function loop() {
            container.style.transform = 'translateX(' + 0 + 'px)';
            container.style.transform += 'skewX(' + 0 + 'deg)';

            window.requestAnimationFrame(loop);
        }

        loop();
    });
}