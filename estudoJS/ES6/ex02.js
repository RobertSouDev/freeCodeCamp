/*
Mute um array declarado com const
Se você não está familiarizado const, confira este desafio sobre a constpalavra-chave .

A constdeclaração tem muitos casos de uso em JavaScript moderno.

Alguns desenvolvedores preferem atribuir todas as suas variáveis ​​usando constpor padrão, a menos que saibam que precisarão reatribuir o valor. Somente nesse caso, eles usam let.

No entanto, é importante entender que os objetos (incluindo arrays e funções) atribuídos a uma variável usando constainda são mutáveis. Usar a constdeclaração apenas evita a reatribuição do identificador da variável.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
s = [1, 2, 3]resultará em um erro. Depois de comentar essa linha, o console.logvalor será exibido [5, 6, 45].

Como você pode ver, você pode alterar o [5, 6, 7]próprio objeto e a variável sainda apontará para o array alterado [5, 6, 45]. Como todos os arrays, os elementos do array ssão mutáveis, mas como constfoi usado, você não pode usar o identificador da variável spara apontar para um array diferente usando o operador de atribuição.

Uma matriz é declarada como const s = [5, 7, 2]. Altere a matriz para [2, 5, 7]usar várias atribuições de elementos.


*/

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();