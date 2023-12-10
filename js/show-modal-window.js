// open modal window, hidden sbm-block
$(document).ready(function() {
    $('.trigger').click(function() {
        $('.modal-wrapper').toggleClass('open');
        $('.contact-button-block').toggleClass('lock-contact-sbm');
        $('.vac-btn-block').toggleClass('lock-contact-sbm');
        $('.main-container-title').toggleClass('lock-header-sbm ');
    });
});

// check input for empty, switch btn to disable
function checkEmpty() {
    if ($('#name').val() && $('#phone').val() && $('#email').val() && $('#message').val() &&
        (!$('#errorPhone')[0].classList.contains('error-block') && !$('#errorEmail')[0].classList.contains('error-block')))
        $('#submit').removeAttr('disabled');
    else
        $('#submit').attr('disabled', 'disabled');
    $('.form-input').addClass('invalid');
    $('.vacancy-form-input').addClass('vac-invalid');
}

// clean inputs after form submit, btn stay disable
function resetForm() {
    let cleanForm = document.querySelector('form');
    cleanForm.reset();
    $('#submit').attr('disabled', 'disabled');
    $('.form-input').removeClass('invalid');
    $('.vacancy-form-input').removeClass('vac-invalid');
    return false;
}