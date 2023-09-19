/* //alert(´hello world')


//let myname = 'Pedro'
//let myluckynumber = 10;
//alert ("O meu nome é "+myname+" e o meu número da sorte é:"+myluckynumber);

//const message = "TASTE THE RAINBOW!"
//let whisper = message.toLowerCase().trim();
//console.log(whisper)

//const word = "skateboard";


//let facialhair=word.slice(5);
//facialhair=facialhair.replace("o","e")
//console.log(facialhair);

*/
//let firstName = prompt("Qual o teu primeiro nome?");
//let lastName = prompt("Qual o teu ultimo nome?");
//let myName = (firstName+" "+lastName);
//alert ("Hello, " +myName);

/* let password = prompt ("Escolha uma palavra-passe:")
if(password.length<6)
alert("Password inválida. Mín. 6 caracteres.")



let diaDaSemana = prompt("Que dia da semana é hoje?");
diaDaSemana=diaDaSemana.toLowerCase();
switch (diaDaSemana) {
  case 'domingo':
    alert("Prepara-te! Amanhã é dia de voltar ao trabalho!");
    break;
  case 'segunda-feira':
    alert("OH nãooooooo! Quem não odeia as segundas?");
    break;
  case 'terça-feira':
    alert("Pelo menos não é Segunda-feira!");
    break;
  case 'quarta-feira':
   alert("Já vamos a meio!");
    break;
  case 'quinta-feira':
   alert("Só mais um dia!");
    break;
  case 'sexta-feira':
    alert("Sextoooouuu!!!");
    break;
  case 'sábado':
    alert("Vai uma caipirinha?");
    break;
  default:
    alert("ERROR");
    break;
}
 */
/* 
let planetas =['mercúrio','vénus','terra','mart','jupiter','saturno','urano','neptuno','plutão'];

planetas[3] = 'marte';

planetas.pop();

planetas.push('Castro')

console.log (planetas); */


/* const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Castro';
console.log(airplaneSeats); */

/* const product = {
  nome: "Produto X",
  inStock: true,
  price: 1.99,
  colors: ["vermelho", "azul", "verde"]
};

console.log(product.price); 
console.log(product.colors[2]); 

product.price = 2.55;


console.log(product.price); */

/* /* for(let i=1; i<7;i++){
  
  console.log("Da ba dee da ba daa");
} */

/* for(let i=25; i>0; i-=5){
  console.log(i)


const listaCompras = ["Maçãs", "Bananas", "Leite", "Pão", "Ovos"];

for (let i = 0; i < listaCompras.length; i++) {
 

  if (listaCompras[i] === "Leite") {
    console.log(listaCompras[i] + " Não esquecer de comprar!");
  } else {
    console.log(listaCompras[i]);
  }
}


let codigo = "";


while (codigo !== "fim") {
  codigo = prompt("Digite o item da lista de compras e digite fim para terminar:");


  if (codigo !== "fim") {
    listaCompras.push(codigo);
  }
}


console.log("Lista de compras:");
for (let i = 0; i < listaCompras.length; i++) {
  console.log(listaCompras[i]);
} */


/* function helloWorld() {
  alert('helloWorld');
}

function music() {
  for (let i = 1; i < 7; i++) {
    console.log("Da ba dee da ba daa");
  }
}

function heart() {
  alert('<3');
}

function rant(message) {
  for (let i = 1; i < 4; i++)
    console.log(i, message.toUpperCase());
}
 */

//function myName(firstName, lastName) {
  //alert(`Hey, ${firstName} ${lastName}.`);
//}

/* let snakeEyes=1;

function isnakeEyes(numb1,numb2){
  if(numb1==snakeEyes && numb2==snakeEyes){
  alert('HEY! SNAKE EYES!')
  }else{
  alert ('Try again. Not Snake Eyes')}
}
 */

/* function sum(numb1,numb2){
  let total=numb1+numb2;
  return(total);
} */