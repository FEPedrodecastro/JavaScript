//EWEB: Teste Final - Elaborado por Pedro de Castro

// 1.Tendo em conta o funcionamento da Web, para que serve o JS?

//R: O JavaScript é uma linguagem de programação utilizada em web para adicionar interatividade, movimento e dinamismo.
// tornando as páginas mais interativas e funcionais, permitindo um elvado user experience.


//2.Imagina que o site do Cesae tem uma parte para os estudantes fazerem login. 
//Quero colocar um formulário que aparecerá  na  HomePage  aos  estudantes  após  fazerem  login.  
//Este elemento  servirá  para  que  eles  possam  colocar o feedback  para  melhoramento  do  curso frequentado.
//De acordo com o que estudámos, o elemento input será criado no html ou em JS? Justifique.

//R: O elemento input, na minha opinião, deve ser definido no HTML para que os estudantes possam inserir feedback, posteriormente com JavaScript 
//seria validados os dados do formulário, enviados dados para o back-end e realizadas outras ações. Contudo, a criação desse input em JS é totalmente funcional.


//3.Considere o seguintecódigo:

let num1 = '5';
let num2 = '3';
let jsDone = true;

function helloStudent (name,age){
    console.log('olá'+ name)
    return age;
}

let hello = helloStudent('Rita', 31);
let age = helloStudent('Rita', 31);

//Considere que o seguinte é escrito na consola do browser:

//3.1num1 + num2= 8?(1V)
//R: Falso, o resultado é 53.

//3.2 helloStudent(‘Rita’, 31)retorna olá Rita, 31?(1V)
//R: Verdadeira.

//3.3 hello retorna olá Rita,31?(1V)
//R:Falso, retorna apenas 31.

//3.4 age retorna 31?(1V)
//R: Verdadeira

//3.5 Se eu acrescentar no código num2 = 15 que valor recebo em num2?(1V)
//R: 15

//3.6 num1 + num2 é agora 20?(1V)
//R: Falso, é 515.

//3.7 Para que num1+num2seja 16, como coloco no código o num1?(1V)
//R: Devemos alterar primeiro o tipo de variavel do num1 e num2 (retirar plicas) e os numeros correspondentes para qua a soma dê 16, desta forma:
//let num1 = 11;
//let num2 = 5
//Definidos assim, quando colocar num1+num2 será 16.

//3.8 Qual é o tipo de dados da variável jsDone?(1V)
//R: boolean


//4.Considere o seguinte código:

let passwords =[1234, 'sara1986', 2023];
let userPassword = prompt('Qual é a password?');

//4.1.Usando os métodos dos Arrays, adiciona no fim do array uma palavra pass à tua escolha.(1V)
passwords.push('1991');

//4.2.Escreva uma condição que, mediante o que o que o user responder,lhe indique através de um alert se acertou numa password que está no array ou não.(1V)

if (passwords.includes(userPassword)) {
  alert('Você acertou na senha!');
} else {
  alert('Senha incorreta. Tente novamente!');
}

//5.Considere o seguinte código:

const studentGrades = [
    {
        'studentName': 'Rita',
        'grade': 16,
        namrAndGrade(){
            return `A ${this.studentName} tem nota ${this.grade}`;
        }
    },
    {
        'studentName': 'Luís',
        'grade': 20,
    },
    {
        'studentName': 'João',
        'grade': 18,
    },
    {
        'studentName': 'André',
        'grade': 15,
    },
    {
        'studentName': 'Luísa',
        'grade': 19,
    },       
];

//5.1. Usando a função forEach dos arrays, itere o array de modo a imprimir na consola o seguinte: (1V)
//R: Uso a seguinte função:
studentGrades.forEach((student) => {
    console.log(`A nota de ${student.studentName} é ${student.grade}`);
  });
  
//Considere que o seguinte é escrito na consola do browser:

//5.2. Qual o valor de studentGrades[5])? (1V)
//R: O valor e indefinido, pois o valor máximo deste array é 4 porque regra geral inicia em 0 a contagem.

//5.3 studentGrades[0].nameAndGrade() é A Rita tem nota 16? (1V)
//R: Sim é verdadeira.

//6.Tendo como base o seguinte código HTLM. Usando apenas JS ou JQuery, edite o documento com o seguinte.
//6.1. Substitua “A minha Lista de Aprendizagens como Frontend Developer” por “Os meus ensinamentos para a vida”. (1V)
//R: 
document.querySelector('.achievements').textContent = 'Os meus ensinamentos para a vida';

//6.2. A cada um dos items da lista, adicione: com sucesso! (1.5V)
//R: 
const myList = document.getElementById('myList');
const listItems = myList.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].textContent += ' com sucesso!';
}

// 6.3. Configure a submissão do formulário para que, ao ser submetido um novo item ele seja adicionado na lista. (1.5V)
//R: 
const form = document.querySelector('form');
const list = document.getElementById('myList'); 

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.getElementById('myItem'); 
  const newItemText = input.value.trim(); 

  if (newItemText !== '') { 
    const item = document.createElement('li');
    item.textContent = newItemText;
    list.appendChild(item);

    input.value = ''; 
  }
});

//7. Utilize a API do StarWars https://swapi.dev/. Se eu usar o endpoint vehicles com o id 16, que veículo recebo? (1V)

//R: Recebo as informações deste veículo:
//Nome: TIE bomber
//Modelo: TIE/sa bomber
//Fabricante: Sienar Fleet Systems

const url = 'https://swapi.dev/api/vehicles/16/';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Informações sobre o veículo:');
    console.log('Nome: ' + data.name);
    console.log('Modelo: ' + data.model);
    console.log('Fabricante: ' + data.manufacturer);
  });

  // Fim do Teste. Obrigado!
  //Pedro de Castro