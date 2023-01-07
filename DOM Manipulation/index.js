const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const img = document.createElement('img');
const mainBg = document.querySelector('#main-bg');
const btnCalcular = document.querySelector('#btnCalcular');
const p2 = document.querySelector('.p2');


h1.innerHTML = 'Cambiando el Inner HTML con JavaScript';

// h1.innerText = 'Cambiando el Inner <br> HTML con JavaScript';

h1.classList.add('rojo');
h1.classList.remove('verde');

//input.value = "Valor 1";

//img.setAttribute('src', 'https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg');

mainBg.style.backgroundImage = 'url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';

btnCalcular.addEventListener('click', function(){
    const resultado = 'El resultado es: ' + input1.value + input2.value;
    p2.style.fontSize = '50px';
    p2.innerText = resultado;
})





