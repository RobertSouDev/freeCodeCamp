/*
Desestruturação por meio de elementos com rest
Em algumas situações envolvendo um array desestruturado, podemos querer coletar o resto dos elementos em um array separado.

O resultado é similar a Array.prototype.slice(), como mostrado abaixo:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
O console exibiria os valores 1, 2 e [3, 4, 5, 7].

As variáveis a e b pegam o primeiro e o segundo valores do array. Depois disso, por causa da presença da sintaxe do rest, arr pega o resto dos valores na forma de um array. O elemento rest só funciona corretamente como a última variável na lista. De momento, você não pode usar a sintaxe do rest para capturar um sub-array que deixa de fora o último elemento do array original.

Use uma atribuição de desestruturação com a sintaxe do rest para simular o comportamento de Array.prototype.slice(). removeFirstTwo() deve retornar um sub-array do array original list com os dois primeiros elementos omitidos.
*/



