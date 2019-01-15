'use strict';

class Form {
    constructor(id) {
        this.block = document.getElementById(id);
        this.textRegExp = /^[a-zа-яА-яёЁ]{4,30}$/i;
        this.phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gmi;
        this.emailRegExp = /^[a-z?\-?\.]+@[a-z?\-?\.]+\.[a-z]{2,3}/gmi;
        this.valid = false;
        
        this._formInputsInit(this.block);
        
    }
    
    _formInputsInit(id){
        for (let i = 0; i < id.length; i++) {
            if (id[i].type === 'text') {
                this._validate(this.textRegExp, id[i]);
            } else if (id[i].type === 'tel') {
                this._validate(this.phoneRegExp, id[i]);
            } else if (id[i].type === 'email') {
                this._validate(this.emailRegExp, id[i]);
            }
        }
    }
    
    _validate(regExp, input) {
         if (regExp.test(input.value)) {
             input.classList.add('is-valid');
             input.classList.remove('is-invalid');
             this.valid = true;
         } else {
             input.classList.add('is-invalid');
             this.valid = false;
         }
    }
    
}