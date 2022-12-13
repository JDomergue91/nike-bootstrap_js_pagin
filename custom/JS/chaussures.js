class Chaussures {
    constructor (nom, prix, image){
        this.nom = nom;
        this.prix = prix;
        this.image = image;
        this.html = document.createElement("div");
        this.html.className = "col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center position-relative blockChaussure";
        this.html.innerHTML = `<img src="images/${this.image}" width="100%" class="gray-scale">
        <div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">${this.prix}€</div>
        <div class="position-absolute model p-3  fw-bolder h3">${this.nom}</div>`
    }
    get getHtml (){
        return this.html

    } 
};

