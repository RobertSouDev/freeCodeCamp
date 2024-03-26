/*
Substituir laços usando recursão
Recursão é o conceito de que uma função pode ser chamada por ela mesma. Para ajudar a entender isso, comece a pensar sobre a seguinte tarefa: multiplique os primeiros n elementos de um array para criar o esses elementos do produto. Usando um laço for, você poderia fazer isso:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
No entanto, note que multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Isso significa que você pode reescrever multiply dentro da própria função e nunca precisar usar um laço.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
A versão recursiva de multiply fica dessa forma. No caso de base, onde n <= 0, ele retorna 1. Para valores maiores de n, a função chama a si mesma, mas com n - 1. Essa chamada da função é avaliada da mesma forma, chamando multiply novamente até que n <= 0. Nesse ponto, todas as funções podem retornar e a função multiply original retorna a resposta.

Observação: funções recursivas precisam ter um caso de base quando elas retornam sem chamar a função novamente (nesse exemplo, quando n <= 0), caso contrário , elas nunca vão parar de executar.

Escreva uma função recursiva, sum(arr, n), que retorna a soma dos primeiros n elementos de um array arr.< /span>
*/

function sum(arr, n) {
    // Altere apenas o código abaixo desta linha
   if (n <= 0) {
      return 0;
    } else {
      // Chama a função recursivamente para somar os primeiros n - 1 elementos e adiciona o elemento arr[n - 1]
      return sum(arr, n - 1) + arr[n - 1];
    }
    // Altere apenas o código acima desta linha
  }    