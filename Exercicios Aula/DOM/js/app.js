/* //ir buscar o elemento com id mainheading
const myHeading = document.querySelector('#mainheading');

//ir buscar o elemento com tag img
const myImage = document.getElementsByTagName('img');

console.log(myHeading);
console.log (myImage);
//const btnEvent = document.querySelector("#btnEvent");


const doneTodos=document.querySelectorAll('.done');
console.log (doneTodos);

const checkbox=document.querySelector("input[type='checkbox']");
console.log (checkbox); */

/* const myPar = document.querySelector('p'); */
 
//myPar.innerText='History'

/* /* let myText = document.querySelector('span');
myText.innerText = 'Yack';

//ou
 */
/* document.querySelector('span').innerText='Yack'; */ 

/* const img = document.querySelector('img')
img.setAttribute('src','https://devsprouthosting.com/images/chicken.jpg'); */

/* 
let img = document.querySelector('img');

function troca(){
    
    if (img.getAttribute('src')==('https://devsprouthosting.com/images/chicken.jpg')) {
        img.setAttribute('src', 'https://devsprouthosting.com/images/egg.jpg')
    }else{
        img.setAttribute('src','https://devsprouthosting.com/images/chicken.jpg')
    }
} */

/* const myText =document.querySelector('#container');
myText.style.textAlign = 'center';

const myImage = document.querySelector('img');
myImage.style.width = '200px';
myImage.style.borderRadius = '50%'; */

/* let myLinks = document.querySelectorAll('a');
console.log(myLinks);

for (let element of myLinks){
    console.log(element);
    element.style.backgroundColor='red';
} */

/* let myLetters = document.querySelectorAll('span');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (let i = 0; i < myLetters.length; i++) {
    myLetters[i].style.color = colors[i % colors.length];
}
 */

/* const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++){
    if(li[i].classList.contains('highlight') == true){
        li[i].classList.remove('highlight');
    }else{
        li[i].classList.add('highlight')
    }
}
 */

/* const myContainer = document.querySelector('#container'); 

 for (let index = 1; index < 101; index++) { 
    const button = document.createElement('button'); 
    button.innerText = 'Botão '+index;
     
    myContainer.appendChild(button); 
} 

 */

/* const helloButton = document.querySelector('#hello');
const byeButton = document.querySelector('#goodbye');

helloButton.addEventListener('click', function() {
  alert('Olá');
})

// Adiciona o evento de clique ao botão "Bye"
byeButton.addEventListener('click', function() {
  alert('Adeus');
}) */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  document.getElementById('colorButton').addEventListener('click', function() {
    // Gerar valores RGB aleatórios entre 0 e 255
    var red = getRandomInt(256);
    var green = getRandomInt(256);
    var blue = getRandomInt(256);
  
    // Atualizar a cor de fundo com a cor aleatória gerada
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  });
  
  