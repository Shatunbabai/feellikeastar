$(document).ready(function() {
    $('.file-upload').change(function() {
        if (this.files[0])
            $('.file-label span').text(this.files[0].name);
        $('.cv-block').addClass('color-border-CV');
    });
});