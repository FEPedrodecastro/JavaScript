/* // exercicio 1

function multiply(a, b) {
  return a * b;
}

// exercicio 2

function isShortsWeather(temperature) {
  if (temperature > 25) {
    return true;
  } else {
    return false;
  }
}

//exercicio 3

function lastElement(array) {
  if (array.length === 0) {
    return null;
  } else {
    return array[array.length - 1];
  }
}

//exercicio 4

function capitalize(string) {
  if (string.length == 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//exercicio 5

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//ou

function sumarray2(array) {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  return sum;
}

//exercicio 6

function returnDay(dayNum) {
  switch (dayNum) {
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return null;
  }
}

//ou

// Exercício 06

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function returnDay(day) {
  if (day > 0 && day < 8) {
    return daysOfWeek[day - 1];
  } else {
    return null;
  }
}

//calculadora

function calculadora(numb1, parametro, numb2) {
  switch (parametro) {
    case "+":
      return numb1 + numb2;
    case "-":
      return numb1 - numb2;
    case "*":
      return numb1 * numb2;
    case "/":
      if (numb2 == 0) {
        return "Impossível dividir por 0";
      } else {
        return numb1 / numb2;
      }
    default:
      return null;
  }
}


//
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firtNames = fullNames.map(function (nick) {
  return nick.first;
})

console.log(firtNames);

const greet = (name) => {
  return `Hello, ${name}!`;
}; */