// Amb appendChild crearem una nova opció de navegació en el menú principal
const child = document.createElement('a')
child.textContent = 'Nuevo'
child.href ='#'

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(child)