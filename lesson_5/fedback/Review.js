'use strict';

class Review {
    constructor(container, id, name, text, city, isApprove) {
        this.container = container;
        this.id = id;
        this.name = name;
        this.city = city;
        this.text = text;
        this.isApprove = isApprove;

        
        this._render();    
        //this._approve();
        //this._removeReview();
    }
        _render() {
            const $card = $('<div/>', {
                class: this.isApprove ? 'card border-success' : 'card border-warning'  
            });
            const $cardBody = $('<div class="card-body"/>');
            const $cardText = $('<p/>', {
                class: 'card-text',
                text: this.text
            });
            const $cardName = $('<p/>', {
                class: 'text-right икшвпу',
                text: this.name
            })
            const $cardCity = $('<p/>', {
                class: 'text-muted text-right',
                text: this.city
            });
            const $cardHeader = $('<div/>', {
                text: this.isApprove ? 'Подтверждён' : 'На модерации',
                class: this.isApprove ? 'card-header text-success' : 'card-header text-warning',
            });
            
            const $cardFooter1 =$('<div/>', {
                class: 'card-footer' 
            });            
            
            const $cardFooter2 =$('<div/>', {
                class: 'card-footer' 
            });
            
            const $approveBtn = $('<button/>', {
                type: 'button',
                class: this.isApprove ? 'btn col btn-warning' : 'btn col btn-success',
                text: this.isApprove ? 'На модерацию' : 'Подтвердить',
                id: 'aproveReview',
                'data-id': this.id
            });
            
            const $removeBtn = $('<button/>', {
                type: 'button',
                class: 'btn col btn-danger',
                text: 'Удалить',
                id: 'removeReview',
                'data-id': this.id
            });
            
            //Создание структуры
            $cardHeader.appendTo($card);
            $cardBody.appendTo($card);
            $cardText.appendTo($cardBody);
            $cardName.appendTo($cardBody);
            $cardCity.appendTo($cardBody);
            $cardFooter1.appendTo($card);
            $approveBtn.appendTo($cardFooter1);
            $cardFooter2.appendTo($card);
            $removeBtn.appendTo($cardFooter2);
            $(this.container).append($card);
        }
    
        //_approve() {
        //    
        //    $('.card').on('click', e => {
        //        const $currentCard = $(e.currentTarget);
        //        const $approveBtn = $currentCard.find('#aproveReview');
        //        
        //        if (this.id === $(e.target).data('id') && e.target.id === 'aproveReview') {
        //            if (!this.isApprove) {
        //                this.isApprove = true;
        //                $currentCard.find('.card-header')
        //                    .text('Подтверждён')
        //                    .addClass('text-success')
        //                    .removeClass('text-warning');
        //                $currentCard.find('#aproveReview')
        //                    .text('На модерацию')
        //                    .addClass('btn-warning')
        //                    .removeClass('btn-success');
        //                $currentCard
        //                    .addClass('border-success')
        //                    .removeClass('border-warning');
        //            } else {
        //                this.isApprove = false;
        //                $currentCard.find('.card-header')
        //                    .text('На модерации')
        //                    .addClass('text-warning')
        //                    .removeClass('text-success');
        //                $currentCard.find('#aproveReview')
        //                    .text('Подтвердить')
        //                    .addClass('btn-success')
        //                    .removeClass('btn-warning');
        //                $currentCard
        //                    .addClass('border-warning')
        //                    .removeClass('border-success');
        //            }
        //        }                
        //    });
        //}
    
        //_removeReview() {
        //    $('.card').on('click', e => {
        //        const $currentCard = $(e.currentTarget);
        //        if (this.id === $(e.target).data('id') && e.target.id === 'deleteReview') {
        //            $currentCard.remove();
        //            
        //            
        //        };
        //        
        //    });
        //
        //}
}