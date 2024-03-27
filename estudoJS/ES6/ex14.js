/*
Usar atribuição de desestruturação para passar um objeto como parâmetro de uma função
Em alguns casos, você pode desestruturar um objeto no próprio argumento da função.

Considere o código abaixo:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
Isso desestrutura efetivamente o objeto enviado para a função. Isso também pode ser feito no lugar:

const profileUpdate = ({ name, age, nationality, location }) => {

}
Quando profileData é passado para a função acima, os valores são desestruturados do parâmetro da função para ser usado dentro da função.

Use atribuição de desestruturação dentro do argumento para a função half para enviar apenas max e min para dentro da função.
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Altere apenas o código abaixo desta linha
  const half = (stats) => (stats.max + stats.min) / 2.0; 
  // Altere apenas o código acima desta linha