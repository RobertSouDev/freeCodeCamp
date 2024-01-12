/*
Você pode gerar um número natural aleatório no intervalo entre zero e um número dado. Você também pode escolher um número diferente para este intervalo.

Chamaremos o número mínimo de min e o número máximo de max.

Essa fórmula fornece um número natural aleatório no intervalo de min até max. Leve um momento para ler e entender o que esse código está fazendo:

Math.floor(Math.random() * (max - min + 1)) + min
Crie uma função chamada randomRange que recebe um intervalo de myMin a myMax e retorne um número natural aleatório que é maior ou igual a myMin e menor ou igual a myMax.


*/

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;


}