$(document).ready(() => {
    //Товары
    const product1 = new Product(123, 'Ноутбук', 45600);
    const product2 = new Product(124, 'Мышь', 600);
    const product3 = new Product(125, 'Клавиатура', 1600);
    
    //Корзина
    
    const cart = new Cart('getCart.json'); 
    
    //Добавление товара
    
    $('.buyBtn').click(e => {
        cart.addProduct(event.target);
    });     
    
    //Удаление товара
    //$('.cart-item').on('click', e => {
    //    console.log(event);
    //    //cart.removeProduct(event.target);
    //});    

});