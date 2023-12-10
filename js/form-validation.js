let phone = document.getElementById("phone");
let errorPhone = document.getElementById("errorPhone");
let email = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");

phone.oninput = function() {
    let reg = new RegExp('^(\\+)?(\\(\\d{2,3}\\) ?\\d|\\d)(([ \\-]?\\d)|( ?\\(\\d{2,3}\\) ?)){8,12}\\d$');
    if (reg.test(phone.value)) { // не телефон
        phone.classList.remove('invalid');
        errorPhone.classList.remove('error-block');
        errorPhone.title = "";
    } else {
        phone.classList.add('invalid');
        errorPhone.classList.add('error-block');
        errorPhone.title = 'Неверный формат телефона';
    }
};

email.oninput = function() {
    let reg = new RegExp('^([A-Za-z0-9_\\-+.])+@([A-Za-z0-9\\-.]{1,})+\\.([A-Za-z]{2,10})$');
    if (reg.test(email.value)) { // не почта
        email.classList.remove('invalid');
        errorEmail.classList.remove('error-block');
        errorEmail.title = "";
    } else {
        email.classList.add('invalid');
        errorEmail.classList.add('error-block');
        errorEmail.title = 'Неверный формат email';
    }
};