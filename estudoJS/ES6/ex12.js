/*
Usar atribuição de desestruturação para atribuir variáveis a partir de arrays
ES6 torna desestruturar arrays tão fácil quanto desestruturar objetos.

Uma diferença chave entre o operador spread (...) e a desestruturação de array é que o operador spread retira todos os conteúdos de um array e coloca em uma lista com elementos separados por vírgula. Consequentemente, você não pode pegar ou escolher quais elementos você quer atribuir a variáveis.

Desestruturar um array nos permite fazer exatamente isso:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
O console exibirá os valores de a e b como 1, 2.

É atribuída à variável a o primeiro valor do array, e à variável b é atribuído o segundo valor do array. Nós também podemos acessar o valor em qualquer índice de um array com desestruturação ao usar vírgulas para alcançar o índice desejado:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
O console exibirá os valores de a, b e c como 1, 2, 5.

Use atribuição de desestruturação para trocar os valores de a e b para que a receba os valores armazenados em b e b recebe os valores armazenados em a.
*/