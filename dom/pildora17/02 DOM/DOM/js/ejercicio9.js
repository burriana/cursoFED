/*
Amb appendChild crearem una nova card, amb el següent contingut html:
<div class="card">
  <img src="img/hacer2.jpg">
    <div class="info">
      <p class="categoria concierto">concierto</p>
      <p class="titulo">Concierto de Rock</p>
      <p class="precio">$800 por persona</p>
    </div>
</div>
*/

const p1 = document.createElement('p')
p1.textContent = 'CONCIERTO'
p1.classList.add('categoria')
p1.classList.add('concierto')
//p1.setAttribute('id','hola')
//p1.setAttribute('class','hola categoria concierto')

const p2 =  document.createElement('p')
p2.textContent = 'Concierto de Rock'
p2.classList.add('titulo')

const p3 =  document.createElement('p')
p3.textContent = '$800 por persona'
p3.classList.add('precio')

const info = document.createElement('div')
info.classList.add('info')
info.append(p1)
info.append(p2)
info.append(p3)

const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'

const card = document.createElement('div')
card.classList.add('card')

card.append(imagen)
card.append(info)

const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.append(card)
