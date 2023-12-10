const images = document.querySelectorAll(".overlay-box");

const removeOverlay = overlay => {
    let tl = gsap.timeline();

    tl.to(overlay, {
        duration: 0.7,
        ease: "Power2.easeInOut",
        width: "0%"
    });

    return tl;
};

const scaleInImage = image => {
    let tl = gsap.timeline();

    tl.from(image, {
        duration: 1,
        scale: 1,
        ease: "Power2.easeInOut"
    });

    return tl;
};

images.forEach(image => {

    gsap.set(image, {
        visibility: "visible"
    });

    const overlay = image.querySelector('.overlay-box-inner');
    const img = image.querySelector(".overlay-box-image");

    const masterTL = gsap.timeline({
        paused: true
    });
    masterTL
        .add(removeOverlay(overlay))
        .add(scaleInImage(img), "-=1.2");


    let options = {
        threshold: 0
    }

    const io = new IntersectionObserver((entries, options) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                masterTL.play();
            } else {
                masterTL.progress(0).pause()
            }
        });
    }, options);

    io.observe(image);
});