class Review {
    constructor(container, id, name, text, city, isApprove, img = 'https://placehold.it/437x300') {
        this.container = container;
        this.id = id;
        this.name = name;
        this.city = city;
        this.text = text;
        this.isApprove = isApprove;
        this.src = img;
        
        this._render() 
    }
        _render() {
            const $card = $('<div class="card"/>');
            const $img = $('<img/>', {
                src: this.src,
                class: 'card-img-top'
            });
            const $cardBody = $('<div class="card-body"/>');
            const $cardText = $('<p/>', {
                class: 'card-text',
                text: this.text
            });
            const $cardName = $('<p/>', {
                class: 'text-right',
                text: this.name
            })
            const $cardCity = $('<p/>', {
                class: 'text-muted text-right',
                text: this.city
            });
            const $carHeader = $('<div/>', {
                class: 'card-footer'
            });
            
            //Создание структоры
            $img.appendTo($card);
            $cardBody.appendTo($card);
            $cardText.appendTo($cardBody);
            $cardName.appendTo($cardBody);
            $cardCity.appendTo($cardBody);
            $carHeader.appendTo($card);
            $(this.container).append($card);
        }
}