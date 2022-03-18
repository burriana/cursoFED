mouseTarget = document.querySelector('.navegacion');

mouseTarget.addEventListener('mouseenter',changeWhite)
mouseTarget.addEventListener('mouseout',changeTransparente)

function changeWhite(){
  mouseTarget.style.background ='white'
}
function changeTransparente(){
  mouseTarget.style.background ='transparent'
}