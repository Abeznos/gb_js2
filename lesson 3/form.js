'use strict';

class Form {
    constructor(id) {
        this._validateNameInput();
        this._validatePhoneInput();
        this._validateEmailInput();
        this._validateTextareInput();
        this.id = document.getElementById(id);
    }
    
    _validateNameInput() {
        const nameInput = document.getElementById('exampleInputName');
        
        if (/^[a-z]{4,30}$/i.test(nameInput.value)) {
            nameInput.classList.add('is-valid');
            nameInput.classList.remove('is-invalid');
        } else {
            nameInput.classList.add('is-invalid');
        }
        
    }    
    
    _validatePhoneInput() {
        const phoneInput = document.getElementById('exampleInputPhone');
        
        if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gmi.test(phoneInput.value)) {
            phoneInput.classList.add('is-valid');
            phoneInput.classList.remove('is-invalid');
        } else {
            phoneInput.classList.add('is-invalid');
        }
    }    
    
    _validateEmailInput() {
        const emailInput = document.getElementById('exampleInputEmail1');

        if (/^[a-z?\-?\.]+@[a-z?\-?\.]+\.[a-z]{2,3}/gmi.test(emailInput.value)) {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
        } else {
            emailInput.classList.add('is-invalid');
        }
    }    
    
    _validateTextareInput() {
        const textareaInput = document.getElementById('exampleTextareaInput');

    }
    
} 