class GalleryItem {
    constructor(src, srcMax, alt) {
        this.src = src;
        this.srcMax = srcMax;
        this.alt = alt;
    }
}

class OpenedImage {
    constructor(src, prevImg, nextImg) {
        this.src = src;

    }
    openImage() {
        const imageOpen = new Image();
        imageOpen.src = this.src;
        
        const result = `<img src="${this.src}">`;
    
        return result;
    }
    
}