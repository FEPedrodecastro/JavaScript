/* //

usernames = [
  "john",
  "doe123",
  "johndoe123456",
  "user_1",
  "username123456",
  "hello",
];

const validUsernames = usernames.filter((elemento) => {
  return elemento.length < 10;
});

console.log(validUsernames); */

///

function allEvens(numbers) {
  return numbers.every((num) => num % 2 === 0);
}

// ou 

function allEvens(numeros) {
  const pares = numeros.every((element) => element % 2 == 0);

  return pares;
}
