let $carta = document.querySelector(".card");
$carta.addEventListener("click", (event) => {
  //console.log(event)
  let element = event.target.className;

  switch (element) {
    case "categoria concierto":
      console.log("CONCIERTO --  item was clicked");
      //event.stopPropagation();
      break;
    case "titulo":
      console.log("titulo -- item was clicked");
      //event.stopPropagation();
      break;
    case "precio":
      console.log("precio -- item was clicked");
      //event.stopPropagation();
      break;
      case "imagen":
      console.log("IMAGEN -- item was clicked");
      //event.stopPropagation();
      break;
    default:
      console.log("CARD");
      break;
  }
});
