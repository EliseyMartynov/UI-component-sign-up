// regex inspired: https://www.sitepoint.com/learn-regex/

const formSubmit = document.querySelector('#form-submit');
const emailInput = document.querySelector('#email-input');

// event for submit
formSubmit.addEventListener('click', submiting);

// creating alert & correct styles
const newAlert = document.createElement('div');
newAlert.setAttribute('class', 'alerting');
newAlert.style.padding = '0.3rem';
newAlert.style.marginBottom = '0.3rem';
newAlert.style.width = 'fit-content';

// validate function
function submiting(e) {

    // add allert
    emailInput.parentElement.insertBefore(newAlert, formSubmit);

    // regex
    let regex = /\w\@\w+\.(([\w]{2}|[\w]{3})|(([\w]{2}|[\w]{3})\.([\w]{2}|[\w]{3})))$/gi;


    if(regex.test(emailInput.value)){

        // regex test - true
        newAlert.innerHTML = 'Success!';
        newAlert.style.backgroundColor = 'var(--validate-cool)';

    } else if (emailInput.value === ''){

        // email input - empty
        newAlert.innerHTML = 'Enter your email!';
        newAlert.style.backgroundColor = 'var(--validate-empty)';

    } else {

        // regex test - false
        newAlert.innerHTML = 'Email failed validation!';
        newAlert.style.backgroundColor = 'var(--validate-error)';

    }
}
