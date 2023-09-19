//Prática Laboratorial 02

//Exercício 1

// Função para gerar uma cor aleatória em formato RGB
function getRandomColor() {
  const red = Math.round(Math.random() * 256);;
  const green = Math.round(Math.random() * 256);;
  const blue = Math.round(Math.random() * 256);;
  return `rgb(${red}, ${green}, ${blue})`;
}

// Função para alterar a cor de fundo de um elemento para uma cor aleatória
function changeBackgroundColor() {
  const randomColor = getRandomColor();
  this.style.backgroundColor = randomColor;
}

// Adicionar o evento de clique a cada botão
const buttons = document.getElementsByClassName("colorButton");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeBackgroundColor);
}

//Exercício 2

// Função para adicionar o parágrafo ao HTML
function addParagraph() {
  const paragraphText ="É só mais um esforço para o curso de Front-end e a seguir vou de férias";
  const paragraph = document.createElement("p");
  paragraph.textContent = paragraphText;
  document.body.appendChild(paragraph);
  
  // Mostrar os botões de tamanho de texto após o parágrafo ser adicionado
  document.getElementById("increaseFontSizeButton").style.display = "inline";
  document.getElementById("decreaseFontSizeButton").style.display = "inline";
}

// Adicionar o evento de clique ao botão "Adicionar Parágrafo"
const addParagraphButton = document.getElementById("addParagraphButton");
addParagraphButton.addEventListener("click", addParagraph, {once:true});

//Exercicio 3 e 4

// Funções para aumentar e diminuir o tamanho do texto do parágrafo
function increaseFontSize() {
  const paragraph = document.querySelector("p");
  const computedStyle = window.getComputedStyle(paragraph);
  const currentSize = parseFloat(computedStyle.fontSize);
  paragraph.style.fontSize = `${currentSize + 2}px`;
  // Alterar o alinhamento do texto para o centro ao aumentar o tamanho do texto
  paragraph.style.textAlign = "center";
}

function decreaseFontSize() {
  const paragraph = document.querySelector("p");
  const computedStyle = window.getComputedStyle(paragraph);
  const currentSize = parseFloat(computedStyle.fontSize);
  paragraph.style.fontSize = `${currentSize - 2}px`;

  // Alterar o alinhamento do texto para o centro ao aumentar o tamanho do texto
  paragraph.style.textAlign = "right";
}

// Adicionar o evento de clique aos botões "Aumentar Tamanho do Texto" e "Diminuir Tamanho do Texto"
const increaseFontSizeButton = document.getElementById(
  "increaseFontSizeButton"
);
increaseFontSizeButton.addEventListener("click", increaseFontSize);

const decreaseFontSizeButton = document.getElementById(
  "decreaseFontSizeButton"
);
decreaseFontSizeButton.addEventListener("click", decreaseFontSize);

//Exercicio 5

// Função para adicionar o sufixo "- aprendido" uma vez a cada item da lista
function addAprendido() {
  const lista = document.getElementById("aprendiLista").getElementsByTagName("li");
  for (let i = 0; i < lista.length; i++) {
    const text = lista[i].textContent;
    if (!text.includes("– aprendido")) {
      lista[i].textContent = text + " – aprendido";
    }
  }
}

// Adicionar o evento de clique ao botão "check"
const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", addAprendido);

//Exercicio 6

// Função para adicionar um novo item à lista com base na entrada do usuário
function addNewItem() {
  const newItem = prompt('Digite algo que você aprendeu em EWeb:');
  if (newItem && newItem.trim() !== '') {
      const lista = document.getElementById('aprendiLista');
      const listItem = document.createElement('li');
      listItem.textContent = newItem;
      lista.appendChild(listItem);
  }
}

 // Adicionar o evento de clique ao botão "Adicionar novo item"
 const adicionarItemButton = document.getElementById('adicionarItemButton');
 adicionarItemButton.addEventListener('click', addNewItem);

 //Exercicio 7

 // Evento "load" para quando a página é carregada
 window.addEventListener('load', function () {
  console.log('A página está a carregar');
});

// Evento "mouseover" para o botão "Está feito"
const doneButton = document.getElementById('doneButton');
doneButton.addEventListener('mouseover', function () {
  alert('Vou apanhar sol.');
});

// Evento "keydown" para detectar quando a tecla "Enter" é pressionada
window.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
      alert('Não te esqueças de entregar o trabalho');
  }
});