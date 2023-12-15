/*
Usando recursão para criar um intervalo de números
Continuando o desafio anterior, oferecemos a você outra oportunidade de criar uma função recursiva para resolver um problema.

Definimos uma função chamada rangeOfNumbers com duas parâmetros. A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tenham o mesmo valor.


*/

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
  }

  