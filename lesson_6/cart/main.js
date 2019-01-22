$(document).ready(() => {
    //Товары
    const product1 = new Product(123, 'Ноутбук', 45600);
    const product2 = new Product(456, 'Мышь', 1000);
    const product3 = new Product(125, 'Клавиатура', 1600);
    
    //Корзина
    
    const cart = new Cart('getCart.json'); 
    
    //Добавление товара
    
    $('.buyBtn').click(e => {
        cart.addProduct(event.target);
    });
    
    $('#cart').droppable({
        drop: (event, ui) => {
            //console.log(ui);
            //console.log($(ui.draggable[0]).data('id'));

            cart.addProduct($(ui.draggable)[0]);
        }
    });
});