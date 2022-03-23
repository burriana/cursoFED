function addToCart(id) {
  alert("add to cart");
}

function removeFromCart(id) {
  alert("remove to cart");
}

document.querySelectorAll(".cardProduct").forEach(function (element) {
  element.addEventListener("click", function (e) {
    var dataID = element.getAttribute("data-id");
    alert(dataID);
    if (e.target.classList.contains("cardAdd")) {
      addToCart(dataID);
    }
    if (e.target.classList.contains("cardRemove")) {
      removeFromCart(dataID);
    }
  });
});


const cards = document.getElementById("cards");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

function renderCarts() {
  products.forEach((item) => {
    templateCard
      .querySelector(".cardProduct")
      .setAttribute("id", "card" + item.id);
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
document.addEventListener("DOMContentLoad", () => {
  renderCarts();
});
