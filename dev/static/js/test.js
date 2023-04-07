let form = document.querySelector('.form');
let formSubmit = document.querySelector('.form__submit');
let formInput = document.querySelector('.form__input');
let formMessage = document.querySelector('.form__description');
let formTitle = document.querySelector('.form__title');
let formItem = document.querySelector('.form__item');

form.onsubmit = function() {
    event.preventDefault();

    form.classList.add('hiding')
    setTimeout(function() {
        form.classList.remove('hiding');
        form.classList.add('hidden');
        formTitle.textContent = 'Thank you!'
        formMessage.textContent = 'ID ' + formInput.value + ' added to waitlist'
    }, 300);

    setTimeout(function() {
        form.classList.add('charging');
        form.classList.remove('hidden');
        formTitle.textContent = 'Subscribe form';
        formMessage.textContent = 'just to be always on time';
        formInput.value = '';
    }, 5000);

    setTimeout(function() {
        form.classList.remove('charging');
    }, 5100);
};
