class MenuItem {
    constructor(href, title, className){
        this.href = href;
        this.title = title;
        this.linkClassName = className;
    }
    render(){
        return `<li><a href="${this.href}" class="${this.className}">${this.title}</a></li>`;
    }
}