/*
Gerar frações consultadas com JavaScript
Números aleatórios são úteis para criar comportamento aleatório.

JavaScript tem a função Math.random() que gera um número decimal aleatório entre 0 (incluso) e 1 (excluso) . Assim, Math.random() pode retornar um 0 mas nunca retornará 1.

Observação: de modo semelhante ao que usamos ao armazenar valores com operador de atribuição, todas as chamadas de função serão resolvidas antes da execução da instrução return. Assim, podemos usar a instrução return para devolver o valor da função Math.random().

Alterar randomFraction para retornar um número aleatório ao invés de retornar 0.
*/

function randomFraction() {

    // Altere apenas o código abaixo desta linha
  
    return Math.random(1);
  
    // Altere apenas o código acima desta linha
  }