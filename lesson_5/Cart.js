class Cart {
    constructor (sourse, container = '#cart') {
        this.source = sourse;
        this.container = container;
        this.countGoods = 0; //Общее количество товаров в корзине
        this.amount = 0; //Общая стоимаость
        this.cartItems = []; //Все товары еорзины
        
        this._init();
    }
    
    _init() {
        this._render();
        
        fetch(this.source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents) {
                    this.cartItems.push(product);
                    this._renderItem(product);
                }
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this._renderSum();
            })
    }
    
    _render() {
        const $cartItemsDiv = $('<div/>', {
            class: 'cart-items-wrap'
        });
        
        const $totalGoods = $('<div/>', {
            class: 'cart-summary sum-goods'
        });
        
        const $totalPrice = $('<div/>', {
            class: 'cart-summary sum-price'
        });
        
        
        
        $(this.container).text('Корзина');
        $cartItemsDiv.appendTo($(this.container));
        $totalGoods.appendTo($(this.container));
        $totalPrice.appendTo($(this.container)); 

    }
    
    _renderItem(product) {
        const $container = $('<div/>', {
            class: 'cart-item',
            'data-product': product.id_product
        });
        
        const $deleteBtn = $('<button>', {
            class: 'deletBtn',
            'data-id': product.id_product
        });
        
        $deleteBtn.click(e => {
            this._removeProduct(event.target)
        })
        
        $container.append($(`<p class="product-name">${product.product_name}</p>`));
        $container.append($(`<p class="product-quantity">${product.quantity}</p>`));
        $container.append($(`<p class="product-price">${product.price} руб.</p>`));
        $container.append($deleteBtn);
        //$container.append($('<button class="deletBtn"></button>'));
        
        $container.appendTo($('.cart-items-wrap'));
    }
    
    _renderSum() {
        $('.sum-goods').text(`Всего товаров в корзине: ${this.countGoods}`);
        $('.sum-price').text(`Общая сумма: ${this.amount} руб.`);
    }
    
    
    _updateCart(product) {
        let $conatiner = $(`div[data-product="${product.id_product}"]`);
        
        $conatiner.find('.product-quantity').text(product.quantity);
        $conatiner.find('.product-price').text(`${product.quantity * product.price} руб.`);
    }    
    
    addProduct(element) {
        const productId = +$(element).data('id');
        
        const find = this.cartItems.find(product => product.id_product === productId);
        
        if (find) {
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find);
        } else {
            const product = {
                id_product: productId,
                product_name: $(element).data('name'),
                price: +$(element).data('price'),
                quantity: 1
            }
            this.cartItems.push(product);
            this._renderItem(product);
            this.amount += product.price;
            this.countGoods += product.quantity;
            console.log(this.cartItems);
        };
        
        this._renderSum();
    }
    
    _removeProduct(element) {
        const productId = +$(element).data('id');
        
        const find = this.cartItems.find(product => product.id_product === productId);
        
        if (find.quantity !== 0) {            
            find.quantity--;
            this.countGoods--;
            this.amount -= find.price;
            this._updateCart(find);        
        } 
        
        if (find.quantity === 0) {
            
            $.each($('.cart-item'), (index, data) => {
                if ($(data).data('product') === find.id_product) {
                    $('.cart-item')[index].remove();
                }
            });
            
            this.cartItems.unshift(...this.cartItems.splice(1, this.cartItems.indexOf(find)));
            this.cartItems.shift();
        }
        this._renderSum();
    }
    
    _updateCartfaterDelete(product) {
        console.log('a')
    }

}