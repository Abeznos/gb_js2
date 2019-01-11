class GalleryItem {
    constructor(src, srcMax, alt) {
        this.src = src;
        this.srcMax = srcMax;
        this.alt = alt;
    }
}

class OpenedImage {
    constructor(src, currentImage) {
        this.src = src;
        this.currentImage = currentImage;

    }
    openImage(src) {
        const imageOpen = new Image();
        imageOpen.src = src;
        
        const result = `<img src="${this.src}">`;
        
        console.log(this.currentImage);
        return result;
    }
    
}
