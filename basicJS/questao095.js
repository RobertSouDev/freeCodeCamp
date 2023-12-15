/*
Você pode executar o mesmo código várias vezes usando um loop.

O primeiro tipo de loop que aprenderemos é chamado de while loop porque ele é executado enquanto uma condição especificada é verdadeira e para quando essa condição não é mais verdadeira.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
No exemplo de código acima, o loop while será executado 5 vezes e anexará os números de 0 a 4 a ourArray.

Vamos tentar fazer com que um loop while funcione enviando valores para um array.

Adicione os números de 5 a 0 (inclusive) em ordem decrescente a myArray usando um while loop.
*/
r: // Configuração
const myArray = [];

// Altere apenas o código abaixo desta linha
let i = 5
while( i > -1){
  myArray.push(i);
  i--;
}