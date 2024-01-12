/*
Se você possui um array multidimensional, você pode usar a mesma lógica no ponto de passagem anterior para iterar através de arrays e de qualquer sub-array. Exemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
Isso exibe no console cada subelemento dentro de arr, um de cada vez. Note que para o laço interno, nós estamos verificando a propriedade .length de arr[i], desde que arr[i] também seja um array.

Modifique a função multiplyAll para que retorne o produto de todos os números nos sub-arrays de arr.
*/

function multiplyAll(arr) {
    let product = 1;
    // Altere apenas o código abaixo desta linha
    for (var i=0; i < arr.length; i++) {
      for (var j=0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Altere apenas o código acima desta linha
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);