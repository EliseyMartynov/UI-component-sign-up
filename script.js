// regex inspired: https://www.sitepoint.com/learn-regex/

const formSubmit = document.querySelector('#form-submit');
const emailInput = document.querySelector('#email-input');

formSubmit.addEventListener('click', submiting);

const newAlert = document.createElement('div');
newAlert.setAttribute('class', 'alerting');
newAlert.style.padding = '0.3rem';
newAlert.style.marginBottom = '0.3rem';
newAlert.style.width = 'fit-content';

function submiting(e) {

    emailInput.parentElement.insertBefore(newAlert, formSubmit);

    let regex = /\w\@\w+\.(([\w]{2}|[\w]{3})|(([\w]{2}|[\w]{3})\.([\w]{2}|[\w]{3})))$/gi;

    if(regex.test(emailInput.value)){

        newAlert.innerHTML = 'Success!';
        newAlert.style.backgroundColor = 'var(--validate-cool)';

    } else if (emailInput.value === ''){

        newAlert.innerHTML = 'Enter your email!';
        newAlert.style.backgroundColor = 'var(--validate-empty)';

    } else {

        newAlert.innerHTML = 'Email failed validation!';
        newAlert.style.backgroundColor = 'var(--validate-error)';

    }
}
