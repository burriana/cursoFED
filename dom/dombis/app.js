// Acceder a los elementos

const inicio = document.getElementById('inicio')
const portafolio = document.getElementById('portafolio')
const contacto = document.querySelector('#contacto')
const nav = document.querySelector('nav')

// Cambiar texto
inicio.innerText = 'Home'

// 1.- Crear elementos
// Un <a>
const ytlink = document.createElement('a');
ytlink.textContent = ('YouTube ');
ytlink.href ='https://youtube.com/'
ytlink.setAttribute('class','nav-link')

// Un <h1>
const eleH1 = document.createElement('h1');
eleH1.setAttribute('class','titulo');     // crear atributo class='titulo'
eleH1.setAttribute('id','titulo');        // crear atributo id='titulo'
eleH1.removeAttribute('class','titulo')  // eliminar un atributo
console.log(eleH1.getAttribute('id'));    // obtener el valor del atributo
eleH1.innerHTML = 'Hola, <i> mundo </i>';
console.log(eleH1.hasAttribute('id'));    // preguntar si tiene un elemento
console.log(eleH1.innerHTML)
console.log(eleH1.outerHTML)

// Un <p>
const parrafo = document.createElement('p')
parrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat temporibus voluptatem neque ullam maxime necessitatibus odit, laborum esse nobis molestiae fuga hic accusantium facilis eum, ad est optio officiis.'
parrafo.setAttribute('id','info2');
 const info = document.getElementById('info')
 //const info2 = document.getElementById('info2')
// console.log(info)
info.innerText ='Hola'
info.textContent ='Hola y , adios'


// 2.- Añadir como hijo
// prepend() --> Añade siempre como 1er hijo
// append() --> Añade como ultimo hijo
// appendChild() ---> idem que apend
// before(,) --> Inserta antes de un hijo definido
// insertBefore(,) --> Inserta antes de un hijo definido
// after(,) --> Inserta despues de un hijo definido
nav.insertBefore(ytlink,portafolio)


const $contenedor = document.getElementById('contenedor')
$contenedor.prepend(eleH1)
$contenedor.append(parrafo)

// Prevenir
ytlink.addEventListener('click',(e)=>{
  e.preventDefault();
})




//console.log(inicio.textContent);

