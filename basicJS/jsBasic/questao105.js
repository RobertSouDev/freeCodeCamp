/*
Você pode gerar números decimais aleatórios com Math.random(), mas, às vezes, você precisa gerar números naturais aleatórios. O processo a seguir fornecerá um número natural aleatório menor que 20:

Use Math.random() para gerar um número decimal aleatório.
Multiplique o número decimal aleatório por 20.
Use Math.floor() para arredondar o número para baixo para o número natural mais próximo.
Lembre-se de que Math.random() nunca pode retornar um 1. Então, é realmente impossível obter 20, já que você está pensando para baixo com Math.floor(). Esse processo fornece um número natural aleatório no intervalo de 0 até 19.

Juntando tudo, essa é a aparência do código:

Math.floor(Math.random() * 20);
Estamos chamando Math.random(), multiplicando o resultado por 20 e passando o valor para a função Math.floor() para arredondar o valor para o número natural mais próximo abaixo.

Use essa técnica para gerar e retornar um número natural aleatório entre 0 e 9.
*/

function randomWholeNum() {
    return Math.floor(Math.random(1) * 10);
  }
  
  // Exemplo de uso da função para gerar um número natural aleatório entre 0 e 9
  console.log(randomWholeNum());