// Amb appendChild crearem una nova opció de navegació en el menú principal
const child = document.createElement('a')
child.textContent = 'Nuevo'
child.href ='#'

//const navegacion = document.querySelector('.navegacion')
// navegacion esta declarado en el ejercicio7
navegacion.appendChild(child)

busqueda = document.querySelector('.busqueda')
//console.log(busqueda);
busqueda.placeholder = 'Burriana, Paris y Londres'

