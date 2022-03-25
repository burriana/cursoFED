const cards = document.getElementById("cards");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
  //alert("Hola mundo")
  renderCarts()
  listenerEvents()

}) 
function addToCart(id) {
  alert("add to cart " + id);
}

function removeFromCart(id) {
  alert("remove from cart " + id);
}

function listenerEvents(){
  document.querySelectorAll(".cardProduct").forEach(function (element) {
    element.addEventListener("click", function (e) {
      var dataID = element.getAttribute("data-id");
      //alert(dataID);
      if (e.target.classList.contains("cardAdd") || e.target.classList.contains("fa-cart-plus")) {
        addToCart(dataID);
        e.stopPropagation();
      }
      if (e.target.classList.contains("cardRemove") || e.target.classList.contains("fa-trash-alt") ) {
        removeFromCart(dataID);
        e.stopPropagation();
      }
    });
  });

};

function renderCarts() {
  products.forEach((item) => {
    templateCard
      .querySelector(".cardProduct")
      .setAttribute("id", "card" + item.id);
      templateCard
      .querySelector(".cardProduct")
      .setAttribute("data-id",item.id);
    templateCard.querySelector("ul .cardAdd").setAttribute("data-id", item.id);
    templateCard
      .querySelector("ul .cardRemove")
      .setAttribute("data-id", item.id);
    templateCard.querySelector("img").setAttribute("src", item.img);
    templateCard.querySelector("h5").textContent = item.name;
    templateCard.querySelector("p").textContent = item.price;
    templateCard.querySelector("h6").textContent = item.type;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
}


