/*Mostra per consola:
• La primera .card
• L’element de la classe info del contenidor premium
• La segona card de hospedaje
• El formulari per id
• El primer menú de navegació <nav>*/

firstCard = document.getElementsByClassName('card')[0]
//console.log(firstCard);

infoPremium = document.querySelector('.premium > .info')
//console.log(infoPremium);

segunda = document.querySelectorAll('.hospedaje')[1]
//console.log(segunda);

formulario1 = document.querySelector('form#formulario')
//console.log(formulario);

menu = document.querySelector('nav')
//console.log(menu);