/*
Usar recursão para criar uma contagem regressiva
Em um desafio anterior, você aprendeu como usar recursão para substituir laços for. Agora, vamos analisar uma função mais complexa, a qual retorna um array de inteiros consecutivos começando com 1 até o número passado para a função.

Como mencionado no desafio anterior, haverá um caso de base. O caso de base diz a função recursiva quando ela não precisa mais chamar a si. É um caso simples onde o valor de retorno já é conhecido. Também há uma chamada recursiva, que executa a função original com argumentos diferentes. Se a função para escrita for correta, eventualmente o caso de base irá progredir.

Por exemplo, vamos dizer que você quer escrever uma função recursiva que retorna um array contendo os números de 1 até n. Essa função precisará aceitar um argumento, n, representando o número final. Então, ela precisará chamar a si mesma com valores progressivamente menores, começando em n até chegar a 1. Você poderia escrever a função da seguinte forma:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
O valor [1, 2, 3, 4, 5] será exibido no console.

Inicialmente, isso parece contraintuitivo já que o valor de n diminui, mas os valores no array final estão em ordem crescente. Isso acontece porque a adição no array (push) acontece por último, após uma chamada recursiva ter retornado. Nenhum ponto onde n é adicionado ao array, countup(n - 1) já foi avaliado e retornado [1, 2, ..., n -1].

Definimos uma função chamada countdown com um parâmetro (n). A função deve usar recursão para retornar um array contendo inteiros n até 1 com base no parâmetro n. Se a função for chamada com um número menor que 1, a função deverá retornar um array vazio. Por exemplo, chamar essa função com n = 5 deve retornar o array [5, 4, 3, 2, 1]. Sua função precisa usar recursão para chamar a si mesma e não depender de nenhum tipo de laço.


*/

// Altere apenas o código abaixo desta linha
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  
  // Testes
  console.log(countdown(-1)); // Deve retornar um array vazio []
  console.log(countdown(10)); // Deve retornar [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  console.log(countdown(5)); // Deve retornar [5, 4, 3, 2, 1]
  // Altere apenas o código acima desta linha