class Fedback {
    constructor(sourse, container = '.card-deck') {
        this.sourse = sourse;
        this.container = container;
        this.allFedback = [];
        
        this._render();
        this._approveReview();
        this._removeReview();
    }
    
    _render() {
        fetch(this.sourse)
            .then(result => result.json())
            .then(data => {
                for (let review of data) {
                    const card = new Review(this.container, review.id, review.name, review.text, review.city, review.isApproved);
                    this.allFedback.push(card);
                }
            })
    }
    
    addNewReview() {
        const $userName = $('#exampleInputName').val();
        const $userCity = $('#exampleInputCity').val();
        const $userText = $('#exampleComment').val();
        const $id = this.allFedback.length + 1;
        
        const $card = new Review(this.container, $id, $userName, $userText, $userCity, false); 
        this.allFedback.push($card);
        
        $('#fedbackForm')[0].reset();
    }
    
    _approveReview() {
        $('.card-deck').on('click', '.card', e => {
            const $currentCard = $(e.currentTarget);
            const $approveBtn = $currentCard.find('#aproveReview');
            
            if (e.target.id !== 'aproveReview') {
                return;
            } else {
                this.allFedback.forEach(key => {
                    if (key.id === $approveBtn.data('id')) {
                        if(!key.isApprove) {
                            key.isApprove = true;
                            $currentCard.find('.card-header')
                                .text('Подтверждён')
                                .addClass('text-success')
                                .removeClass('text-warning');
                            $currentCard.find('#aproveReview')
                                .text('На модерацию')
                                .addClass('btn-warning')
                                .removeClass('btn-success');
                            $currentCard
                                .addClass('border-success')
                                .removeClass('border-warning');

                        } else {
                            this.isApprove = false;
                            $currentCard.find('.card-header')
                                .text('На модерации')
                                .addClass('text-warning')
                                .removeClass('text-success');
                            $currentCard.find('#aproveReview')
                                .text('Подтвердить')
                                .addClass('btn-success')
                                .removeClass('btn-warning');
                            $currentCard
                                .addClass('border-warning')
                                .removeClass('border-success');
                        }
                    }
                });
            }
        })
    }
    
    _removeReview() {
        $('.card-deck').on('click', '.card', e => {
            const $currentCard = $(e.currentTarget);
            const $removeBtn = $currentCard.find('#removeReview');
            
            const deleteItem = this.allFedback.find(review => review.id === +$removeBtn.data('id'));
            
            if (e.target.id !== 'removeReview') {
                return;
            } else {
                this.allFedback.forEach(key => {
                    if (key.id === $removeBtn.data('id')) {
                        this.allFedback.unshift(...this.allFedback.splice(this.allFedback.indexOf(deleteItem), 1));
                        this.allFedback.shift(); 
                    }
                });
                $currentCard.remove();
            }
        });
    }
}