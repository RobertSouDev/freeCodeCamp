/*
Usar o parâmetro rest com parâmetros de função
Para nos ajuda a criar funções mais flexíveis, ES6 introduziu o parâmetro rest para parâmetros de funções. Com o parâmetro rest, você pode criar funções que recebem um número variável de argumentos. Esses argumentos são armazenados em um array que pode ser acessado depois dentro da função.

Verifique esse código:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
O console exibiria as strings You have passed 3 arguments e `You have passed 4 arguments..

O parâmetro rest elimina a necessidade de usar o objeto arguments` e nos permite usar métodos de array no array de parâmetros passados para a função `howMany`.

Modifique a função sum usando o parâmetro rest de tal forma que a função sum seja capaz de receber qualquer número de argumentos e retornar a soma deles.
*/

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }