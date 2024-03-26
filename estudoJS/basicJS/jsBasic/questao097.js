/*
Iterar números impares com um laço for
Laços para não ter de iterar uma vez de cada vez. Ao alterar nosso final-expression, podemos contar os números pares.

Começaremos em i = 0 e um laço while i < 10. Incrementaremos i em 2 a cada iteração com i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArray agora conterá [0, 2, 4, 6, 8]. Vamos mudar nossa initialization para que possamos contar por números impares.

Adicione (push) os números ímpares de 9 a 1 para myArray usando um laço for.
*/
// Configuração
const myArray = [];

// Altere apenas o código abaixo desta linha
for (let i = 0; i<10; i++){
  if(i % 2 === 1 ){
    myArray.push(i)
  }
}
