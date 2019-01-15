'use strict';

class Form {
    constructor(form) {
        this.form = form;
        this.valid = false;
        
        this.regExp = {
            text: /^[a-zа-яА-яёЁ]{4,30}$/i,
            tel: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gmi,
            email: /^[a-z?\-?\.]+@[a-z?\-?\.]+\.[a-z]{2,3}/gmi
        }
        
        this._formInputInit(this.form);
    }
    
    _formInputInit(form) {
        const allFormInputs = [...document.getElementById(form).getElementsByTagName('input')];
        
        for (let field of allFormInputs) {
            this._validateInput(field);
        }
    }
    
    _validateInput(field) {
        field.addEventListener('input', () => {
            if (this.regExp.hasOwnProperty(field.type)) {
                if (this.regExp[field.type].test(field.value)) { 
                    field.classList.add('is-valid');
                    field.classList.remove('is-invalid'); 
                } else {
                    field.classList.add('is-invalid');
                }
            }
        })
    }
    
    isValidForm() {
        if (![...document.getElementById(this.form).querySelectorAll('.is-invalid')].length && 
           ![...document.getElementById(this.form).querySelectorAll('.is-valid')].length) {
            console.log('ни тех ни тех');
            return false;
        } else if ([...document.getElementById(this.form).querySelectorAll('.is-invalid')].length) {
            console.log('красные поля');
            return false;
        } else {
            return true;
        }
        
    }
}


