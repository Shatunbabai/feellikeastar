jQuery(function($) {
    let doAnimations = function() {
        let offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        if ($animatables.length === 0) {
            $(window).off('scroll', doAnimations);
        }

        $animatables.each(function(i) {
            let $animatable = $(this);
            if (($animatable.offset().top) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});