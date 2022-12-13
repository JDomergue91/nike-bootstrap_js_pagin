
const Catalogue = [
{nom : "Air Jordan 1", prix : 140, image : "jordan-1.webp"},
{nom : "Air Jordan 2", prix : 140, image : "jordan-2.webp"},
{nom : "Air Jordan 3", prix : 140, image : "jordan-3.webp"},
{nom : "Air Jordan 4", prix : 140, image : "jordan-4.webp"},
{nom : "Air Jordan 5", prix : 140, image : "jordan-5.webp"},
{nom : "Air Jordan 6", prix : 140, image : "jordan-6.webp"},
{nom : "Air Jordan 7", prix : 140, image : "jordan-1.webp"},
{nom : "Air Jordan 8", prix : 140, image : "jordan-2.webp"},
{nom : "Air Jordan 9", prix : 140, image : "jordan-3.webp"},
{nom : "Air Jordan 10", prix : 140, image : "jordan-4.webp"},
{nom : "Air Jordan 11", prix : 140, image : "jordan-5.webp"},
{nom : "Air Jordan 12", prix : 140, image : "jordan-6.webp"},
{nom : "Air Jordan 13", prix : 140, image : "jordan-1.webp"},
{nom : "Air Jordan 14", prix : 140, image : "jordan-2.webp"},
{nom : "Air Jordan 15", prix : 140, image : "jordan-3.webp"},
{nom : "Air Jordan 16", prix : 140, image : "jordan-4.webp"},
{nom : "Air Jordan 17", prix : 140, image : "jordan-5.webp"},
{nom : "Air Jordan 18", prix : 140, image : "jordan-6.webp"},
{nom : "Air Jordan 19", prix : 140, image : "jordan-1.webp"},
{nom : "Air Jordan 20", prix : 140, image : "jordan-2.webp"},
{nom : "Air Jordan 21", prix : 140, image : "jordan-3.webp"},
{nom : "Air Jordan 22", prix : 140, image : "jordan-4.webp"},
{nom : "Air Jordan 23", prix : 140, image : "jordan-5.webp"},
{nom : "Air Jordan 24", prix : 140, image : "jordan-6.webp"} ];

let nbElementsPage = 3;
const zoneChaussures = document.getElementById("zoneChaussures");
const zonePaginatiion = document.getElementById("zonePagination");





Catalogue.forEach(chaussure => {
    const objetChaussure = new Chaussures(chaussure.nom, chaussure.prix, chaussure.image)
zoneChaussures.appendChild(objetChaussure.getHtml)
});

const nbBoutons = Math.ceil(Catalogue.length/nbElementsPage);


for (let index = 0; index < nbBoutons; index++) {
  const li = document.createElement("li");
  li.classList.add("page-item");
  
  zonePaginatiion.append(li);
  const a = document.createElement("a");
  a.classList.add("page-link");
  a.textContent = index+1;
  a.tabindex = "-1";

  if (index == 0) {
    a.classList.add("active");
  }
  li.append(a);

  li.addEventListener("click", () => {
    showShoes(index);

  })
};



function showShoes(index) {
    const allShoes = document.querySelectorAll(".blockChaussure");
    const startAffichage = (index)*nbElementsPage;
    const endAffichage = startAffichage+nbElementsPage;
    allShoes.forEach((chaussure, indexblock) => {

    if (indexblock >= startAffichage && indexblock < endAffichage) {
        chaussure.classList.remove("d-none")
        
    } else {
        chaussure.classList.add("d-none");

    }
    });
    
}

showShoes(0);

