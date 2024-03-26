/*
Usar atribuição de desestruturação para atribuir variáveis de objetos aninhados
Você pode usar os mesmos princípios das últimas duas lições para desestruturar valores de objetos aninhados.

Usando um objeto similar aos exemplos anteriores:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
Aqui está como extrair valores de propriedades de objetos e atribuí-los a variáveis com o mesmo nome:

const { johnDoe: { age, email }} = user;
E aqui está como você pode atribuir o valor de uma propriedade de um objeto para variáveis com nomes diferentes:

const { johnDoe: { age: userAge, email: userEmail }} = user;
Substitua as duas atribuições com uma atribuição de desestruturação equivalente. Ainda deve ser atribuído às variáveis lowToday e highToday os valores de today.low e today.high do objeto LOCAL_FORECAST.
*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Altere apenas o código abaixo desta linha
  
  
  const {today:{low:lowToday , high: highToday}} = LOCAL_FORECAST
  // Altere apenas o código acima desta linha

