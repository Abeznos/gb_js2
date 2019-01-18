class Fedback {
    constructor(sourse, container = '.card-deck') {
        this.sourse = sourse;
        this.container = container;
        this.allFedback = [];
        
        this._render();
    }
    

    _render() {
        
        fetch(this.sourse)
            .then(result => result.json())
            .then(data => {
                for (let review of data) {
                    const card = new Review(this.container, review.id, review.name, review.text, review.city, review.isApprove);
                }
            
            })
    }
    
}