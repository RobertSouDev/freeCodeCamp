/*
A função parseInt() analisa uma string e retorna um inteiro. É preciso um segundo argumento para a raiz, que especifica a base do número na string. A raiz pode ser um inteiro entre 2 e 36.

A chamada da função parece com:

parseInt(string, radix);
Exemplo:

const a = parseInt("11", 2);
A variável radix diz que 11 não está no sistema binário, ou base 2. Esse exemplo converte uma string 11 para um inteiro < ai=3>.3

Use parseInt() na função convertToInteger para que ela converta um número binário em um inteiro e o retorne.
*/

function convertToInteger(str) {
    return parseInt(str,2)
    }
    
    convertToInteger("10011");