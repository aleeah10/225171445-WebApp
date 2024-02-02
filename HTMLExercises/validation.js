function validateForm(event) {
    event.preventDefault();
    clearErrorMessages();
    validateName();
    validteEmail();
    validateAge();
}

function validateName() {
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.ariaValueMax.trim();

    if (nameValue === '') {
        displayErrorMessage(nameInput, 'Name is required.');
        }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        displayErrorMessage(emailInput, 'Email is required.');
    } else if (!emailPattern.test(emailValue)) {
        displayErrorMessage(emailInput, 'Invalid email format.');
    }
}

function validateAge() {
    const ageInput = document.getElementById('age');
    const ageValue = ageInput.value.trim();

    if (ageValue === '') {
        displayErrorMessage(ageInput, 'Age is required.');
    } else if (isNaN(ageValue) || ageValue < 0) {
        displayErrorMessage(ageInput, 'Invalid age.');
    }
}

function displayErrorMessage(inputElement, message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error';
    errorMessage.textContent = message;

    inputElement.parentNode.appendChild(errorMessage);
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(errorMessage => errorMessage.remove());
}