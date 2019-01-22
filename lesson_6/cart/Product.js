class Product {
    constructor(id, title, price, img = 'https://placehold.it/200x150', container = '#products') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.container = container;
        
        this._render();
    }
    
    _render() {
        const $wraper = $('<div/>', {
            class: 'product border-succes',
            'data-id': this.id,
            'data-price': this.price,
            'data-name': this.title
        });
        
        const $img = $('<img/>', {
            src: this.img
        });
        
        const $desc = $('<div/>', {
            class: 'desc'
        });
        
        const $name = $('<p/>', {
            text: this.title
        })
        
        const $price = $(`<p> Цена: <span class="product-price">${this.price}</span> руб.</p>`);
        
        const $buyBtn = $('<button/>', {
            class: 'buyBtn',
            text: 'Купить',
            'data-id': this.id,
            'data-price': this.price,
            'data-name': this.title
        })
        
        //Создание структуры
        $img.appendTo($wraper);
        $name.appendTo($desc);
        $price.appendTo($desc);
        $buyBtn.appendTo($desc);
        $desc.appendTo($wraper);
        $(this.container).append($wraper);
        
        $wraper.draggable({
            revert: true
        });
    }
}